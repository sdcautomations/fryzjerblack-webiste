import { Grid, Image, SectionHeader } from "@/home/components";
import styles from "./interior-section.module.scss";

export const InteriorSection = () => {
  return (
    <Grid className={styles["interior-section"]}>
      <SectionHeader
        className={styles["interior-section__header"]}
        heading="Stworzony Dla Ciebie"
        desc="SALON"
      />

      <div className={styles["interior-section__grid"]}>
        <Image src="interior/salon1.png" />

        <Image src="interior/salon2.png" />
      </div>

      <div className={styles["interior-section__grid--small"]}>
        <Image src="interior/salon3.png" />

        <Image src="interior/salon4.png" />

        <Image src="interior/salon5.png" />
      </div>
    </Grid>
  );
};
