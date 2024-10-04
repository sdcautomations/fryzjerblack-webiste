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
  OfferSection,
} from "@/home/sections";

export const HomeView = () => {
  return (
    <main className={styles["home-view"]}>
      <HeroSection />

      <AboutSection />

      <GallerySection />

      <ReviewsSection />

      <OfferSection />

      <InteriorSection />

      <InformationSection />

      <FooterSection />

      <CopyrightSection />
    </main>
  );
};
