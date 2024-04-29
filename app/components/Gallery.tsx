import React from "react";
import Carousel from "./Carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = {
  dragFree: true,
  loop: true,
  slidesToScroll: "auto",
};

const Gallery = () => {
  return (
    <section id="gallery" className="w-full bg-background p-5">
      <h1 className="text-5xl font-bold text-text text-center px-12 py-7">
        Gallery
      </h1>
      <Carousel options={OPTIONS} />
    </section>
  );
};

export default Gallery;
