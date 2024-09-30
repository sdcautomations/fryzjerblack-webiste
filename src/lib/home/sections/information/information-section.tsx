import { Flex, Grid, InfoCard, SectionHeader } from "@/home/components";
import styles from "./information-section.module.scss";

const infoCardData = [
  [
    { content: "fryzjerblack@gmail.com", iconPath: "info/mail.svg" },
    { content: "794 282 023", iconPath: "info/phone.svg" },
    { content: "Radymno, Budowlanych 3", iconPath: "info/map.svg" },
  ],
  [
    { content: "salon_fryzjerskiblack", iconPath: "info/instagram.svg" },
    { content: "Salon Fryzjerski Męski BLACK", iconPath: "info/facebook.svg" },
    { content: "Marcin Kowalski", iconPath: "info/messenger.svg" },
  ],
];

export const InformationSection = () => {
  return (
    <Grid className={styles["info-section"]}>
      <SectionHeader
        className={styles["info-section__header"]}
        heading="Wpadaj Do Nas"
        desc="ZAINTERESOWANY?"
      />

      <Flex
        className={styles["info-section__cards"]}
        direction="row"
        gap="32px"
      >
        <InfoCard
          className={styles["info-section__contact-card"]}
          infoData={infoCardData[0]}
        />

        <InfoCard
          className={styles["info-section__social-card"]}
          infoData={infoCardData[1]}
        />
      </Flex>
    </Grid>
  );
};
