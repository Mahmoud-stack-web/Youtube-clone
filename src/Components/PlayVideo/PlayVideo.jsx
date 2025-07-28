import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { TbShare3 } from "react-icons/tb";
import { FiSave } from "react-icons/fi";
import jack from "../../Assets/jack.png";
import user_profile from "../../Assets/user_profile.jpg";
const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best YouTube Channel To Learn Web Development</h3>
      <div className="play-video-info">
        <p>1525 views &bull; 2 days ago</p>
        <div>
          <span>
            <AiOutlineLike />
            125
          </span>
          <span>
            <AiOutlineDislike />5
          </span>
          <span>
            <TbShare3 />
            Share
          </span>
          <span>
            <FiSave />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} />
        <div>
          <p>Jack Nicholson</p>
          <span>1.21M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Greatest Channel</p>
        <p>Subscribe to the channel</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={user_profile} />
          <div>
            <h3>
              Andrew Smith <span>1 day ago</span>
            </h3>
            <p>
              A great channel that provides a variety of content on web
              development and programming topics such as HTML, CSS, JavaScript,
              and more. The videos are well-structured and easy to understand,
              making it an excellent resource for anyone interested in learning
              web development.
            </p>
            <div className="comment-action">
              <AiOutlineLike></AiOutlineLike>
              <span>244</span>
              <AiOutlineDislike />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} />
          <div>
            <h3>
              Andrew Smith <span>1 day ago</span>
            </h3>
            <p>
              A great channel that provides a variety of content on web
              development and programming topics such as HTML, CSS, JavaScript,
              and more. The videos are well-structured and easy to understand,
              making it an excellent resource for anyone interested in learning
              web development.
            </p>
            <div className="comment-action">
              <AiOutlineLike></AiOutlineLike>
              <span>244</span>
              <AiOutlineDislike />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} />
          <div>
            <h3>
              Andrew Smith <span>1 day ago</span>
            </h3>
            <p>
              A great channel that provides a variety of content on web
              development and programming topics such as HTML, CSS, JavaScript,
              and more. The videos are well-structured and easy to understand,
              making it an excellent resource for anyone interested in learning
              web development.
            </p>
            <div className="comment-action">
              <AiOutlineLike></AiOutlineLike>
              <span>244</span>
              <AiOutlineDislike />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} />
          <div>
            <h3>
              Andrew Smith <span>1 day ago</span>
            </h3>
            <p>
              A great channel that provides a variety of content on web
              development and programming topics such as HTML, CSS, JavaScript,
              and more. The videos are well-structured and easy to understand,
              making it an excellent resource for anyone interested in learning
              web development.
            </p>
            <div className="comment-action">
              <AiOutlineLike></AiOutlineLike>
              <span>244</span>
              <AiOutlineDislike />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
