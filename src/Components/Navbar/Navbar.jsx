import "./Navbar.css";
import { VscMenu } from "react-icons/vsc";
import { IoLogoYoutube } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RiVideoUploadLine } from "react-icons/ri";
import { IoIosMore, IoIosMic } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <nav className={`flex-div `}>
      <div className="nav-left flex-div">
        <VscMenu className="menu-icon" />
        <IoLogoYoutube className="logo" />
        <span className="logo-text">YouTube</span>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <CiSearch className="search-icon" />
        </div>
        <IoIosMic className="mic-icon" />
      </div>

      <div className="nav-right flex-div">
        <RiVideoUploadLine className="nav-icon" />
        <IoIosMore className="nav-icon" />
        <CgProfile className="user-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
