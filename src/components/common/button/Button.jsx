import React from "react";
import PropTypes from "prop-types";

const Button = ({ btnDesc }) => {
  return (
    <a href="" className="border border-white px-6 py-2 rounded-sm text-sm">
      {btnDesc}
    </a>
  );
};

Button.propTypes = {
  btnDesc: PropTypes.string,
};

export default Button;
