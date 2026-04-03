import type { Metadata } from "next";
import Link from "next/link";
import CouponCard from "@/components/CouponCard/CouponCard";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { CATEGORIES } from "@/data/index";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Alle Kategorien – Gutscheine nach Bereich | DeutschCoupons",
  description:
    "Entdecken Sie Gutscheine und Rabattcodes nach Kategorie – Mode, Elektronik, Reisen, Beauty, Sport und viele mehr.",
};

export default function KategorienPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumb items={[{ label: "Kategorien" }]} />

        <div className={styles.header}>
          <h1 className={styles.title}>Alle Kategorien</h1>
          <p className={styles.subtitle}>
            Wählen Sie eine Kategorie und entdecken Sie die besten Gutscheine
          </p>
        </div>

        <div className={styles.grid}>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/kategorien/${cat.slug}`}
              className={styles.card}
              style={{ "--cat-color": cat.color } as React.CSSProperties}
            >
              <div className={styles.cardIcon}>{cat.icon}</div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardName}>{cat.name}</h2>
                <p className={styles.cardDesc}>{cat.description}</p>
              </div>
              <span className={styles.cardArrow}>→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
