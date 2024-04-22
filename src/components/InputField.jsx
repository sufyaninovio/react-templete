import React from "react";

const InputField = ({ label, type, placeholder }) => {
  return (
    <>
      <label className="form-label w-100 m-0">
        {label}
        <input type={type} className="form-control" placeholder={placeholder} />
      </label>
    </>
  );
};

export default InputField;
