import type { Metadata } from "next";
import CouponCard from "@/components/CouponCard/CouponCard";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { getPopularCoupons } from "@/data/index";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Beliebteste Gutscheine – Top Deals der Community | DeutschCoupons",
  description:
    "Die beliebtesten Gutscheincodes und Deals, die von unserer Community am häufigsten genutzt werden.",
};

export default function BeliebtPage() {
  const coupons = getPopularCoupons();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumb items={[{ label: "Beliebteste Gutscheine" }]} />

        <div className={styles.header}>
          <div className={styles.headerIcon}>🔥</div>
          <div>
            <h1 className={styles.title}>Beliebteste Gutscheine</h1>
            <p className={styles.subtitle}>
              {coupons.length} Gutscheine, die unsere Community am meisten liebt
            </p>
          </div>
        </div>

        <div className={styles.couponGrid}>
          {coupons.map((coupon) => (
            <CouponCard key={coupon.id} coupon={coupon} />
          ))}
        </div>
      </div>
    </div>
  );
}
