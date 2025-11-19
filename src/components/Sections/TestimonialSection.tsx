import { TestimonialCard } from "../Elements/TestimonialCard";
import { GlowEffect } from "../Elements/GlowEffect";

export const TestimonialSection = () => {
  return (
    <div className="bg-white relative">
      <GlowEffect
        size="size-80"
        position="-left-15 bottom-10"
        color="bg-secondary/33"
        className="rounded-xl"
      />
      <GlowEffect
        position="right-0 top-0"
        size="size-80"
        color="bg-primary/50"
        className="rounded-xl"
      />
      <div className="2xl:w-10/12 lg:w-10/12 md:w-5/6 sm:w-full xl:w-11/12 mx-auto py-16">
        <div className="w-full flex flex-col gap-8 items-center text-gray-dark">
          <p className="text-5xl font-semibold">
            What Our Clients Have to Say About Us
          </p>
          <p className="font-light">
            Take a look at our simple and straightforward process to hire
            software
          </p>
        </div>
        <div className="grid grid-cols-4 mt-10">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};
