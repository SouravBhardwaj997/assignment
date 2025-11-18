import { HiringProcessCard } from "../Elements/HiringProcessCard";
import { DevMonitorIcon, PersonIcon, ScalingIcon, TeamIcon } from "../icons";

export const HiringProcessSection = () => {
  const hiringProcessData = [
    {
      title: "Inquiry",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      icon: <PersonIcon />,
    },
    {
      title: "Select Developers",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      icon: <DevMonitorIcon />,
    },
    {
      title: "Team Integration",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      icon: <TeamIcon />,
    },
    {
      title: "Team Scaling",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      icon: <ScalingIcon />,
    },
  ];
  return (
    <div className="bg-[url('/hiring-process-bg.png')] bg-no-repeat bg-cover">
      <div className="2xl:w-10/12 lg:w-10/12 md:w-5/6 sm:w-full xl:w-11/12 mx-auto py-14 flex flex-col justify-center gap-6 items-center">
        <p className="text-5xl font-semibold text-center text-gray-dark">
          Our Hiring Process
        </p>
        <p className="text-base  text-center w-2/3">
          Take a look at our simple and straightforward process to hire software
          developers from ValueCoders.
        </p>
        <div className="grid grid-cols-4 mt-8 gap-10">
          {hiringProcessData.map((data, i) => (
            <HiringProcessCard
              showRightArrow={hiringProcessData.length - 1 !== i}
              key={i}
              {...data}
              step={JSON.stringify(i + 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
