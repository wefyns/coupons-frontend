"use client";
import { useEffect, useState } from "react";
import CouponCard from "@/components/CouponCard/CouponCard";
import CasinoCard from "@/components/CasinoCard/CasinoCard";
import { isCampaignActive } from "@/lib/campaign";
import type { Coupon, CasinoPromo } from "@/data/index";
import styles from "./GamesCategoryGrid.module.css";

interface Props {
  coupons: Coupon[];
  casinoPromos: CasinoPromo[];
}

/**
 * Renders shop coupons interleaved with casino promos (every other item)
 * when the campaign cookie is active.
 * Without campaign cookie – renders only shop coupons with a standard grid.
 */
export default function GamesCategoryGrid({ coupons, casinoPromos }: Props) {
  const [hasCampaign, setHasCampaign] = useState(false);

  useEffect(() => {
    setHasCampaign(isCampaignActive());
  }, []);

  if (!hasCampaign) {
    return (
      <div className={styles.grid}>
        {coupons.map((c) => (
          <CouponCard key={c.id} coupon={c} />
        ))}
      </div>
    );
  }

  // Interleave: casino promo at positions 1, 3, 5, ... (0-indexed)
  const items: React.ReactNode[] = [];
  let casinoIdx = 0;

  coupons.forEach((c, i) => {
    // Insert a casino card before every 2nd shop coupon
    if (i % 2 === 1 && casinoIdx < casinoPromos.length) {
      items.push(
        <CasinoCard key={casinoPromos[casinoIdx].id} promo={casinoPromos[casinoIdx]} />
      );
      casinoIdx++;
    }
    items.push(<CouponCard key={c.id} coupon={c} />);
  });

  // Remaining casino promos after all shop coupons
  while (casinoIdx < casinoPromos.length) {
    items.push(
      <CasinoCard key={casinoPromos[casinoIdx].id} promo={casinoPromos[casinoIdx]} />
    );
    casinoIdx++;
  }

  return <div className={styles.grid}>{items}</div>;
}
