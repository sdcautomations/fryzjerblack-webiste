import styles from "./interior-section.module.scss";

import img1 from "@/../public/assets/images/interior/salon1.png";
import img2 from "@/../public/assets/images/interior/salon2.png";
import img3 from "@/../public/assets/images/interior/salon3.png";
import img4 from "@/../public/assets/images/interior/salon4.png";
import img5 from "@/../public/assets/images/interior/salon5.png";

import { Grid, Image, SectionHeader } from "@/home/components";

export const InteriorSection = () => {
  return (
    <Grid className={styles["interior-section"]}>
      <SectionHeader
        className={styles["interior-section__header"]}
        heading="Stworzony Dla Ciebie"
        desc="SALON"
      />

      <div className={styles["interior-section__grid"]}>
        <Image src={img1.src} />

        <Image src={img2.src} />
      </div>

      <div className={styles["interior-section__grid--small"]}>
        <Image src={img3.src} />

        <Image src={img4.src} />

        <Image src={img5.src} />
      </div>
    </Grid>
  );
};
