import Link from "next/link";
import {
  Coupon,
  Shop,
  formatCouponValue,
  isExpiringSoon,
  formatDate,
  getShopById,
} from "@/data/index";
import styles from "./CouponCard.module.css";

interface CouponCardProps {
  coupon: Coupon;
  shop?: Shop;
  showShopName?: boolean;
  size?: "default" | "compact";
}

export default function CouponCard({
  coupon,
  shop,
  showShopName = true,
  size = "default",
}: CouponCardProps) {
  const resolvedShop = shop ?? getShopById(coupon.shopId);
  const expiringSoon = isExpiringSoon(coupon.expiresAt);
  const badgeLabel = formatCouponValue(coupon);

  return (
    <article className={`${styles.card} ${size === "compact" ? styles.compact : ""}`}>
      {/* Badges */}
      <div className={styles.badges}>
        {coupon.isNew && <span className={`${styles.badge} ${styles.badgeNew}`}>Neu</span>}
        {coupon.isPopular && <span className={`${styles.badge} ${styles.badgePopular}`}>🔥 Beliebt</span>}
        {coupon.isFreeShipping && <span className={`${styles.badge} ${styles.badgeShipping}`}>🚚 Gratis Versand</span>}
        {expiringSoon && <span className={`${styles.badge} ${styles.badgeExpiring}`}>⏰ Läuft bald ab</span>}
      </div>

      <div className={styles.cardBody}>
        {/* Value badge */}
        <div className={`${styles.valueBadge} ${styles[`value_${coupon.type}`]}`}>
          {badgeLabel}
        </div>

        {/* Shop info */}
        {showShopName && resolvedShop && (
          <div className={styles.shopInfo}>
            <img
              src={resolvedShop.logo}
              alt={resolvedShop.name}
              className={styles.shopLogo}
            />
            <Link href={`/shops/${resolvedShop.slug}`} className={styles.shopName}>
              {resolvedShop.name}
            </Link>
          </div>
        )}

        {/* Title & description */}
        <h3 className={styles.title}>
          <Link href={`/gutschein/${coupon.id}`}>{coupon.title}</Link>
        </h3>
        {size !== "compact" && (
          <p className={styles.description}>{coupon.description}</p>
        )}

        {/* Coupon code or deal button */}
        {coupon.code ? (
          <div className={styles.codeSection}>
            <div className={styles.codeLabel}>Gutscheincode:</div>
            <Link href={`/gutschein/${coupon.id}`} className={styles.codeBox}>
              <span className={styles.code}>{coupon.code}</span>
              <span className={styles.codeCopyBtn}>Code anzeigen</span>
            </Link>
          </div>
        ) : (
          <Link href={`/gutschein/${coupon.id}`} className={styles.dealBtn}>
            Zum Angebot →
          </Link>
        )}

        {/* Meta */}
        <div className={styles.meta}>
          {coupon.minOrder && (
            <span className={styles.metaItem}>MBW: {coupon.minOrder}€</span>
          )}
          <span className={styles.metaItem}>
            Gültig bis: {formatDate(coupon.expiresAt)}
          </span>
          <span className={styles.metaItem}>
            {coupon.usageCount.toLocaleString("de-DE")}× verwendet
          </span>
          {coupon.isVerified && (
            <span className={`${styles.metaItem} ${styles.verified}`}>✓ Geprüft</span>
          )}
        </div>
      </div>
    </article>
  );
}
