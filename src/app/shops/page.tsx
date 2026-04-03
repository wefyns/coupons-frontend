import type { Metadata } from "next";
import Link from "next/link";
import ShopCard from "@/components/ShopCard/ShopCard";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import CategoryGrid from "@/components/CategoryGrid/CategoryGrid";
import { SHOPS, CATEGORIES } from "@/data/index";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Alle Shops – Gutscheine & Rabattcodes | DeutschCoupons",
  description:
    "Entdecken Sie über 300 Partner-Shops mit aktuellen Gutscheincodes und Rabatten. Sortiert nach Kategorie und Beliebtheit.",
};

export default function ShopsPage() {
  const shopsByCategory = CATEGORIES.map((cat) => ({
    category: cat,
    shops: SHOPS.filter((s) => s.categoryId === cat.id),
  })).filter((group) => group.shops.length > 0);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumb items={[{ label: "Alle Shops" }]} />

        <div className={styles.header}>
          <h1 className={styles.title}>Alle Partner-Shops</h1>
          <p className={styles.subtitle}>
            Gutscheincodes und aktuelle Deals für {SHOPS.length} Online-Shops
          </p>
        </div>

        {/* Alphabet + featured */}
        <div className={styles.featuredRow}>
          <h2 className={styles.sectionTitle}>🔥 Beliebte Shops</h2>
          <div className={styles.shopGrid}>
            {SHOPS.filter((s) => s.popular).map((shop) => (
              <ShopCard key={shop.id} shop={shop} />
            ))}
          </div>
        </div>

        {/* By category */}
        {shopsByCategory.map(({ category, shops }) => (
          <section key={category.id} className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                {category.icon} {category.name}
              </h2>
              <Link href={`/kategorien/${category.slug}`} className={styles.seeAll}>
                Alle {category.name} Gutscheine →
              </Link>
            </div>
            <div className={styles.shopGrid}>
              {shops.map((shop) => (
                <ShopCard key={shop.id} shop={shop} />
              ))}
            </div>
          </section>
        ))}

        <section className={styles.section}>
          <CategoryGrid title="Nach Kategorie stöbern" />
        </section>
      </div>
    </div>
  );
}
