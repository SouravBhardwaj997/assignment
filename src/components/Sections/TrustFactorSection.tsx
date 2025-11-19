import Image from "next/image";
import { RoundTickIcon } from "../icons";
import { trustFactorPoints } from "@/constants";

export const TrustFactorSection = () => {
  return (
    <div className="2xl:w-10/12 lg:w-10/12 md:w-5/6 w-11/12 xl:w-11/12 mx-auto py-14">
      <div className="w-full flex flex-col lg:gap-0 gap-10 lg:flex-row justify-center text-gray-dark">
        <div className="w-full lg:w-1/2 flex justify-center items-center relative">
          <Image
            src={"/images/trust-image.png"}
            width={500}
            height={500}
            alt="Person Using Laptop"
          />
        </div>
        <div className="flex flex-col justify-center gap-6 w-full lg:w-1/2">
          <p className="text-3xl md:text-4xl lg:text-5xl leading-normal font-semibold">
            Top Companies Trust ValueCoders For Hiring Software Developers
          </p>
          <p className="leading-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trustFactorPoints.map((point, i) => (
              <div className="flex gap-2 items-center" key={i}>
                <RoundTickIcon />
                <p className="font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
