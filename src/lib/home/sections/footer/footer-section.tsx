import styles from "./footer-section.module.scss";

import logo from "@/../public/assets/images/footer/logo.png";

import { Flex, Grid, Image, Text } from "@/home/components";

export const FooterSection = () => {
  return (
    <Grid className={styles["footer-section"]}>
      <img className={styles["footer-section__logo"]} src={logo.src} />

      <Flex className={styles["footer-section__info"]} gap="24px">
        <Text size="24px" weight="600">
          Informacje
        </Text>

        <Flex className={styles["footer-section__info__content"]} gap="24px">
          <Text>fryzjerblack@gmail.com</Text>

          <Text>Radymno, Budowlanych 3</Text>

          <Text>794 282 023</Text>
        </Flex>
      </Flex>

      <Flex className={styles["footer-section__hours"]} gap="24px">
        <Text
          className={styles["footer-section__title"]}
          size="24px"
          weight="600"
        >
          Godziny Otwarcia
        </Text>

        <Flex className={styles["footer-section__hours__content"]} gap="24px">
          <Flex
            className={styles["footer-section__hours__content__item"]}
            direction="row"
            justify="space-between"
          >
            <Text>Pn, Śr, Pt</Text>
            <Text weight="600">09:00 - 17:00</Text>
          </Flex>

          <Flex
            className={styles["footer-section__hours__content__item"]}
            direction="row"
            justify="space-between"
          >
            <Text>Wt</Text>
            <Text weight="600">09:00 - 14:30</Text>
          </Flex>

          <Flex
            className={styles["footer-section__hours__content__item"]}
            direction="row"
            justify="space-between"
          >
            <Text>Czw</Text>
            <Text weight="600">09:00 - 19:00</Text>
          </Flex>

          <Flex
            className={styles["footer-section__hours__content__item"]}
            direction="row"
            justify="space-between"
          >
            <Text>Sob</Text>
            <Text weight="600">08:00 - 13:00</Text>
          </Flex>
        </Flex>
      </Flex>
    </Grid>
  );
};
