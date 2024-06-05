import React from 'react';
import clsx from 'clsx'; 
import Image from 'next/image';

const AppFeature = ({ className, imageUrl, ...props }) => {
  return (
    <div className={clsx("flex flex-col items-center", className)} {...props}>
      <div style={{ marginTop: '-26px' }}> 
        <Image src={imageUrl} alt="Feature" className="w-full h-full" />
      </div>
    </div>
  );
};

export default AppFeature;
