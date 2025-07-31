import "./PlayVideo.css";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { TbShare3 } from "react-icons/tb";
import { FiSave } from "react-icons/fi";
import { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../../data.js";
import moment from "moment";
import { useParams } from "react-router-dom";
const PlayVideo = () => {
  const { videoId } = useParams();
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);
  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchOtherData = async () => {
    //fetching Channel Data
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));

    //fetching Comment Data
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };
  useEffect(() => {
    fetchVideoData();
  }, [videoId]);
  useEffect(() => {
    if (apiData) {
      fetchOtherData();
    }
  }, [apiData]);
  return (
    <div className="play-video">
      <iframe
        width="704"
        height="396"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="How to NOT Fail a Technical Interview"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : "16k"}
          Views &bull;
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span>
            <AiOutlineLike />
            {apiData ? value_converter(apiData.statistics.likeCount) : "16k"}
          </span>
          <span>
            <AiOutlineDislike />
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
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : null}
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "Channel Name"} </p>
          <span>
            {channelData
              ? value_converter(channelData.statistics.subscriberCount)
              : "16k"}{" "}
            Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>
          {apiData ? apiData.snippet.description.slice(0, 250) : "Description"}
        </p>
        <hr />
        <h4>
          {apiData ? value_converter(apiData.statistics.commentCount) : 102}{" "}
          Comments
        </h4>
        {commentData.map((item, index) => {
          return (
            <div key={index} className="comment">
              <img
                src={
                  item?.snippet?.topLevelComment?.snippet
                    ?.authorProfileImageUrl || ""
                }
              />
              <div>
                <h3>
                  {item?.snippet?.topLevelComment?.snippet?.authorDisplayName ||
                    ""}{" "}
                  <span>
                    {moment(
                      item.snippet.topLevelComment.snippet.updatedAt
                    ).fromNow()}
                  </span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <AiOutlineLike></AiOutlineLike>
                  <span>
                    {value_converter(
                      item.snippet.topLevelComment.snippet.likeCount
                    )}{" "}
                  </span>
                  <AiOutlineDislike />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
