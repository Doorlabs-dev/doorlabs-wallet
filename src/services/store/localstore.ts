import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalStorage<T> {
  public name: string;
  public defaultValue: T;

  constructor({ name, defaultValue }: { name: string; defaultValue: T }) {
    this.name = name;
    this.defaultValue = defaultValue;
    this.init();
  }

  async init() {
    const value = AsyncStorage.getItem(this.name);
    if (!value) {
      this.set(this.defaultValue);
    }
  }

  serialize(data: T): string {
    if (!data) return '';

    return JSON.stringify(data);
  }

  deserialize(data: string): T {
    return JSON.parse(data) as T;
  }

  async set(data: T) {
    const result = this.serialize(data);
    await AsyncStorage.setItem(this.name, result);
  }

  async get() {
    const value = await AsyncStorage.getItem(this.name);
    if (value) {
      return this.deserialize(value);
    }

    return this.defaultValue;
  }
}

export default LocalStorage;