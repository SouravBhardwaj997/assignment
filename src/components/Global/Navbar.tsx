import { Container } from "../Atoms/Container";
import Link from "next/link";
import { Button } from "../Atoms/Button";
import { Logo } from "../icons/Logo";
import { ArrowIcon } from "../icons/Arrow";

export const Navbar = () => {
  return (
    <Container>
      <div className="py-4 flex font-poppins justify-between items-center">
        <Link href="/" className="flex gap-2 items-center font-bold text-xl">
          <Logo />
        </Link>
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-6 text-base">
            <li>
              <Link href="/">Software Team</Link>
            </li>
            <li>
              <Link href="/">Services</Link>
            </li>
            <li>
              <Link href="/">Technologies</Link>
            </li>
            <li>
              <Link href="/">Resources</Link>
            </li>
            <li>
              <Link href="/">Company</Link>
            </li>
          </ul>
          <Button
            className="border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300  px-4 flex items-center gap-2 group font-medium bg-transparent"
            rightIcon={
              <ArrowIcon className="group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1   fill-primary transition-all duration-300 ease-in-out" />
            }
          >
            <span>Get In Touch</span>
          </Button>
        </div>
      </div>
    </Container>
  );
};
