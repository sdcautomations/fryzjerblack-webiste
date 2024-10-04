import { Flex } from "../flex";
import { Text } from "../text";
import styles from "./offer-card.module.scss";

export const OfferCard = ({
  title,
  desc,
  price,
}: {
  title: string;
  desc: string;
  price: number;
}) => {
  return (
    <Flex
      className={styles["offer-card"]}
      gap="32px"
      direction="row"
      align="center"
    >
      <Flex
        className={styles["offer-card__content"]}
        direction="column"
        gap="8px"
      >
        <Text
          className={styles["offer-card__content__title"]}
          weight="500"
          size="24px"
        >
          {title}
        </Text>

        <Text
          className={styles["offer-card__content__desc"]}
          weight="400"
          size="20px"
          opacity="0.6"
        >
          {desc}
        </Text>
      </Flex>

      <Text
        className={styles["offer-card__price"]}
        weight="600"
        size="48px"
      >{`${price}zł`}</Text>
    </Flex>
  );
};
