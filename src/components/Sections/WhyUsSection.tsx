import { GlowEffect, SectionWithImage } from "../Elements/";

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
      <GlowEffect
        position="left-5 bottom-5"
        size="size-80"
        color="bg-secondary/33"
        className="rounded-none"
      />
      <GlowEffect
        position="right-0 top-0"
        size="size-80"
        color="bg-primary/25"
        className="rounded-none"
      />
      <div className="absolute top-0 right-0 w-[55%] h-[65%] bg-[url('/images/bg-right.png')] bg-no-repeat bg-cover" />
      <div className="absolute top-0 left-0 w-[40%] h-[60%] bg-[url('/images/bg-left.png')] bg-no-repeat bg-cover" />
      <div className="2xl:w-10/12 lg:w-10/12 md:w-5/6 w-11/12 xl:w-11/12 mx-auto py-14 flex flex-col justify-center gap-6 items-center">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-gray-dark">
          Why Hire Developers From Our Name
        </p>
        <p className="text-sm md:text-base font-light text-center w-4/5 lg:w-1/2">
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
