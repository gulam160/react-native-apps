import { useState, useEffect } from "react";

function useDebounce(query: string, delay: number) {
  const [debounceState, setDebouncedState] = useState(query);

  useEffect(() => {
    const debounceHandeler = setTimeout(() => {
      if (query.length > 0) {
        setDebouncedState(query);
      }
    }, delay);

    return () => {
      clearTimeout(debounceHandeler);
    };
  }, [query, delay]);

  return debounceState;
}

export { useDebounce };
