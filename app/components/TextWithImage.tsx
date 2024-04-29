import React from "react";
import Image from "next/image";

interface TextWithImageProps {
  imagesrc: string;
  alt: string;
  width: number;
  height: number;
  text: string;
  bg?: boolean;
  textc?: boolean;
  text_right?: boolean;
}

const TextWithImage: React.FC<TextWithImageProps> = ({
  imagesrc,
  alt,
  width,
  height,
  text,
  bg,
  textc,
  text_right: text_on_right,
}) => {
  return (
    <div
      className={`w-full lg:grid grid-cols-2 gap-6 px-12 py-7  ${
        bg ? "bg-background" : "bg-text"
      }`}
    >
      <div
        className={`text-center mx-10 my-auto justify-center 
        ${textc ? "text-text" : "text-background"}
        ${text_on_right ? "lg:text-right order-2" : "lg:text-left"}`}
      >
        <p className="text-2xl">{text}</p>
      </div>
      <div className="mx-12 lg:mx-auto lg:my-auto p-auto items-center py-7 justify-center">
        <Image
          src={imagesrc}
          alt={alt}
          width={width}
          height={height}
          className="rounded-3xl overflow-hidden object-cover justify-center border-2 border-background"
        />
      </div>
    </div>
  );
};

export default TextWithImage;
