import type { Metadata } from "next";
import CouponCard from "@/components/CouponCard/CouponCard";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { getFreeShippingCoupons } from "@/data/index";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Gratis-Versand Gutscheine – Kostenlos liefern lassen | DeutschCoupons",
  description:
    "Sparen Sie die Versandkosten mit unseren Gratis-Versand-Gutscheinen für über 50 Online-Shops.",
};

export default function GratisPage() {
  const coupons = getFreeShippingCoupons();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumb items={[{ label: "Gratis-Versand" }]} />

        <div className={styles.header}>
          <div className={styles.headerIcon}>🚚</div>
          <div>
            <h1 className={styles.title}>Gratis-Versand Gutscheine</h1>
            <p className={styles.subtitle}>
              {coupons.length} aktive Gutscheine für kostenlosen Versand
            </p>
          </div>
        </div>

        <div className={styles.infoBanner}>
          <strong>💡 Tipp:</strong> Mit diesen Gutscheinen sparen Sie die Versandkosten komplett.
          Einfach Code kopieren und beim Checkout eingeben!
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
