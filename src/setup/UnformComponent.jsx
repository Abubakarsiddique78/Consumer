import React, { useRef } from "react";
import { useField } from "@unform/core";
export default function Input({ name, ...inputProps }) {
  const inputRef = useRef(null);
  const { error, clearError } = useField(name);

  return (
    <>
      <input ref={inputRef} onFocus={clearError} {...inputProps} />
      {error && <span>{error}</span>}
    </>
  );
}