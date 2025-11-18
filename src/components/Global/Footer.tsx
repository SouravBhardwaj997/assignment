import Link from "next/link";
import { FooterLinks } from "../Elements/FooterLinks";
import { FooterLogo } from "../icons/Logo";
import {
  FacebookIcon,
  LinkedInIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../icons/SocialIcons";
import { MailIcon, MapIcon, PhoneIcon } from "../icons";
const FooterLinkData = [
  {
    title: "Quick Links",
    items: [
      "Software Team",
      "Resources",
      "Technologies",
      "Contact Us",
      "Company",
      "FAQ",
    ],
  },
  {
    title: "Services",
    items: [
      "Dedicated Development ",
      "Staff Augmentation Services",
      "Software Development",
      "Development Center",
    ],
  },
];
export const Footer = () => {
  return (
    <div className="bg-black flex flex-col gap-10  text-white">
      <div className="2xl:w-10/12 lg:w-10/12 md:w-5/6 sm:w-full xl:w-11/12 mx-auto py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col gap-4">
            <Link href={"/"}>
              <FooterLogo />
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
            <div className="flex gap-2">
              <Link href={"https://facebook.com"} target="_blank">
                <div className="bg-white flex justify-center items-center size-8 rounded-full">
                  <FacebookIcon />
                </div>
              </Link>
              <Link href={"https://x.com"} target="_blank">
                <div className="bg-white flex justify-center items-center size-8 rounded-full">
                  <TwitterIcon />
                </div>
              </Link>

              <Link href={"https://linkedIn.com"} target="_blank">
                <div className="bg-white size-8 rounded-full flex justify-center items-center">
                  <LinkedInIcon />
                </div>
              </Link>

              <Link href={"https://youtube.com"} target="_blank">
                <div className="bg-white flex justify-center items-center size-8 rounded-full">
                  <YoutubeIcon />
                </div>
              </Link>
            </div>
          </div>
          {FooterLinkData.map((footerLink, i) => (
            <FooterLinks {...footerLink} key={i} />
          ))}
          <div className="flex flex-col gap-6">
            <p className="font-semibold text-2xl">Contact Us</p>
            <ul className="flex flex-col gap-3">
              <li className="font-light flex items-center gap-2">
                <MapIcon />
                <Link href={"/"}>
                  Envato, Level 13, 2 Elizabeth Victoria 3000 India
                </Link>
              </li>
              <li className="font-light flex items-center gap-2">
                <PhoneIcon />
                <Link href={"/"}>+91 861 944 1176</Link>
              </li>
              <li className="font-light flex items-center gap-2">
                <MailIcon />
                <Link href={"/"}>ezyoga@gmail.com</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-primary text-white text-center py-2.5">
        <p className="font-medium">logoname. 2023. All rights reserved</p>
      </div>
    </div>
  );
};
