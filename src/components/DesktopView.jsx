"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useDebouncedCallback } from "use-debounce";
import { features } from "./FrameView";
import { motion } from "framer-motion";
import CircleBackground from "./CircleBackground";
import PhoneFrame from "./PhoneFrame";
import AppFeature from "./AppFeature";
import walkthrough from "@/images/Walkthrough.png";
import launchImage from "@/images/Launch.png";
import loginImage from "@/images/Login.png";
import clsx from "clsx";

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export const DesktopView = () => {
  const [changeCount, setChangeCount] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const prevIndex = usePrevious(selectedIndex);
  const isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex;

  const onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex);
      setChangeCount((changeCount) => changeCount + 1);
    },
    100,
    { leading: true }
  );

  const featureImages = [launchImage, loginImage, walkthrough];

  return (
    <TabGroup
      as="div"
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24 px-6"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <TabList className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-gray-800"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 text-lg font-semibold text-gray-600">
                <Tab className="text-left focus:outline-none outline-none">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </TabList>
      <div className="relative col-span-6">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground
            color="#1A940F"
            className="animate-spin-slower -ml-96"
          />
        </div>
        <PhoneFrame className="z-10 mx-auto w-full max-w-[366px] -ml-20">
          <AppFeature imageUrl={featureImages[selectedIndex]} />
        </PhoneFrame>
      </div>
    </TabGroup>
  );
};

export const MobileView = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideContainerRef = useRef();
  const slideRefs = useRef([]);
  const featureImages = [launchImage, loginImage, walkthrough];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [changeCount, setChangeCount] = useState(0);
  const prevIndex = usePrevious(selectedIndex);
  const isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex;

  const onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex);
      setChangeCount((changeCount) => changeCount + 1);
    },
    100,
    { leading: true }
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            const newIndex = slideRefs.current.indexOf(entry.target);
            setActiveIndex(newIndex);
            setSelectedIndex(newIndex); // Set selected index when the element comes into view
            break;
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      }
    );

    slideRefs.current.forEach((slide) => {
      if (slide) {
        observer.observe(slide);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [slideContainerRef, slideRefs]);

  const scrollToIndex = (index) => {
    slideRefs.current[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
    setSelectedIndex(index);
  };

  return (
    <div className="h-auto">
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain 
        scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => (slideRefs.current[featureIndex] = ref)}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color="#1A940F"
                  className="animate-spin-slower"
                />
              </div>
              <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                <AppFeature imageUrl={featureImages[selectedIndex]} />
              </PhoneFrame>
              <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                <feature.icon className="h-8 w-8" />
                <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              "relative h-1 w-6 rounded-full",
              featureIndex === activeIndex ? "bg-gray-500" : "bg-gray-300"
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => scrollToIndex(featureIndex)}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </div>
  );
};
