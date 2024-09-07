import { Grid, Image, SectionHeader } from "@/home/components";
import styles from "./gallery-section.module.scss";

export const GallerySection = () => {
  return (
    <Grid className={styles["gallery-section"]}>
      <SectionHeader
        className={styles["gallery-section__header"]}
        heading="Naszej Pracy"
        desc="EFEKTY"
      />

      <div className={styles["gallery-section__grid"]}>
        <Image src={"gallery/img1.png"} />
        <Image src={"gallery/img2.png"} />
        <Image src={"gallery/img3.png"} />

        <Image src={"gallery/img4.png"} />
        <Image src={"gallery/img5.png"} />
        <Image src={"gallery/img6.png"} />
      </div>
    </Grid>
  );
};
