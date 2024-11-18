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

  return (
    <span>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        onChange={(e) => handleChange(e)}
        onBlur={() =>
          setInputState((prevState) => {
            return { ...prevState, [id]: parseFloat(inputValue) };
          })
        }
        value={inputValue}
        {...props}
      />
    </span>
  );
}
