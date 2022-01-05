import { useState, useEffect } from "react";

const useInput = (validateValue) => {
  const [value, setValue] = useState("");
  const [debounceValue, setDebounceValue] = useState("");
  const [valueTouched, setValueTouched] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, 400);

    return () => clearTimeout(timer);
  });

  const valueIsValid = validateValue(debounceValue);
  const hasError = !valueIsValid && valueTouched;

  const valueInputChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const valueInputBlurHandler = (e) => {
    setValueTouched(true);
  };

  return {
    value,
    valueIsValid,
    hasError,
    valueInputChangeHandler,
    valueInputBlurHandler,
  };
};

export default useInput;
