import React from "react";
import Bounce from "react-activity/dist/Bounce";
import "react-activity/dist/Bounce.css";

const UniLoading = () => {
  return (
    <div style={{height:"100vh" }} className="d-flex align-items-center justify-content-center">
      <Bounce size={90} speed={0.7} color="#0F3C4F" />
    </div>
  );
};

export default UniLoading;
