import "./Sidebar.css";
import { IoMdHome } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { FaBlog, FaCarSide } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import { FiTv } from "react-icons/fi";
import { GrTechnology } from "react-icons/gr";
import { MdLibraryMusic } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";
const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div
          data-tooltip="Home"
          onClick={() => setCategory(0)}
          className={`side-link ${category === 0 ? "active" : ""}`}
        >
          <IoMdHome size={22} />
          <p>Home</p>
        </div>
        <div
          onClick={() => setCategory(20)}
          className={`side-link ${category === 20 ? "active" : ""}`}
        >
          <IoGameController size={22} />
          <p>Gaming</p>
        </div>
        <div
          onClick={() => setCategory(2)}
          className={`side-link ${category === 2 ? "active" : ""}`}
        >
          <FaCarSide size={22} />
          <p>Automobiles</p>
        </div>
        <div
          onClick={() => setCategory(17)}
          className={`side-link ${category === 17 ? "active" : ""}`}
        >
          <FaBasketballBall size={22} />
          <p>Sports</p>
        </div>
        <div
          onClick={() => setCategory(24)}
          className={`side-link ${category === 24 ? "active" : ""}`}
        >
          <FiTv size={22} />
          <p>Entertainment</p>
        </div>
        <div
          onClick={() => setCategory(28)}
          className={`side-link ${category === 28 ? "active" : ""}`}
        >
          <GrTechnology size={22} />
          <p>Technology</p>
        </div>
        <div
          onClick={() => setCategory(10)}
          className={`side-link ${category === 10 ? "active" : ""}`}
        >
          <MdLibraryMusic size={22} />
          <p>Music</p>
        </div>
        <div
          onClick={() => setCategory(22)}
          className={`side-link ${category === 22 ? "active" : ""}`}
        >
          <FaBlog size={22} />
          <p>Blogs</p>
        </div>
        <div
          onClick={() => setCategory(25)}
          className={`side-link ${category === 25 ? "active" : ""}`}
        >
          <IoNewspaperOutline size={22} />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="" />
          <p>Jack gray</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="" />
          <p>Simon Bolivar</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="" />
          <p>Tom river</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="" />
          <p>Megan Fox</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="" />
          <p>Cameron Diaz</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
