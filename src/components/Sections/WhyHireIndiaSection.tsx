import React from "react";
import { ArrowIcon } from "../icons/Arrow";
import Image from "next/image";

const advantages: string[] = [
  "English speaking programmers",
  "Flexible Work Hours",
  "Rapid Onboarding Process",
  "Expertise in Top Technologies",
  "Reliable Partner Credentials",
];
export const WhyHireIndiaSection = () => {
  return (
    <div className="bg-dark-purple text-white">
      <div className="2xl:w-10/12 lg:w-10/12 md:w-5/6 sm:w-full xl:w-11/12 mx-auto py-14 flex  justify-center gap-6 items-center">
        <div className="w-2/3 flex flex-col relative h-[550px]">
          <p className="text-5xl font-semibold leading-normal">
            Why Hire Software Developers in India?
          </p>
          <Image
            src={"/images/why-hire-dev.png"}
            fill
            alt="Why Hire In India"
          />
        </div>
        <div className="w-1/3">
          <ul>
            {advantages.map((advantage, i) => (
              <li
                key={advantage + i}
                className="border-b border-gray-600 pt-6 pb-8 font-medium text-xl flex justify-between"
              >
                <span>{advantage}</span>
                <ArrowIcon />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
