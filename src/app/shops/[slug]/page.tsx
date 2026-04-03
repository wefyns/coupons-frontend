import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import CouponCard from "@/components/CouponCard/CouponCard";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import {
  SHOPS,
  getShopBySlug,
  getCouponsByShopId,
  getCategoryById,
  getShopsByCategory,
  formatDate,
} from "@/data/index";
import styles from "./page.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SHOPS.map((shop) => ({ slug: shop.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const shop = getShopBySlug(slug);
  if (!shop) return {};
  const couponCount = getCouponsByShopId(shop.id).length;
  return {
    title: `${shop.name} Gutscheine ${new Date().getFullYear()} – ${couponCount} aktuelle Rabattcodes`,
    description: `${couponCount} aktuelle Gutscheincodes und Deals für ${shop.name}. ${shop.description} Jetzt sparen bei DealCoupon!`,
    alternates: {
      canonical: `/shops/${shop.slug}`,
    },
    openGraph: {
      title: `${shop.name} Gutscheine ${new Date().getFullYear()}`,
      description: `${couponCount} aktive Rabattcodes für ${shop.name}`,
      url: `https://dealcoupon.de/shops/${shop.slug}`,
    },
  };
}

export default async function ShopPage({ params }: Props) {
  const { slug } = await params;
  const shop = getShopBySlug(slug);
  if (!shop) notFound();

  const coupons = getCouponsByShopId(shop.id);
  const category = getCategoryById(shop.categoryId);
  const relatedShops = category
    ? getShopsByCategory(shop.categoryId).filter((s) => s.id !== shop.id).slice(0, 4)
    : [];

  const codeCoupons = coupons.filter((c) => c.code);
  const dealCoupons = coupons.filter((c) => !c.code);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumb
          items={[
            { label: "Alle Shops", href: "/shops" },
            ...(category ? [{ label: category.name, href: `/kategorien/${category.slug}` }] : []),
            { label: shop.name },
          ]}
        />

        {/* Shop header */}
        <div className={styles.shopHeader}>
          <img
            src={shop.logo}
            alt={shop.name}
            className={styles.shopLogo}
          />
          <div className={styles.shopInfo}>
            <div className={styles.shopMeta}>
              {category && (
                <Link href={`/kategorien/${category.slug}`} className={styles.categoryBadge}>
                  {category.icon} {category.name}
                </Link>
              )}
            </div>
            <h1 className={styles.shopName}>{shop.name} Gutscheine</h1>
            <p className={styles.shopDesc}>{shop.description}</p>
            <div className={styles.shopStats}>
              <div className={styles.shopStat}>
                <strong>{coupons.length}</strong>
                <span>Gutscheine</span>
              </div>
              <div className={styles.shopStat}>
                <strong>{shop.rating.toFixed(1)}</strong>
                <span>Bewertung</span>
              </div>
              <div className={styles.shopStat}>
                <strong>{shop.reviewCount.toLocaleString("de-DE")}</strong>
                <span>Bewertungen</span>
              </div>
            </div>
            <div className={styles.shopActions}>
              <a href={shop.website} target="_blank" rel="noopener noreferrer sponsored" className={styles.shopWebsiteBtn}>
                Zum Shop →
              </a>
            </div>
          </div>
          <div className={styles.shopDetails}>
            {shop.cashback && (
              <div className={styles.detail}>
                <span className={styles.detailIcon}>💰</span>
                <div>
                  <strong>Cashback</strong>
                  <p>{shop.cashback}</p>
                </div>
              </div>
            )}
            {shop.shippingInfo && (
              <div className={styles.detail}>
                <span className={styles.detailIcon}>🚚</span>
                <div>
                  <strong>Versand</strong>
                  <p>{shop.shippingInfo}</p>
                </div>
              </div>
            )}
            {shop.returnPolicy && (
              <div className={styles.detail}>
                <span className={styles.detailIcon}>↩️</span>
                <div>
                  <strong>Rückgabe</strong>
                  <p>{shop.returnPolicy}</p>
                </div>
              </div>
            )}
            <div className={styles.detail}>
              <span className={styles.detailIcon}>🏷️</span>
              <div>
                <strong>Tags</strong>
                <p>{shop.tags.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Über {shop.name}</h2>
          <p className={styles.aboutText}>{shop.longDescription}</p>
        </section>

        {/* Coupon codes */}
        {codeCoupons.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Gutscheincodes ({codeCoupons.length})
            </h2>
            <div className={styles.couponGrid}>
              {codeCoupons.map((coupon) => (
                <CouponCard key={coupon.id} coupon={coupon} shop={shop} showShopName={false} />
              ))}
            </div>
          </section>
        )}

        {/* Deals */}
        {dealCoupons.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Aktuelle Deals &amp; Angebote ({dealCoupons.length})
            </h2>
            <div className={styles.couponGrid}>
              {dealCoupons.map((coupon) => (
                <CouponCard key={coupon.id} coupon={coupon} shop={shop} showShopName={false} />
              ))}
            </div>
          </section>
        )}

        {/* Related shops */}
        {relatedShops.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Ähnliche Shops</h2>
            <div className={styles.relatedGrid}>
              {relatedShops.map((s) => (
                <Link key={s.id} href={`/shops/${s.slug}`} className={styles.relatedCard}>
                  <img
                    src={s.logo}
                    alt={s.name}
                    className={styles.relatedLogo}
                  />
                  <div className={styles.relatedInfo}>
                    <strong>{s.name}</strong>
                    <span>{getCouponsByShopId(s.id).length} Gutscheine</span>
                  </div>
                  <span className={styles.relatedArrow}>→</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: shop.name,
              description: shop.longDescription,
              url: shop.website,
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: shop.rating,
                reviewCount: shop.reviewCount,
                bestRating: 5,
                worstRating: 1,
              },
              priceRange: '€',
            }),
          }}
        />
      </div>
    </div>
  );
}
