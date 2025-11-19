import { whyHireUsAdvantages } from "@/constants";
import { ArrowIcon } from "../icons/Arrow";
import Image from "next/image";

export const WhyHireIndiaSection = () => {
  return (
    <div className="bg-dark-purple text-white">
      <div className="2xl:w-10/12 lg:w-10/12 md:w-5/6 w-11/12 xl:w-11/12 mx-auto py-14 flex lg:flex-row flex-col justify-center gap-6 items-center">
        <div className="w-full lg:w-2/3 flex flex-col relative h-[400px] md:h-[550px]">
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-normal">
            Why Hire Software Developers in India?
          </p>
          <Image
            src={"/images/why-hire-dev.png"}
            fill
            alt="Why Hire In India"
          />
        </div>
        <div className="w-full lg:w-1/3">
          <ul>
            {whyHireUsAdvantages.map((advantage, i) => (
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
