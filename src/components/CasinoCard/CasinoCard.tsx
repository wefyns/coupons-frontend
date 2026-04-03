"use client";
import { useState } from "react";
import type { CasinoPromo } from "@/data/index";
import styles from "./CasinoCard.module.css";

interface Props {
  promo: CasinoPromo;
}

export default function CasinoCard({ promo }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(promo.bonusCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <div className={styles.card}>
        <span className={styles.adLabel}>Anzeige</span>
        <div className={styles.logoWrap}>
          <img src={promo.logo} alt={promo.casinoName} className={styles.logo} />
        </div>
        <div className={styles.body}>
          <h3 className={styles.name}>{promo.casinoName}</h3>
          <p className={styles.bonus}>{promo.bonusSummary}</p>
          <div className={styles.meta}>
            <span className={styles.wr}>WR: {promo.wr}</span>
            {promo.betPerSpin && <span className={styles.spin}>Einsatz: {promo.betPerSpin}</span>}
          </div>
        </div>
        <div className={styles.actions}>
          <button className={styles.detailsBtn} onClick={() => setModalOpen(true)}>
            Details
          </button>
          <button className={styles.codeBtn} onClick={handleCopy}>
            {copied ? "✓ Kopiert!" : promo.bonusCode}
          </button>
        </div>
      </div>

      {modalOpen && (
        <div className={styles.overlay} onClick={() => setModalOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setModalOpen(false)}>✕</button>
            <div className={styles.modalHeader}>
              <img src={promo.logo} alt={promo.casinoName} className={styles.modalLogo} />
              <div>
                <h2 className={styles.modalTitle}>{promo.casinoName}</h2>
                <p className={styles.modalBonus}>{promo.bonusSummary}</p>
              </div>
            </div>

            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Bonus-Code</span>
                <strong className={styles.codeHighlight}>{promo.bonusCode}</strong>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Umsatzbedingungen</span>
                <strong>{promo.wr}</strong>
              </div>
              {promo.betPerSpin && (
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Einsatz/Spin</span>
                  <strong>{promo.betPerSpin}</strong>
                </div>
              )}
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Max. Auszahlung</span>
                <strong>{promo.maxCashout}</strong>
              </div>
              {promo.depositRequired && (
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Einzahlung</span>
                  <strong>{promo.depositRequired}</strong>
                </div>
              )}
              {promo.maxWin && (
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Max. Gewinn</span>
                  <strong>{promo.maxWin}</strong>
                </div>
              )}
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Bonus-Gültigkeit</span>
                <strong>{promo.bonusExpireDays} Tage</strong>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Max. Einsatz (No-Deposit)</span>
                <strong>{promo.maxBetNoDeposit}</strong>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Kreditkarte nötig</span>
                <strong>{promo.noCreditCardRequired ? "Nein" : "Ja"}</strong>
              </div>
            </div>

            <div className={styles.section}>
              <p className={styles.sectionLabel}>Erlaubte Spiel-Kategorien</p>
              <p className={styles.allowed}>{promo.allowedCategories}</p>
            </div>
            <div className={styles.section}>
              <p className={styles.sectionLabel}>Nicht erlaubte Kategorien</p>
              <p className={styles.prohibited}>{promo.prohibitedCategories}</p>
            </div>
            <div className={styles.section}>
              <p className={styles.wagingNote}>{promo.wagingNote}</p>
            </div>

            <div className={styles.modalActions}>
              <button className={styles.modalCopyBtn} onClick={handleCopy}>
                {copied ? "✓ Code kopiert!" : `Code kopieren: ${promo.bonusCode}`}
              </button>
              <a href={promo.websiteUrl} target="_blank" rel="noopener noreferrer sponsored" className={styles.visitBtn}>
                Zum Casino →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
