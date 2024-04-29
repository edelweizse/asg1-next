"use client";
import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";
import Image from "next/image";

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(4000)]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType | null) => {
    const autoplay = emblaApi?.plugins?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay?.reset
        : autoplay?.stop;
    resetOrStop?.();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container items_center">
          <div className="embla__slide items-center">
            <Image
              src="/item_1.webp"
              alt="item_1"
              width={500}
              height={500}
              className="rounded-3xl overflow-hidden object-cover justify-center"
            />
          </div>
          <div className="embla__slide items-center">
            <Image
              src="/item_2.webp"
              alt="item_2"
              width={500}
              height={500}
              className="rounded-3xl overflow-hidden object-cover justify-center"
            />
          </div>
          <div className="embla__slide items-center">
            <Image
              src="/item_3.webp"
              alt="item_3"
              width={500}
              height={500}
              className="rounded-3xl overflow-hidden object-cover justify-center"
            />
          </div>
          <div className="embla__slide items-center">
            <Image
              src="/item_4.webp"
              alt="item_4"
              width={500}
              height={500}
              className="rounded-3xl overflow-hidden object-cover justify-center"
            />
          </div>
          <div className="embla__slide items-center">
            <Image
              src="/item_5.webp"
              alt="item_5"
              width={500}
              height={500}
              className="rounded-3xl overflow-hidden object-cover justify-center"
            />
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
