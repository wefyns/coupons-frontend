import type { Metadata } from "next";
import CouponCard from "@/components/CouponCard/CouponCard";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { getNewCoupons } from "@/data/index";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Neue Gutscheine – Frische Rabattcodes täglich | DeutschCoupons",
  description:
    "Entdecken Sie die neuesten Gutscheincodes und Deals – täglich aktualisiert von unserem Redaktionsteam.",
};

export default function NeuPage() {
  const coupons = getNewCoupons();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumb items={[{ label: "Neue Gutscheine" }]} />

        <div className={styles.header}>
          <div className={styles.headerIcon}>✨</div>
          <div>
            <h1 className={styles.title}>Neue Gutscheine</h1>
            <p className={styles.subtitle}>
              {coupons.length} frisch hinzugefügte Rabattcodes und Deals
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
