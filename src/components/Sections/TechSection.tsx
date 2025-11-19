import { TechCard, GlowEffect } from "../Elements/";
const techData: {
  imgUrl: string;
  title: string;
  technologies: string[];
  bgColor: string;
  borderColor: string;
}[] = [
  {
    title: "Backend Development",
    bgColor: "bg-light-cyan",
    borderColor: "border-dark-cyan",
    imgUrl: "/images/tech/backend-dev.png",
    technologies: [
      ".NET",
      "C/C++",
      "DJANGO",
      "NODE.JS",
      "PYTHON",
      "JAVA",
      "PHP",
      "GO",
      "RUBY",
      "SWIFT",
      "KOTLIN",
      "REACT NATIVE",
      "FLUTTER",
    ],
  },
  {
    title: "Fronted Development",
    bgColor: "bg-pale-peach",
    borderColor: "border-dark-peach",
    imgUrl: "/images/tech/frontend-dev.png",
    technologies: [
      "CSS",
      "JAVASCRIPT",
      "REACT JS",
      "ANGULAR",
      "VUE JS",
      "NEXT JS",
      "TAILWIND CSS",
      "BOOTSTRAP",
      "STYLED COMPONENTS",
      "SCSS",
    ],
  },
  {
    title: "Mobile Development",
    bgColor: "bg-light-lavender",
    borderColor: "border-dark-lavender",
    imgUrl: "/images/tech/mobile-dev.png",
    technologies: [
      "ANDROID",
      "IOS",
      "IONIC",
      "XAMARIN",
      "UNITY",
      "FLUTTER",
      "FAST-CODE",
      "VISUAL STUDIO CODE",
      "FAST-CODE",
    ],
  },
  {
    title: "Blockchain, Ai/ML",
    bgColor: "bg-light-green",
    borderColor: "border-dark-green",
    imgUrl: "/images/tech/blockchain.png",
    technologies: [
      "ETHEREUM",
      "BITCOIN",
      "AI",
      "ML",
      "OPEN AI",
      "CHAT GPT",
      "NEURAL NETWORK",
      "DATA SCIENCE",
      "PYTHON",
      "SQL",
      "TABLEAU",
    ],
  },
  {
    title: "DevOps & Low-Code",
    bgColor: "bg-light-yellow",
    borderColor: "border-dark-yellow",
    imgUrl: "/images/tech/dev-ops.png",
    technologies: [
      "DOCKER",
      "KUBERNETES",
      "AZURE",
      "AWS",
      "SAAS",
      "LOW CODE",
      "MICROSOFT",
      "GOOGLE",
      "HEROKU",
      "NETLIFY",
      "VERCEL",
      "NETLIFY",
    ],
  },
  {
    title: "E-commerce & CMS",
    bgColor: "bg-light-red",
    borderColor: "border-dark-red",
    imgUrl: "/images/tech/cms.png",
    technologies: [
      "WORDPRESS",
      "SHOPIFY",
      "ECOMMERCE",
      "DRUPAL",
      "JENKINS",
      "JIRA",
      "GITLAB",
      "JENKINS",
      "JIRA",
      "GITLAB",
      "STRAPI",
    ],
  },
];
export const TechSection = () => {
  return (
    <div className="relative bg-white">
      <GlowEffect
        position="left-0 top-0"
        size="size-80"
        color="bg-secondary/33"
        className="rounded-xl"
      />
      <GlowEffect
        position="right-15 bottom-0"
        size="size-80"
        color="bg-primary/50"
        className="rounded-none"
      />
      <div className="2xl:w-10/12 lg:w-10/12 md:w-5/6 w-11/12 xl:w-11/12 mx-auto py-14 flex flex-col justify-center gap-6 items-center">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-gray-dark">
          Our Diverse Technology Competency
        </p>
        <p className="text-base text-center w-full md:w-3/4 lg:w-1/2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&lsquo;s standard dummy
          text ever since
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4 md:mt-10">
          {techData.map((item, i) => (
            <TechCard key={item.title + i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
