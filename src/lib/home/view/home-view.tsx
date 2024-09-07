import styles from "./home-view.module.scss";

import { GallerySection, ReviewsSection } from "@/home/sections";

export const HomeView = () => {
  return (
    <main className={styles["home-view"]}>
      <ReviewsSection />

      <GallerySection />
    </main>
  );
};
