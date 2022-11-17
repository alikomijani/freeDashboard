import React, { useState, useEffect } from "react";

function useStorage<T>(
  key: string,
  initialValue: T
): [state: T, setStorage: (value: T) => void] {
  const rawInitialValue = JSON.stringify(initialValue);
  let value = initialValue;
  const rawValue = localStorage.getItem(key);
  if (!rawValue) {
    localStorage.setItem(key, rawInitialValue);
  } else {
    value = JSON.parse(rawValue);
  }
  const [state, setState] = useState<T>(value);
  const setStorage = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };

  useEffect(() => {
    const rawValue = localStorage.getItem(key);
    if (!rawValue) {
      localStorage.setItem(key, rawInitialValue);
    } else {
      const value = JSON.parse(rawValue);
      setState(value);
    }
  }, [key]);

  return [state, setStorage];
}

export default useStorage;
