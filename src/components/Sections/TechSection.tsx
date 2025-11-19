import { techData } from "@/constants";
import { TechCard, GlowEffect } from "../Elements/";

export const TechSection = () => {
  return (
    <div className="relative bg-white">
      <GlowEffect
        position="left-0 top-0"
        size="size-80"
        color="bg-secondary/33"
        className="rounded-xl"
      />
      <GlowEffect
        position="right-15 bottom-0"
        size="size-80"
        color="bg-primary/50"
        className="rounded-none"
      />
      <div className="2xl:w-10/12 lg:w-10/12 md:w-5/6 w-11/12 xl:w-11/12 mx-auto py-14 flex flex-col justify-center gap-6 items-center">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-gray-dark">
          Our Diverse Technology Competency
        </p>
        <p className="text-base text-center w-full md:w-3/4 lg:w-1/2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&lsquo;s standard dummy
          text ever since
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4 md:mt-10">
          {techData.map((item, i) => (
            <TechCard key={item.title + i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
