import React from "react";
import TextWithImage from "./TextWithImage";
import Image from "next/image";

const Facts = () => {
  return (
    <section id="facts" className="bg-text w-full">
      <h1 className="text-5xl font-bold text-background text-center px-12 pt-7">
        Facts
      </h1>
      <div className="">
        <div className="w-full lg:grid grid-cols-2 gap-6 px-12 py-7 bg-text">
          <div className="text-center mx-10 my-auto justify-center text-background space-y-5">
            <p className="text-2xl">
              {`Shikai: Kyoka Suigetsu: Aizen's Zanpakuto, Kyoka Suigetsu, has the
              ability to manipulate the senses of anyone who sees its release.
              By uttering the command "Shatter," Aizen can create incredibly
              realistic illusions that deceive his opponents' sight, hearing,
              touch, taste, and smell.`}
            </p>
            <p className="text-2xl">
              {`Bankai: Unknown: While Aizen has achieved Bankai, the ultimate
              form of a Zanpakuto, he has never revealed its name or abilities.
              This mystery adds to his enigmatic nature and heightens the
              anticipation surrounding his power.`}
            </p>
          </div>
          <div className="mx-12 lg:mx-auto lg:my-auto p-auto items-center py-7 justify-center">
            <Image
              src="/zanpakuto.webp"
              alt="/"
              width={750}
              height={580}
              className="rounded-3xl overflow-hidden object-cover justify-center border-2 border-background"
            />
          </div>
        </div>
        <div className="w-full lg:grid grid-cols-2 gap-6 px-12 py-7 bg-text">
          <div className="text-center mx-10 my-auto justify-center text-background space-y-5 order-2">
            <p className="text-2xl">
              {`Kido Expert: Aizen is highly proficient in Kido, the magical
              spells used by Shinigami. He is capable of casting powerful spells
              with minimal incantation, showcasing his mastery of this art.`}
            </p>
            <p className="text-2xl">
              {`Immense Spiritual Pressure: Aizen possesses an exceptionally high
              level of spiritual pressure, which he can release to intimidate or
              overwhelm his opponents. His spiritual pressure is so potent that
              it can paralyze weaker individuals and cause physical damage to
              the environment.`}
            </p>
          </div>
          <div className="mx-12 lg:mx-auto lg:my-auto p-auto items-center py-7 justify-center">
            <Image
              src="/kido.webp"
              alt="/"
              width={704}
              height={530}
              className="rounded-3xl overflow-hidden object-cover justify-center border-2 border-background"
            />
          </div>
        </div>
        <div className="w-full lg:grid grid-cols-2 gap-6 px-12 py-7 bg-text">
          <div className="text-center mx-10 my-auto justify-center text-background space-y-5">
            <p className="text-2xl">
              {`Regenerative Abilities: Aizen possesses enhanced regenerative
              abilities, allowing him to recover from injuries at an accelerated
              rate. This resilience makes him difficult to defeat in battle, as
              he can quickly recover from even the most devastating wounds.`}
            </p>
            <p className="text-2xl">
              {`Hollowfication: Aizen conducted experiments to infuse himself with
              Hollow powers, granting him additional abilities such as enhanced
              durability, regeneration, and energy manipulation. This fusion of
              Shinigami and Hollow abilities makes him a truly formidable
              adversary.`}
            </p>
          </div>
          <div className="mx-12 lg:mx-auto lg:my-auto p-auto items-center py-7 justify-center">
            <Image
              src="/hollow.webp"
              alt="/"
              width={801}
              height={456}
              className="rounded-3xl overflow-hidden object-cover justify-center border-2 border-background"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
