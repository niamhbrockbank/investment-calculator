import { useState } from "react";

export default function Input({
  label,
  type = "number",
  inputState,
  setInputState,
  id,
  ...props
}) {
  const [inputValue, setInputValue] = useState(inputState[id]);

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleUnFocus() {
    setInputState((prevState) => {
      return { ...prevState, [id]: parseFloat(inputValue) };
    });
  }

  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        onChange={(e) => handleChange(e)}
        onBlur={handleUnFocus}
        value={inputValue}
        {...props}
      />
    </p>
  );
}
