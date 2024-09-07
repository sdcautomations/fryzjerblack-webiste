import classNames from "classnames";
import styles from "./review-card.module.scss";

import { Flex, Icon, Text } from "@/home/components";
import { ReviewCardProps } from "./review-card.types";

export const ReviewCard = ({ content, name, className }: ReviewCardProps) => {
  const reviewClassNames = classNames(styles["review-card"], className);

  return (
    <Flex className={reviewClassNames} justify="space-between">
      <Text className={styles["review-card__content"]} size="24px">
        {content}
      </Text>

      <Flex
        className={styles["review-card__bottom-bar"]}
        direction="row"
        justify="space-between"
      >
        <Text size="20px" weight="500">
          {name}
        </Text>

        <Flex
          className={styles["review-card__bottom-bar__stars"]}
          direction="row"
          gap="16px"
        >
          <Icon src="/assets/icons/star.svg" />
          <Icon src="/assets/icons/star.svg" />
          <Icon src="/assets/icons/star.svg" />
          <Icon src="/assets/icons/star.svg" />
          <Icon src="/assets/icons/star.svg" />
        </Flex>
      </Flex>
    </Flex>
  );
};
