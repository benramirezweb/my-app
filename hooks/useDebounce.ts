import { useEffect, useState } from 'react';

/**
 * Devuelve un valor solo después de que haya pasado un tiempo sin cambios.
 * Útil para evitar llamadas a API mientras el usuario escribe.
 */
export const useDebounce = <T>(value: T, delay: number = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
