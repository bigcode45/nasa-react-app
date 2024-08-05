import React from "react";

function SideBar(props) {
  const { handleToggleModle, data } = props;
  return (
    <div className="sideBar">
      <div onClick={handleToggleModle} className="bgOverlay"></div>
      <div className="sideBarContents">
        <h2>{data?.title}</h2>
        <div className="discriptionContainer">
          <p className="discriptionTitle">{data?.date}</p>
          <p>{data?.explanation}</p>
          <button onClick={handleToggleModle}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
