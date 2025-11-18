import Image from "next/image";

export const TechCard = ({
  imgUrl,
  title,
  technologies,
  bgColor,
  borderColor,
}: {
  imgUrl: string;
  title: string;
  technologies: string[];
  bgColor: string;
  borderColor: string;
}) => {
  return (
    <div
      className={`flex flex-col gap-5  p-7 ${bgColor} border-b-4 ${borderColor}  w-full`}
    >
      <Image src={imgUrl} height={50} width={50} alt="Web Settings" />
      <p className="font-medium text-xl">{title} </p>
      <div className="flex flex-wrap gap-x-2 gap-y-2.5 ">
        {technologies.map((tech, i) => (
          <p
            className={`pr-2 text-black  ${
              technologies.length - 1 === i ? "" : "border-r"
            }  border-r-gray-300`}
            key={tech + i}
          >
            {tech}
          </p>
        ))}
      </div>
    </div>
  );
};
