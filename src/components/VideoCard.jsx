import React from "react";

const VideoCard = ({ info }) => {
  // const snippet = info?.snippet;
  // const statistics = info?.statistics;
  // const channelTitle = snippet?.channelTitle;
  // const title = snippet?.title;
  // const thumbnails = snippet?.thumbnails;

  const {snippet,statistics}=info;
  const {channelTitle,title,thumbnails}=snippet

  return (
    <div className="p-2 m-2 w-80 shadow-2xl shadow-gray bg-gradient-to-br from-black to-gray-700">
      <img
        src={thumbnails?.medium?.url}
        className="rounded-lg"
        alt="thumbnail"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
