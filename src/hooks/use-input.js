import { useState } from "react";

const useInput = (validateInput) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateInput(enteredValue); //return value that has the result of validation function we pass in
  const hasError = !valueIsValid && isTouched;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const validateOnBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    enteredValue,
    valueIsValid,
    hasError,
    inputChangeHandler,
    validateOnBlurHandler,
    reset,
  };
};

export default useInput;