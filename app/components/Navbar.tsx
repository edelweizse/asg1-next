"use client";
import Link from "next/link";
import Logo from "./Logo";
import scrollTo from "./scrollTo";

const Navlinks = () => {
  return (
    <>
      <Link
        href="#about
        "
        className="text-text rounded-xl hover:text-background hover:bg-text p-3"
        onClick={() => scrollTo(document.getElementById("about"))}
      >
        About
      </Link>
      <Link
        href="#biography
        "
        className="text-text rounded-xl hover:text-background hover:bg-text p-3"
        onClick={() => scrollTo(document.getElementById("biography"))}
      >
        Biography
      </Link>
      <Link
        href="#gallery
        "
        className="text-text rounded-xl hover:text-background hover:bg-text p-3"
        onClick={() => scrollTo(document.getElementById("gallery"))}
      >
        Gallery
      </Link>
      <Link
        href="#facts
        "
        className="text-text rounded-xl hover:text-background hover:bg-text p-3"
        onClick={() => scrollTo(document.getElementById("facts"))}
      >
        Facts
      </Link>
    </>
  );
};

const Navbar = () => {
  return (
    <nav
      id="nav"
      className="bg-background w-full h-24 p-0 m-0 flex flex-row justify-between"
    >
      <Logo />
      <div className="hidden lg:flex flex-row items-center justify-center space-x-20 lg:mx-12 text-xl">
        <Navlinks />
      </div>
      <div className="lg:hidden justify-center w-full items-center flex flex-row md:space-x-20 sm:space-x-10 space-x-5 text-xl">
        <Navlinks />
      </div>
    </nav>
  );
};

export default Navbar;
