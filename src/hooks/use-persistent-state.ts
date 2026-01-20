import { useEffect, useState } from "react";

type Setter<T> = (value: T | ((prev: T) => T)) => void;

/**
 * Lightweight persisted state (localStorage) for simple app flows.
 * - Safe in browser-only apps
 * - Handles JSON parse failures by falling back to initialValue
 */
export function usePersistentState<T>(key: string, initialValue: T): [T, Setter<T>] {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw == null) return initialValue;
      return JSON.parse(raw) as T;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore quota / private mode
    }
  }, [key, value]);

  return [value, setValue];
}
