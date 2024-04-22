import React from "react";
import { Link } from 'react-router-dom'
const ThemeButton = ({ text, type, width, bg, margin, anchor,linkTo }) => {
  return (
    <>
      {
        anchor ? (
          <Link
            to={linkTo}
            className={`btn ${width ? width : ""} ${bg ? "secondary-btn" : "primary-btn"
              } ${margin ? margin : ""} `}
          >
            {text}
          </Link>
        ) : (
          <button
            type={type ? type : ""}
            className={`btn ${width ? width : ""} ${bg ? "secondary-btn" : "primary-btn"
              } ${margin ? margin : ""} `}
          >
            {text}
          </button>
        )
      }
    </>
  );
};

export default ThemeButton;
