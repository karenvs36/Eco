import React from 'react';
import clsx from 'clsx';

function Container({ className, ...props }) {
  return (
    <div 
        className={clsx(
            "mmx-auto px-4 sm:px-6 lg:px-8", 
            className
        )} 
        {...props}
    />
  );
}

export default Container;
