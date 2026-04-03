import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import CouponCard from "@/components/CouponCard/CouponCard";
import CampaignGate from "@/components/CampaignGate/CampaignGate";
import CasinoPromoBlock from "@/components/CasinoPromoBlock/CasinoPromoBlock";
import {
  COUPONS,
  getCouponById,
  getShopById,
  getCouponsByShopId,
  formatCouponValue,
  formatDate,
  isExpiringSoon,
  isExpired,
} from "@/data/index";
import styles from "./page.module.css";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return COUPONS.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const coupon = getCouponById(id);
  if (!coupon) return {};
  const shop = getShopById(coupon.shopId);
  const value = formatCouponValue(coupon);
  return {
    title: `${coupon.title} – ${shop?.name ?? ""} Gutschein ${new Date().getFullYear()}`,
    description: `${coupon.description} ${value} bei ${shop?.name ?? ""}. Gültig bis ${formatDate(coupon.expiresAt)}.`,
    alternates: {
      canonical: `/gutschein/${coupon.id}`,
    },
    openGraph: {
      title: coupon.title,
      description: coupon.description,
      url: `https://dealcoupon.de/gutschein/${coupon.id}`,
    },
  };
}

export default async function CouponPage({ params }: Props) {
  const { id } = await params;
  const coupon = getCouponById(id);
  if (!coupon) notFound();

  const shop = getShopById(coupon.shopId);
  const expired = isExpired(coupon.expiresAt);
  const expiringSoon = isExpiringSoon(coupon.expiresAt);
  const value = formatCouponValue(coupon);
  const moreCoupons = shop
    ? getCouponsByShopId(shop.id).filter((c) => c.id !== coupon.id).slice(0, 3)
    : [];

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumb
          items={[
            { label: "Alle Shops", href: "/shops" },
            ...(shop ? [{ label: shop.name, href: `/shops/${shop.slug}` }] : []),
            { label: coupon.title },
          ]}
        />

        <div className={styles.layout}>
          {/* Main coupon card */}
          <div className={styles.main}>
            {expired && (
              <div className={styles.expiredBanner}>
                ⚠️ Dieser Gutschein ist leider abgelaufen. Weiter unten finden Sie aktuelle Alternativen.
              </div>
            )}
            {expiringSoon && !expired && (
              <div className={styles.expiringSoonBanner}>
                ⏰ Achtung: Dieser Gutschein läuft bald ab – schnell einlösen!
              </div>
            )}

            <div className={styles.couponCard}>
              {/* Value + shop */}
              <div className={styles.couponTop}>
                <div className={`${styles.valueBig} ${expired ? styles.expired : ""}`}>
                  {value}
                </div>
                {shop && (
                  <Link href={`/shops/${shop.slug}`} className={styles.shopLink}>
                    <img
                      src={shop.logo}
                      alt={shop.name}
                      className={styles.shopLogoLg}
                    />
                    <span>{shop.name}</span>
                  </Link>
                )}
              </div>

              <h1 className={styles.couponTitle}>{coupon.title}</h1>
              <p className={styles.couponDesc}>{coupon.description}</p>

              {/* Code section */}
              <div className={styles.codeArea}>
                {coupon.code ? (
                  <>
                    <p className={styles.codeLabel}>Gutscheincode:</p>
                    <div className={styles.codeBox}>
                      <span className={styles.codeValue}>{coupon.code}</span>
                    </div>
                    <p className={styles.codeHint}>
                      Kopieren Sie den Code und fügen Sie ihn beim Checkout ein.
                    </p>
                  </>
                ) : (
                  <p className={styles.noCode}>
                    Kein Code nötig – der Rabatt wird automatisch angewendet.
                  </p>
                )}
                {shop && (
                  <a
                    href={shop.website}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className={`${styles.shopBtn} ${expired ? styles.disabledBtn : ""}`}
                  >
                    {expired ? "Shop besuchen" : "Jetzt zum Shop & einlösen →"}
                  </a>
                )}
              </div>

              {/* Info grid */}
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Gültig bis</span>
                  <span className={styles.infoValue}>{formatDate(coupon.expiresAt)}</span>
                </div>
                {coupon.minOrder && (
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Mindestbestellwert</span>
                    <span className={styles.infoValue}>{coupon.minOrder}€</span>
                  </div>
                )}
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Verwendet</span>
                  <span className={styles.infoValue}>
                    {coupon.usageCount.toLocaleString("de-DE")}×
                  </span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Status</span>
                  <span className={`${styles.infoValue} ${expired ? styles.statusExpired : styles.statusActive}`}>
                    {expired ? "Abgelaufen" : coupon.isVerified ? "✓ Geprüft & aktiv" : "Aktiv"}
                  </span>
                </div>
              </div>

              {/* Terms */}
              {coupon.terms && (
                <div className={styles.terms}>
                  <h3>Bedingungen</h3>
                  <p>{coupon.terms}</p>
                </div>
              )}
            </div>

            {/* More coupons from same shop */}
            {moreCoupons.length > 0 && (
              <section className={styles.moreCoupons}>
                <h2 className={styles.moreTitle}>
                  Weitere {shop?.name}-Gutscheine
                </h2>
                <div className={styles.moreGrid}>
                  {moreCoupons.map((c) => (
                    <CouponCard key={c.id} coupon={c} shop={shop} showShopName={false} size="compact" />
                  ))}
                </div>
                {shop && (
                  <Link href={`/shops/${shop.slug}`} className={styles.allCouponsLink}>
                    Alle {shop.name}-Gutscheine ansehen →
                  </Link>
                )}
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {shop && (
              <div className={styles.sidebarCard}>
                <h3>Shop-Info</h3>
                <img
                  src={shop.logo}
                  alt={shop.name}
                  className={styles.sidebarLogo}
                />
                <strong className={styles.sidebarShopName}>{shop.name}</strong>
                <p className={styles.sidebarShopDesc}>{shop.description}</p>
                {shop.shippingInfo && (
                  <div className={styles.sidebarDetail}>🚚 {shop.shippingInfo}</div>
                )}
                {shop.returnPolicy && (
                  <div className={styles.sidebarDetail}>↩️ {shop.returnPolicy}</div>
                )}
                {shop.cashback && (
                  <div className={styles.sidebarDetail}>💰 Cashback: {shop.cashback}</div>
                )}
                <div className={styles.sidebarRating}>
                  <span style={{ color: "#f5a623" }}>
                    {"★".repeat(Math.floor(shop.rating))}
                    {"☆".repeat(5 - Math.floor(shop.rating))}
                  </span>
                  <span>{shop.rating.toFixed(1)} ({shop.reviewCount.toLocaleString("de-DE")} Bewertungen)</span>
                </div>
                <Link href={`/shops/${shop.slug}`} className={styles.sidebarLink}>
                  Alle Gutscheine →
                </Link>
              </div>
            )}

            <div className={styles.sidebarCard}>
              <h3>Gutschein-Tipps</h3>
              <ul className={styles.tipsList}>
                <li>✅ Code vor dem Kauf kopieren</li>
                <li>✅ Mindestbestellwert beachten</li>
                <li>✅ Gültigkeitsdatum prüfen</li>
                <li>✅ Code beim Checkout einfügen</li>
                <li>✅ Rabatt vor Bestätigung prüfen</li>
              </ul>
            </div>

            <CampaignGate>
              <CasinoPromoBlock limit={3} variant="sidebar" />
            </CampaignGate>
          </aside>
        </div>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Offer',
              name: coupon.title,
              description: coupon.description,
              url: `https://dealcoupon.de/gutschein/${coupon.id}`,
              priceValidUntil: coupon.expiresAt,
              availability: expired ? 'https://schema.org/Discontinued' : 'https://schema.org/InStock',
              ...(shop && {
                seller: {
                  '@type': 'Organization',
                  name: shop.name,
                  url: shop.website,
                },
              }),
              ...(coupon.code && {
                promoCode: coupon.code,
              }),
            }),
          }}
        />
      </div>
    </div>
  );
}
