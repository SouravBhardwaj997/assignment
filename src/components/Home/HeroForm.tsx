import Button from "../Atoms/Button";
import { InputGroup } from "../Atoms/InputGroup";
import { TextAreaGroup } from "../Atoms/TextAreaGroup";
import { ArrowIcon } from "../icons/Arrow";

export const HeroForm = () => {
  return (
    <div className="flex flex-col shadow-sm">
      <div className="flex flex-col gap-1 justify-center items-center bg-primary/6 p-4 rounded-t-lg ">
        <p className="font-medium text-lg">Create Your Team</p>
        <p className="font-light text-sm">
          Lorem Ipsum is simply dummy text of the printing
        </p>
      </div>
      <div className="bg-white p-4 rounded-b-lg grid grid-cols-2 gap-x-2 gap-y-4">
        <InputGroup
          label="First Name"
          placeholder="Enter your Name"
          name="firstName"
        />
        <InputGroup
          label="Email Address"
          placeholder="Enter your Email"
          name="email"
        />
        <InputGroup
          label="Phone No."
          placeholder="Enter your Number"
          name="phone"
        />
        <InputGroup
          label="Country"
          placeholder="Enter your Country"
          name="country"
        />
        <TextAreaGroup
          label="Project Brief"
          placeholder="Enter your Project Brief"
          name="projectBrief"
          className="col-span-2"
        />
        <Button
          className="border-2 col-span-2 border-secondary hover:bg-transparent! hover:text-black transition-all duration-300 text-white px-4 flex justify-center items-center gap-2 group font-medium bg-secondary!"
          rightIcon={
            <ArrowIcon className="group-hover:text-black group-hover:-translate-y-1 group-hover:translate-x-1   fill-secondary transition-all duration-300 ease-in-out" />
          }
        >
          Hire Software Developer
        </Button>
      </div>
    </div>
  );
};
