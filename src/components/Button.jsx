import React, { forwardRef } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

const baseStyles = {
    solid: `inline-flex justify-center rounded-full py-2 px-3 
            text-sm font-semibold outline-2 outline-offset-2 transition-colors`,

    outline: `inline-flex justify-center rounded-full border py-[calc(theme(spacing.2)-1px)] 
              px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors`,
};

const variantStyles = {
    solid: {
        blue: `relative overflow-hidden bg-blue-500 text-white before:absolute 
               before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-blue-600 active:text-white/80 before:transition-colors`,
        gray: `bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800
               active:text-white/80`,
    },
    outline: {
        blue: `border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white 
               active:bg-blue-600 active:border-blue-600`,
        gray: `border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white 
               active:bg-gray-900 active:border-gray-900`,
    },
};

const Button = forwardRef(function Button({variant='solid', color="gray", className, href,...props},ref){
    className=clsx(baseStyles[variant], variantStyles[variant][color],
    className);
    return href ? (<Link ref={ref} href={href} className={className} {...props} />)
    :(<button ref={ref} className={className}{...props} />)
        
});

export default Button;
