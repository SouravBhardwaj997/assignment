import Button from "../Atoms/Button";
import { HeroForm } from "../Home/HeroForm";
import { ArrowIcon, Line } from "../icons/Arrow";

export const HeroSection = () => {
  return (
    <div className="bg-[url('/hero-bg.png')] bg-no-repeat bg-cover">
      <div className="2xl:w-10/12 lg:w-10/12 md:w-5/6 sm:w-full xl:w-11/12 mx-auto pb-18 pt-24 flex gap-14">
        <div className="flex flex-col justify-center gap-2 w-3/5 ">
          <p className="uppercase font-medium flex gap-3 items-center  text-primary text-5xl">
            Hire Dedicated <Line />
          </p>
          <p className="uppercase text-8xl font-bold text-gray-dark">
            Developers
          </p>
          <p className="text-lg">
            Top 1% Pre-Vetted, In-house & Dedicated Software Programmers
          </p>
          <p className="font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled
          </p>
          <div className="flex gap-4 mt-4">
            <Button
              className="border-2 border-secondary hover:bg-transparent! hover:text-black transition-all duration-300 text-white px-4 flex items-center gap-2 group font-medium bg-secondary!"
              rightIcon={
                <ArrowIcon className="group-hover:text-black group-hover:-translate-y-1 group-hover:translate-x-1   fill-secondary transition-all duration-300 ease-in-out" />
              }
            >
              View More
            </Button>
            <Button
              className="border-2 border-primary hover:bg-primary! hover:text-white transition-all duration-300  px-4 flex items-center gap-2 group font-medium bg-transparent!"
              rightIcon={
                <ArrowIcon className="group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5   fill-primary transition-all duration-300 ease-in-out w-7" />
              }
            >
              Get In Touch
            </Button>
          </div>
        </div>
        <div className="w-2/5">
          <HeroForm />
        </div>
      </div>
    </div>
  );
};
