import { RightArrow } from "../icons/Arrow";

export const HiringProcessCard = ({
  title,
  description,
  icon,
  step,
  showRightArrow = true,
}: {
  title: string;
  description: string;
  icon?: React.ReactNode;
  step: string;
  showRightArrow?: boolean;
}) => {
  return (
    <div className="flex flex-col items-center gap-3 relative">
      <div className="border-8 border-primary rounded-full size-44 flex justify-center items-center bg-white relative">
        {icon}
        <div className="size-15 bg-secondary border-3 border-white rounded-full text-white flex justify-center items-center text-3xl font-semibold absolute -top-4 right-0 ">
          {step}
        </div>
      </div>
      {showRightArrow && (
        <div className="lg:block hidden absolute top-20 -right-9">
          <RightArrow />
        </div>
      )}
      <p className="font-semibold text-2xl text-center">{title}</p>
      <p className="text-center font-light">{description}</p>
    </div>
  );
};
