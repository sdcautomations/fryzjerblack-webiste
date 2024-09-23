import styles from "./gallery-section.module.scss";

import img1 from "@/../public/assets/images/gallery/img1.png";
import img2 from "@/../public/assets/images/gallery/img2.png";
import img3 from "@/../public/assets/images/gallery/img3.png";
import img4 from "@/../public/assets/images/gallery/img4.png";
import img5 from "@/../public/assets/images/gallery/img5.png";
import img6 from "@/../public/assets/images/gallery/img6.png";

import { Grid, Image, SectionHeader } from "@/home/components";

export const GallerySection = () => {
  return (
    <Grid className={styles["gallery-section"]}>
      <SectionHeader
        className={styles["gallery-section__header"]}
        heading="Naszej Pracy"
        desc="EFEKTY"
      />

      <div className={styles["gallery-section__grid"]}>
        <Image src={img1.src} />

        <Image src={img2.src} />

        <Image src={img3.src} />

        <Image src={img4.src} />

        <Image src={img5.src} />

        <Image src={img6.src} />
      </div>
    </Grid>
  );
};
