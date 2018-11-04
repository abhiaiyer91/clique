import { useState, useCallback } from "react";

export default function useOnBlur(initialState) {
  const [value, setValue] = useState(initialState);

  const onBlur = useCallback(
    e => {
      return setValue(e.target.value);
    },
    [value, setValue]
  );

  return {
    value,
    onBlur,
  };
}
