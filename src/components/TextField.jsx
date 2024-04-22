import React from "react";

const TextField = ({ label,  placeholder }) => {
  return (
    <>
      <label className="form-label w-100 m-0">
        {label}
        <textarea className="form-control" placeholder={placeholder} ></textarea>
      </label>
    </>
  );
};

export default TextField;
