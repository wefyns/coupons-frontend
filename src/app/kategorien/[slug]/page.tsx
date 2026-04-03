import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import CouponCard from "@/components/CouponCard/CouponCard";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import ShopCard from "@/components/ShopCard/ShopCard";
import GamesCategoryGrid from "@/components/GamesCategoryGrid/GamesCategoryGrid";
import {
  CATEGORIES,
  CASINO_PROMOS,
  getShopsByCategory,
  getCouponsByCategory,
  getCategoryBySlug,
} from "@/data/index";
import styles from "./page.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  const coupons = getCouponsByCategory(category.id);
  return {
    title: `${category.name} Gutscheine ${new Date().getFullYear()} – ${coupons.length} Rabattcodes`,
    description: `${category.description}. ${coupons.length} aktuelle Gutscheincodes und Deals für ${category.name} bei DealCoupon.`,
    alternates: {
      canonical: `/kategorien/${category.slug}`,
    },
    openGraph: {
      title: `${category.name} Gutscheine ${new Date().getFullYear()}`,
      description: `${coupons.length} aktive Rabattcodes für ${category.name}`,
      url: `https://dealcoupon.de/kategorien/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const shops = getShopsByCategory(category.id);
  const coupons = getCouponsByCategory(category.id);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumb
          items={[
            { label: "Kategorien", href: "/kategorien" },
            { label: category.name },
          ]}
        />

        {/* Category hero */}
        <div
          className={styles.hero}
          style={{ "--cat-color": category.color } as React.CSSProperties}
        >
          <div className={styles.heroIcon}>{category.icon}</div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{category.name} Gutscheine</h1>
            <p className={styles.heroSubtitle}>{category.description}</p>
            <div className={styles.heroStats}>
              <span>{shops.length} Shops</span>
              <span>·</span>
              <span>{coupons.length} Gutscheine</span>
            </div>
          </div>
        </div>

        {/* Coupons in this category */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Alle {category.name} Gutscheine ({coupons.length})
          </h2>
          {coupons.length > 0 ? (
            category.id === "games" ? (
              <GamesCategoryGrid coupons={coupons} casinoPromos={CASINO_PROMOS} />
            ) : (
              <div className={styles.couponGrid}>
                {coupons.map((coupon) => (
                  <CouponCard key={coupon.id} coupon={coupon} />
                ))}
              </div>
            )
          ) : (
            <div className={styles.empty}>
              <p>Aktuell sind keine Gutscheine für diese Kategorie verfügbar.</p>
              <Link href="/kategorien" className={styles.backBtn}>
                Alle Kategorien ansehen
              </Link>
            </div>
          )}
        </section>

        {/* Shops in this category */}
        {shops.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Shops in dieser Kategorie</h2>
            <div className={styles.shopGrid}>
              {shops.map((shop) => (
                <ShopCard key={shop.id} shop={shop} />
              ))}
            </div>
          </section>
        )}

        {/* Other categories */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Weitere Kategorien</h2>
          <div className={styles.catGrid}>
            {CATEGORIES.filter((c) => c.id !== category.id).map((cat) => (
              <Link
                key={cat.id}
                href={`/kategorien/${cat.slug}`}
                className={styles.catCard}
                style={{ "--cat-color": cat.color } as React.CSSProperties}
              >
                <span className={styles.catIcon}>{cat.icon}</span>
                <span className={styles.catName}>{cat.name}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
