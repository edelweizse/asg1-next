"use client";
import React from "react";
import scrollTo from "./scrollTo";

const Footer = () => {
  return (
    <footer className="bg-background w-full h-24 p-0 m-0 flex flex-row justify-center items-center">
      <h1
        className="text-2xl text-text items-center cursor-pointer"
        onClick={() => {
          scrollTo(document.getElementById("nav"));
        }}
      >
        Trubarov Nikita BDA-2307 | NextTS
      </h1>
    </footer>
  );
};

export default Footer;
