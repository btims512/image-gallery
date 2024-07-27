import React from "react";
import loadingIcon from "../assets/loading-icon.svg";

const LoadingSpinner = () => (
  <div
    className="flex justify-center items-center"
    style={{ paddingTop: "170px" }}
  >
    <img src={loadingIcon} alt="Loading" className="w-20 h-20" />
  </div>
);

export default LoadingSpinner;
