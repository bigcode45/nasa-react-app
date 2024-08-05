import React from "react";

function Footer(props) {
  const { showModle, handleToggleModle, data } = props;
  return (
    <footer>
      <div className="bgGrad"></div>
      <div>
        <h2>{data?.title}</h2>
        <h1>APOD Project</h1>
      </div>
      <button onClick={handleToggleModle}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}

export default Footer;
