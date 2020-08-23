import React from "react";
import { useSelector } from "react-redux";
import { LoadingIcon } from "./styles/loading";

const Loading = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <LoadingIcon>
      <svg viewBox="0 0 32 32">
        <circle
          cx="16"
          cy="16"
          fill="none"
          r="14"
          strokeWidth="4"
          style={{ stroke: theme.defaultBg, opacity: "0.2" }}
        ></circle>
        <circle
          cx="16"
          cy="16"
          fill="none"
          r="14"
          strokeWidth="4"
          style={{
            stroke: theme.defaultBg,
            strokeDasharray: 80,
            strokeDashoffset: 60,
          }}
        ></circle>
      </svg>
    </LoadingIcon>
  );
};

export default Loading;
