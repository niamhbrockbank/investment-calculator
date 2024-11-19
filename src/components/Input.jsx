import { useState } from "react";

export default function Input({
  label,
  type = "number",
  inputState,
  setInputState,
  inputIdentifier,
  ...props
}) {
  const [inputValue, setInputValue] = useState(inputState[inputIdentifier]);

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleUnFocus() {
    setInputState((prevState) => {
      return { ...prevState, [inputIdentifier]: +inputValue };
    });
  }

  return (
    <p>
      <label htmlFor={inputIdentifier}>{label}</label>
      <input
        id={inputIdentifier}
        type={type}
        onChange={(e) => handleChange(e)}
        onBlur={handleUnFocus}
        value={inputValue}
        required
        {...props}
      />
    </p>
  );
}
