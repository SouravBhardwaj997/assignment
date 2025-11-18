import React from "react";
import { SectionWithImage } from "../Elements/SectionWithImage";

export const WhyUsSection = () => {
  const dummyData = [
    {
      title: "High Quality/Cost Ratio",
      imgUrl: "/images/why-choose-us-1.png",
      imageAlignment: "left",
      points: [
        {
          title: "5+ hours of tests and interviews",
          subTitle:
            "Hire the top 1% of 1.5 million+ developers from 150+ countries who have applied to Turing.",
        },
        {
          title: "Seniority tests",
          subTitle:
            "Hire the top 1% of 1.5 million+ developers from 150+ countries who have applied to Turing.",
        },
      ],
    },
    {
      title: "High Quality/Cost Ratio",
      imgUrl: "/images/why-choose-us-2.png",
      imageAlignment: "right",
      points: [
        {
          title: "5+ hours of tests and interviews",
          subTitle:
            "Hire the top 1% of 1.5 million+ developers from 150+ countries who have applied to Turing.",
        },
        {
          title: "Seniority tests",
          subTitle:
            "Hire the top 1% of 1.5 million+ developers from 150+ countries who have applied to Turing.",
        },
      ],
    },
  ];
  return (
    <div className="relative bg-white">
      <div className="2xl:w-10/12 lg:w-10/12 md:w-5/6 sm:w-full xl:w-11/12 mx-auto py-14 flex flex-col justify-center gap-6 items-center">
        <p className="text-5xl font-semibold text-center text-gray-dark">
          Why Hire Developers From Our Name
        </p>
        <p className="text-base font-light text-center w-1/2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since
        </p>
        {dummyData.map((item, index) => (
          <div key={index}>
            <SectionWithImage {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};
