import React from "react";
import { TestimonialCard } from "../Elements/TestimonialCard";

export const TestimonialSection = () => {
  return (
    <div className="bg-white">
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
