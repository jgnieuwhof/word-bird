import { useState } from "react";

const localStorageGet = <T>(key: string): T | undefined => {
  const item = window.localStorage.getItem(key);
  return item ? JSON.parse(item) : undefined;
};

const localStorageSet = <T>(key: string, value: T) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorageGet<T>(key);
      if (!item) {
        localStorageSet(key, initialValue);
        return initialValue;
      }
      return item;
    } catch (error) {
      console.log(`Error retrieving '${key}' from localStorage: `, error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorageSet(key, valueToStore);
    } catch (error) {
      console.log(`Error setting '${key}' to localStorage: `, error);
    }
  };

  return [storedValue, setValue];
};
