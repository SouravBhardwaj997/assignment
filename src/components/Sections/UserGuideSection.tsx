import Image from "next/image";
import { RoundTickIcon } from "../icons";

const points = [
  "Client-centric approach",
  "Best-in-class project management",
  "Global quality standards",
  "Time-zone compatibility",
  "Cutting-edge infrastructure",
  "Agile adaptability",
];

const userBenefits = [
  "Benefits of Hiring Developers",
  "Key Factors to Consider While Hiring",
  "Defining Your Project Requirements",
  "Choosing the Right Development Model",
  "Typical Challenges for Hiring Developers",
  "Hiring Freelancers vs. Dedicated Developers",
  "Communication with Remote Developers",
];

export const UserGuideSection = () => {
  return (
    <div className="bg-beige">
      <div className="2xl:w-10/12 lg:w-10/12 md:w-5/6 sm:w-full xl:w-11/12 mx-auto py-16">
        <div className="w-full flex flex-col gap-10 items-center text-gray-dark">
          <p className="font-semibold text-4xl">
            User Guide to Hire Dedicated Software Developers
          </p>
          <div className="flex gap-6">
            <div className="flex flex-col bg-white w-1/3 shadow-sm">
              {userBenefits.map((benefit, i) => (
                <div
                  className={`px-4 py-7 font-light ${
                    userBenefits.length - 1 === i
                      ? ""
                      : "border-b border-b-black/3"
                  }}`}
                  key={i}
                >
                  {benefit}
                </div>
              ))}
            </div>
            <div className="flex flex-col bg-white gap-6 w-2/3 py-8 px-6 shadow-sm">
              <p className="text-black font-medium text-xl">
                Benefits of Hiring Developers
              </p>
              <p className="font-light text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
              </p>
              <div className="grid grid-cols-2 gap-4">
                {points.map((point, i) => (
                  <div className="flex gap-2 items-center" key={i}>
                    <RoundTickIcon />
                    <p className="font-medium">{point}</p>
                  </div>
                ))}
              </div>
              <div>
                <Image
                  src="/images/hiring-benefit-img.png"
                  alt="Hiring Benefit Image"
                  width={100}
                  height={100}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
