export const saveToLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = <T>(key: string): T | void => {
  try {
    const value = localStorage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }
  } catch {
    console.warn(`Unable to get local storage value: ${key}`);
  }
};
