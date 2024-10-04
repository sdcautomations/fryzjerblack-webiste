import { Grid, OfferCard, SectionHeader } from "@/home/components";
import styles from "./offer-section.module.scss";

const OFFERS = [
  {
    title: "Strzyżenie",
    desc: "Dokładne strzyżenie dopasowane do Twojego stylu. Spokojna, przemyślana praca, która pomoże Ci wyglądać tak, jak chcesz.",
    price: 50,
  },
  {
    title: "Broda",
    desc: "Proste i staranne kształtowanie brody. Przycinanie i formowanie brody zgodnie z Twoimi preferencjami..",
    price: 30,
  },
  {
    title: "Combo",
    desc: "Jednorazowa wizyta - kompletna stylizacja. Strzyżenie włosów i brody w jednej usłudze.",
    price: 80,
  },
  {
    title: "Woskowanie",
    desc: "Szybkie i dyskretne usunięcie zbędnych włosków z uszu lub nosa. Czystość i komfort na co dzień.",
    price: 10,
  },
];

export const OfferSection = () => {
  return (
    <Grid className={styles["offer-section"]}>
      <SectionHeader
        className={styles["offer-section__header"]}
        heading="Oferta Usług"
        desc="DOPASOAWANA"
      />

      <div className={styles["offer-section__cards"]}>
        {OFFERS.map((e) => (
          <OfferCard
            key={e.title}
            title={e.title}
            desc={e.desc}
            price={e.price}
          />
        ))}
      </div>
    </Grid>
  );
};
