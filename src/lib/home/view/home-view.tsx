import styles from "./home-view.module.scss";

import { ReviewsSection } from "@/home/sections";

export const HomeView = () => {
  return (
    <main className={styles["home-view"]}>
      <ReviewsSection />
    </main>
  );
};
