import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import Logo from "./Logo";
const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <button className='toggle-btn'></button>
      </div>
    </Wrapper>
  );
};

export default Navbar;
