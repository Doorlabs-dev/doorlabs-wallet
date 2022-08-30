import AsyncStorage from '@react-native-async-storage/async-storage';
import { isEqual, reverse, uniqWith } from 'lodash-es';
import LocalStorage from './localstore';

export function mergeArrayStableWith<T>(
  source: T[],
  other: T[],
  compareFn: (a: T, b: T) => boolean = isEqual,
  insertMode: 'unshift' | 'push' = 'push'
): T[] {
  const result = reverse(uniqWith(reverse(source), compareFn)); // 2x reverse to keep the order while keeping the last occurence of duplicates
  for (const element of other) {
    const index = result.findIndex((e) => compareFn(e, element));
    if (index === -1) {
      result[insertMode](element);
    } else {
      result[index] = element;
    }
  }
  return result;
}

class ArrayStore<T> {
  public name: string;
  public compareFn: CompareFn<T>;
  private _store: LocalStorage<T[]>;

  constructor({
    name,
    compareFn,
    defaultValue,
  }: {
    name: string;
    compareFn: CompareFn<T>;
    defaultValue?: T[];
  }) {
    this.name = name;
    this.compareFn = compareFn;
    this._store = new LocalStorage({
      name: this.name,
      defaultValue: defaultValue || [],
    });
  }

  async get(selector?: SelectorFn<T>) {
    const all = await this._store.get();
    if (selector) {
      return all.filter(selector);
    }
    return all;
  }

  async set(data: T[]) {
    const all = await this._store.get();
    const result = mergeArrayStableWith<T>(all, data, this.compareFn);

    await this._store.set(result);
  }

  async remove(selector: SelectorFn<T>) {
    const all = await this._store.get();
    const newAll = all.filter(selector);

    await this._store.set(newAll);
  }

  async push(item: T) {
    const all = await this._store.get();
    const newAll = mergeArrayStableWith(all, [item], this.compareFn);

    await this._store.set(newAll);
  }

  async setItem(selector: SelectorFn<T>, data: T) {
    const all = await this._store.get();
    const newAll = all.map((i) => {
      if (selector(i)) {
        return data;
      }
      return i;
    });
    await this._store.set(newAll);
  }
}

export default ArrayStore;
