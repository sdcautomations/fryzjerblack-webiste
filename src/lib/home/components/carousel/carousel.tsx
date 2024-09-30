"use client";
import { useState } from "react";
import classNames from "classnames";

import styles from "./carousel.module.scss";

import { ReviewCard } from "../review-card";
import { Flex } from "../flex";
import { Button } from "../button";

export const Carousel = ({
  items,
  className,
}: {
  items: Array<{ name: string; content: string }>;
  className?: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = items[activeIndex];

  const carouselClassNames = classNames(styles["carousel"], className);

  function handleSlideChange(direction: "+" | "-") {
    if (direction === "+" && activeIndex !== 2) {
      setActiveIndex(activeIndex + 1);
    }

    if (direction === "-" && activeIndex !== 0) {
      setActiveIndex(activeIndex - 1);
    }

    return;
  }

  return (
    <Flex
      className={carouselClassNames}
      direction="column"
      gap="32px"
      align="center"
    >
      <ReviewCard name={activeItem.name} content={activeItem.content} />

      <Flex className={styles["carousel__controls"]} gap="32px" direction="row">
        <Button
          onClick={() => {
            handleSlideChange("-");
          }}
          disabled={activeIndex === 0}
        >{`<`}</Button>

        <Button
          onClick={() => {
            handleSlideChange("+");
          }}
          disabled={activeIndex === 2}
        >{`>`}</Button>
      </Flex>
    </Flex>
  );
};
