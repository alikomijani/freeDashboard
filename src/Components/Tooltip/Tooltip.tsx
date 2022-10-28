import React from "react";

type Props = {
  title: string;
};

const Tooltip = ({ title }: Props) => {
  return (
    <div
      style={{
        background: "gold",
        borderRadius: 5,
        padding: 15,
      }}
    >
      {title}
    </div>
  );
};

export default Tooltip;
