import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Home.css";
import Feed from "../../Components/Feed/Feed";
import { useState } from "react";
function Home({ sidebar }) {
  const [category, setCategory] = useState(0);
  return (
    <div className="home-layout">
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      ></Sidebar>
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed category={category} />
      </div>
    </div>
  );
}

export default Home;
