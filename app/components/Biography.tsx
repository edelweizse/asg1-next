import React from "react";
import TextWithImage from "./TextWithImage";

const Biography = () => {
  return (
    <section id="biography" className="bg-text w-full">
      <h1 className="text-5xl font-bold text-background text-center px-12 pt-7">
        Biography
      </h1>
      <div className="">
        <TextWithImage
          imagesrc="/bio_1.png"
          alt="/"
          width={800}
          height={790}
          text="
        Aizen Sosuke is a complex and enigmatic character in the anime and manga series Bleach. Born into a world of spiritual beings known as Shinigami, Aizen rose through the ranks to become a captain of the 5th Division in the Gotei 13, the Soul Society's military organization.
        Despite his outward appearance as a loyal and dedicated leader, Aizen harbored dark ambitions and a thirst for power. He conducted secretive experiments and manipulated events behind the scenes to further his goals. Aizen's true nature was revealed during the Soul Society arc when he orchestrated a coup d'état and revealed himself as the mastermind behind numerous atrocities.
        "
          text_right
        />
        <TextWithImage
          imagesrc="/bio_2.png"
          alt="/"
          width={1000}
          height={517}
          text="One of the central figures in Aizen's life is Kisuke Urahara, a former captain of the 12th Division and the owner of a mysterious shop in the human world. Aizen and Urahara were once close friends and colleagues, with Urahara serving as Aizen's mentor. However, their relationship soured as Aizen delved deeper into forbidden research and pursued his quest for power at any cost.
          Aizen's betrayal and manipulation deeply affected Urahara, leading to a bitter rivalry between the two. Despite their tumultuous history, Urahara remains one of the few individuals capable of matching Aizen's intellect and power.
          "
        />
      </div>
    </section>
  );
};

export default Biography;
