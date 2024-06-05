"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Button from "./Button";
import { Popover } from "@headlessui/react";
import Link from "next/link";
import { TbMenu2 } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { navData } from "@/constants";

const MobileNavLinks = ({ children, ...props }) => {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 track-tight text-gray-700 ml-4"
      {...props}
    >
      {children}
    </Popover.Button>
  );
};

const Header = () => {
  return (
    <header
      className={`w-full sticky top-0 z-50 bg-[#F2EBDE] rounded-b-3xl`}
    >
      <nav>
        <Container className={"relative z-50 flex justify-between py-8"}>
          {/*Logo*/}
          <div className="relative z-10">
            <Logo />
          </div>
          {/* NavLinks */}
          <div className="hidden lg:flex lg:gap-10 items-center">
            <NavLinks />
          </div>
          {/* Buttons */}
          <div className="flex items-center gap-6">
            <Button href="#" variant="outline" className="hidden lg:block">
              Contact Us
            </Button>
            <Button href="#" className="hidden lg:block">
              Download the app
            </Button>
            {/* Mobile Navlinks*/}
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`relative z-10 -m-2 inline-flex 
                  items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 
                  hover:stroke-gray-6-- active:stroke-gray-900 [&:not(:focus-visible)]:focus-outline-none outline-none`}
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <IoIosArrowUp className="text-2xl" />
                      ) : (
                        <TbMenu2 className="text-2xl" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-[#F2EBDE] bg-opacity-60 backdrop::blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className={`absolute inset-x-0 top-0 z-0 origin-top 
                          rounded-b-2xl bg-[#F2EBDE] bg-opacity-90 pb-6 pt-32
                          shadow-2xl shawdow-[#F2EBDE]/20</>`}
                        >
                          <div className="space-y-4">
                            {navData.map(({ _id, title, href }) => (
                              <MobileNavLinks href={href} key={_id}>
                                {title}
                              </MobileNavLinks>
                            ))}
                            
                          </div>
                          <div className="mt-9 flex flex-col gap-4">
                              <Button
                                href="#"
                                variant="outline"
                              >
                                Contact Us
                              </Button>
                              <Button href="#" >
                                Download the app
                              </Button>
                            </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
