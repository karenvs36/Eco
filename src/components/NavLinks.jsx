import React, { useState } from 'react';
import { navData } from '@/constants';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const NavLinks = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <>
      {navData.map(({ _id, title, href }) => (
        <Link key={_id} href={href} passHref legacyBehavior>
          <a
            className="relative -mx-3 -my-2 px-3 rounded-lg py-2 text-base text-gray-700 transition-colors"
            onMouseEnter={() => setHoverIndex(_id)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <AnimatePresence>
              {hoverIndex === _id && (
                <motion.span
                  className="absolute inset-0 rounded-lg bg-gray-100"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                />
              )}
            </AnimatePresence>
            <span className='relative z-10'>{title}</span>
          </a>
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
