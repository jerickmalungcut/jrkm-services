import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import PropTypes from "prop-types";
import Hotdog from "../../../assets/hotdog.svg";

const ToggleButton = ({ open, setOpen }) => {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="outline-none border-none absolute top-0 left-0 transition-all duration-500 blue50"
    >
      {open ? (
        <VscChromeClose size={25} color="rgb(59, 130, 246)" />
      ) : (
        // <GiHamburgerMenu size={25} color="rgb(59, 130, 246)" />
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          fill="rgb(59, 130, 246)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="style=linear">
            <g id="menu-hotdog">
              <path
                id="vector"
                d="M5 6H19"
                stroke="rgb(59, 130, 246)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                id="vector_2"
                d="M3 12H21"
                stroke="rgb(59, 130, 246)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                id="vector_3"
                d="M5 18H19"
                stroke="rgb(59, 130, 246)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </g>
          </g>
        </svg>
      )}
    </button>
  );
};

ToggleButton.propTypes = {
  setOpen: PropTypes.func,
  open: PropTypes.bool,
};

export default ToggleButton;
