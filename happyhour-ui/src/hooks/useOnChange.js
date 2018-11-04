import { useState, useCallback } from "react";

export default function useOnChange(initialState) {
  const [value, setValue] = useState(initialState);

  const onChange = useCallback(
    e => {
      return setValue(e.target.value);
    },
    [value, setValue]
  );

  return {
    value,
    onChange
  };
}
