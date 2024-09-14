import styles from "./home-view.module.scss";

import {
  HeroSection,
  GallerySection,
  InformationSection,
  InteriorSection,
  ReviewsSection,
  AboutSection,
  FooterSection,
  CopyrightSection,
} from "@/home/sections";

export const HomeView = () => {
  return (
    <main className={styles["home-view"]}>
      <HeroSection />

      <AboutSection />

      <GallerySection />

      <ReviewsSection />

      <InteriorSection />

      <InformationSection />

      <FooterSection />

      <CopyrightSection />
    </main>
  );
};
