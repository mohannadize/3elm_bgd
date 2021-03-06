import { useState, useEffect } from "react";

const PREFIX = "ASHRAF-KOTB-";

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = `${PREFIX}${key}`;
  const [value, setValue] = useState(() => {
    if (typeof localStorage !== "undefined") {
      const savedValue = JSON.parse(
        localStorage.getItem(prefixedKey)
        );
        if (savedValue != null) return savedValue;
      }

    if (initialValue instanceof Function) return initialValue();
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [value, prefixedKey]);

  return [value, setValue];
}
