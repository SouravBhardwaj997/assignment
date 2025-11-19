import Image from "next/image";
import { TickIcon } from "../icons";

export const SectionWithImage = ({
  imgUrl,
  title,
  points,
  imageAlignment,
}: {
  imgUrl: string;
  title: string;
  imageAlignment: string;
  points: {
    title: string;
    subTitle: string;
  }[];
}) => {
  return (
    <div
      className={`w-full flex justify-between  text-gray-dark ${
        imageAlignment === "left" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="w-1/2 relative">
        <Image
          src={imgUrl}
          width={500}
          height={500}
          alt="Person Using Laptop"
        />
      </div>
      <div className="flex flex-col justify-center gap-6 w-1/2">
        <p className="text-4xl font-semibold">{title}</p>
        {points.map((point, i) => (
          <div className="flex gap-2" key={i}>
            <div
              className={`size-7 shrink-0 grow-0 ${
                i % 2 === 0 ? "bg-secondary" : "bg-primary"
              }  rounded-full flex items-center justify-center`}
            >
              <TickIcon />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-2xl">{point.title}</p>
              <p className="text-lg">{point.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
