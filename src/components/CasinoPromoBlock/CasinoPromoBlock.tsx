"use client";
import { CASINO_PROMOS } from "@/data/index";
import CasinoCard from "@/components/CasinoCard/CasinoCard";
import styles from "./CasinoPromoBlock.module.css";

interface Props {
  /** How many casinos to show (default: all) */
  limit?: number;
  variant?: "sidebar" | "inline";
}

export default function CasinoPromoBlock({ limit, variant = "inline" }: Props) {
  const promos = limit ? CASINO_PROMOS.slice(0, limit) : CASINO_PROMOS;

  return (
    <div className={`${styles.block} ${styles[variant]}`}>
      <div className={styles.header}>
        <span className={styles.adBadge}>Anzeige</span>
        <h3 className={styles.title}>Casino Bonus-Angebote</h3>
      </div>
      <div className={styles.grid}>
        {promos.map((p) => (
          <CasinoCard key={p.id} promo={p} />
        ))}
      </div>
    </div>
  );
}
