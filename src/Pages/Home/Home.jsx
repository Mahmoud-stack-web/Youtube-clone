import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Home.css";
import Feed from "../../Components/Feed/Feed";
function Home({ sidebar }) {
  return (
    <div className="home-layout">
      <Sidebar sidebar={sidebar}></Sidebar>
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed />
      </div>
    </div>
  );
}

export default Home;
