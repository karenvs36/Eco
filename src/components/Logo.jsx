import React from "react";
import Link from "next/link";
import clsx from "clsx";

const Logo = ({className, props}) => {
  return (
    <Link href={"/"}>
      <h2 className={clsx(
        'font-inter', 
        'text-2xl', // Font size 
        'font-bold', // Font weight 700
        'leading-8', // Line height 32px 
        'text-center', // Text align center
        className
      )}{...props}>Eco<span className={clsx("text-green-500")}{...props}>Track</span>
      
      </h2>
    </Link>
  );
};

export default Logo;
