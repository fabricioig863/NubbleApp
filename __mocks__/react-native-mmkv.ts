const store = new Map<string, string>();

export const createMMKV = jest.fn(() => ({
  set: jest.fn((key: string, value: string) => {
    store.set(key, value);
  }),
  getString: jest.fn((key: string) => {
    return store.get(key);
  }),
  getNumber: jest.fn((key: string) => {
    const value = store.get(key);
    return value ? Number(value) : undefined;
  }),
  getBoolean: jest.fn((key: string) => {
    const value = store.get(key);
    return value === 'true';
  }),
  contains: jest.fn((key: string) => {
    return store.has(key);
  }),
  delete: jest.fn((key: string) => {
    return store.delete(key);
  }),
  clearAll: jest.fn(() => {
    store.clear();
  }),
  getAllKeys: jest.fn(() => {
    return Array.from(store.keys());
  }),
  remove: jest.fn((key: string) => {
    store.delete(key);
  }),
}));
