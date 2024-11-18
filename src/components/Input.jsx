import { useState } from "react";

export default function Input({ label, type = "number", ...props }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <span>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type={type}
        onChange={(e) => handleChange(e)}
        value={inputValue}
        {...props}
      />
    </span>
  );
}
