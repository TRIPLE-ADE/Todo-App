import React from "react";

const Input = ({ name, value, onChange }) => (
  <input type="text" name={name} value={value} onChange={onChange} placeholder={`Task ${name}`} />
);

export default Input;
