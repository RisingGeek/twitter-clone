import React from "react";
import { LoadingIcon } from "./styles/loading";

const Loading = () => {
  return (
    <LoadingIcon>
      <svg viewBox="0 0 32 32">
        <circle
          cx="16"
          cy="16"
          fill="none"
          r="14"
          strokeWidth="4"
          style={{ stroke: "rgb(29, 161, 242)", opacity: "0.2" }}
        ></circle>
        <circle
          cx="16"
          cy="16"
          fill="none"
          r="14"
          strokeWidth="4"
          style={{
            stroke: "rgb(29, 161, 242)",
            strokeDasharray: 80,
            strokeDashoffset: 60,
          }}
        ></circle>
      </svg>
    </LoadingIcon>
  );
};

export default Loading;
