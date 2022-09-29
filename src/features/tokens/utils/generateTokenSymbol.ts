export function generateTokenSymbol(name?: string) {
  if (!name) return '';

  let symbol = name[0];
  if (!/\s/g.test(name)) {
    return `${name[0]}${name[1]}`.toUpperCase();
  }

  for (let i = 1; i < name.length; i++) {
    if (/^\s$/.test(name[i])) {
      symbol += name[i + 1];
    }
  }

  return symbol.toUpperCase();
}
