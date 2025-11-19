import Image from "next/image";
import { PlayIcon, StarIcon } from "../icons/SocialIcons";

export const TestimonialCard = ({
  imgUrl,
  name,
  designation,
  stars,
}: {
  imgUrl: string;
  name: string;
  designation: string;
  stars?: number | null;
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="h-80 w-60 relative">
        <Image
          src={imgUrl}
          fill
          alt="Testimonial"
          className="object-cover object-center"
        />
        <div className="bg-primary-size-12 absolute top-0 left-0 right-0 bottom-0" />
        <div className="absolute inset-0 bg-black opacity-40" />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer">
          <span className="absolute inset-0 h-full w-full rounded-full bg-primary opacity-75 animate-ping"></span>

          <div className="relative inline-flex items-center justify-center rounded-full bg-primary shadow-lg">
            <PlayIcon />
          </div>
        </div>

        <div className="size-16 bg-white absolute -bottom-8 -right-8 rotate-45" />
      </div>
      <p className="text-black font-semibold text-2xl">{name}</p>
      <p className="font-light">{designation}</p>
      <div className="flex gap-1">
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
    </div>
  );
};
