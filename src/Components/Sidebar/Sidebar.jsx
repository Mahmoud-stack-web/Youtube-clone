import "./Sidebar.css";
import { IoMdHome } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { FaCarSide } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import { FiTv } from "react-icons/fi";
import { GrTechnology } from "react-icons/gr";
import { MdLibraryMusic } from "react-icons/md";
import blogs from "../../assets/blogging.png";
import { IoNewspaperOutline } from "react-icons/io5";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";
const Sidebar = ({ sidebar }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div className="side-link">
          <IoMdHome size={22} />
          <p>Home</p>
        </div>
        <div className="side-link">
          <IoGameController size={22} />
          <p>Gaming</p>
        </div>
        <div className="side-link">
          <FaCarSide size={22} />
          <p>Automobiles</p>
        </div>
        <div className="side-link">
          <FaBasketballBall size={22} />
          <p>Sports</p>
        </div>
        <div className="side-link">
          <FiTv size={22} />
          <p>Entertainment</p>
        </div>
        <div className="side-link">
          <GrTechnology size={22} />
          <p>Technology</p>
        </div>
        <div className="side-link">
          <MdLibraryMusic size={22} />
          <p>Music</p>
        </div>
        <div className="side-link">
          <img
            style={{ width: "22px", height: "22px" }}
            src={blogs}
            alt="blogs"
          />
          <p>Blogs</p>
        </div>
        <div className="side-link">
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
