import Link from "next/link";
import { Shop, getCouponsByShopId } from "@/data/index";
import styles from "./ShopCard.module.css";

interface ShopCardProps {
  shop: Shop;
  size?: "default" | "compact";
}

export default function ShopCard({ shop, size = "default" }: ShopCardProps) {
  const coupons = getCouponsByShopId(shop.id);
  const couponCount = coupons.length;

  return (
    <Link href={`/shops/${shop.slug}`} className={`${styles.card} ${size === "compact" ? styles.compact : ""}`}>
      {/* Shop Logo */}
      <div className={styles.logoWrapper}>
        <img
          src={shop.logo}
          alt={shop.name}
          className={styles.logo}
        />
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{shop.name}</h3>
        {size !== "compact" && (
          <p className={styles.description}>{shop.description}</p>
        )}

        <div className={styles.meta}>
          {couponCount > 0 ? (
            <span className={styles.count}>{couponCount} Gutschein{couponCount !== 1 ? "e" : ""}</span>
          ) : (
            <span className={styles.count}>Jetzt shoppen</span>
          )}
          {shop.cashback && (
            <span className={styles.cashback}>💰 {shop.cashback} Cashback</span>
          )}
          {shop.shippingInfo && size !== "compact" && (
            <span className={styles.shipping}>🚚 {shop.shippingInfo}</span>
          )}
        </div>

        <div className={styles.rating}>
          <div className={styles.stars}>
            {"★".repeat(Math.floor(shop.rating))}
            {"☆".repeat(5 - Math.floor(shop.rating))}
          </div>
          <span className={styles.ratingValue}>{shop.rating.toFixed(1)}</span>
          <span className={styles.reviewCount}>({shop.reviewCount.toLocaleString("de-DE")} Bewertungen)</span>
        </div>
      </div>

      {size !== "compact" && (
        <div className={styles.arrow}>→</div>
      )}
    </Link>
  );
}
