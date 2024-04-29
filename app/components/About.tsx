import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-background lg:grid grid-cols-2 gap-6 px-12 pb-7"
    >
      <div className="text-text text-center lg:text-left mx-10 my-auto justify-center">
        <h1 className="font-bold text-5xl my-10">About</h1>
        <p className="text-2xl">
          Aizen Sosuke is a character from the anime and manga series Bleach. He
          is known for his cunning intellect and manipulative nature. Aizen is
          depicted as a highly intelligent and strategic individual who often
          schemes in the background to achieve his goals. He possesses immense
          spiritual power, making him one of the most formidable adversaries in
          the series. Throughout the series, Aizen plays a central role as both
          an antagonist and a mastermind behind various events. His actions and
          manipulations have far-reaching consequences for the world of Bleach
          and its characters.
        </p>
      </div>
      <div className="mx-12 lg:mx-auto lg:my-auto p-auto items-center py-7 justify-center">
        <Image
          src="/about.png"
          alt="Aizen"
          width={762}
          height={633}
          className="rounded-3xl overflow-hidden object-cover "
        />
      </div>
    </section>
  );
};

export default About;
