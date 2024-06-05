import clsx from "clsx";
import React from "react";

const Title = ({ title, className, ...props }) => {
  return (
    <h2
      className={clsx("front-medium tracking-tight", className)}
      {...props}
    >
      {title}
    </h2>
  );
};

export default Title;
