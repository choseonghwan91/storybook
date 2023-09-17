import React from "react";

interface Props {
  color: string;
}

const ArrowRight = ({ color }: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={8} height={14} fill="none">
    <path
      fill={color}
      fillRule="evenodd"
      d="M.646.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L6.293 7 .646 1.354a.5.5 0 0 1 0-.708Z"
      clipRule="evenodd"
    />
  </svg>
);

export default ArrowRight;
