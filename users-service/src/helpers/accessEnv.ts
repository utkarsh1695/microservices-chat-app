const cache: { [key: string]: string; } = {};

const accessEnv = (key: string, defaultValue: string) => {
  if (!process.env[key] || typeof process.env[key] === undefined) {
    if (defaultValue) return defaultValue;
    throw new Error(`${key} not found in process.env!`);
  }

  if (!(key in cache)) {
    cache[key] = <string> process.env[key];
  }

  return cache[key];
}

export default accessEnv;