import { TestimonialCard, GlowEffect } from "../Elements/";
const TestimonialData = [
  {
    name: "Krish Bruynson",
    designation: "Director, Storloft",
    imgUrl: "/images/testimonials/testimonial-1.png",
    stars: 5,
  },
  {
    name: "Krish Bruynson",
    designation: "Director, Storloft",
    imgUrl: "/images/testimonials/testimonial-2.png",
    stars: 5,
  },
  {
    name: "Krish Bruynson",
    designation: "Director, Storloft",
    imgUrl: "/images/testimonials/testimonial-4.png",
    stars: 5,
  },
  {
    name: "Krish Bruynson",
    designation: "Director, Storloft",
    imgUrl: "/images/testimonials/testimonial-3.png",
    stars: 5,
  },
];
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
      <div className="2xl:w-10/12 lg:w-10/12 md:w-5/6 w-11/12 xl:w-11/12 mx-auto py-16">
        <div className="w-full flex flex-col gap-6 md:gap-8 items-center text-gray-dark">
          <p className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold">
            What Our Clients Have to Say About Us
          </p>
          <p className="font-light text-center">
            Take a look at our simple and straightforward process to hire
            software
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  justify-items-center mt-10 lg:gap-0 gap-10">
          {TestimonialData.map((item, i) => (
            <TestimonialCard key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
