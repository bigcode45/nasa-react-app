import React, { useState } from "react";

function Main(props) {
  const { data, handleToggleModle } = props;

  const [video, setVideo] = useState(false);

  if (data?.media_type === "video") {
    setVideo(true);
  }

  return (
    <div className="imgContainer">
      {video ? (
        <iframe
          onClick={handleToggleModle}
          src={data?.url + "&controls=0&autoplay=1&mute=1&loop=1"}
        ></iframe>
      ) : (
        <img
          onClick={handleToggleModle}
          src={data?.url}
          className="bgImg"
        ></img>
      )}
    </div>
  );
}

export default Main;
