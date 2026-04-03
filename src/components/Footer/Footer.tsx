"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { FOOTER_SECTIONS, CATEGORIES, SITE_STATS } from "@/data/index";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailInputRef.current?.value;
    if (!email) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Vielen Dank! Sie haben sich erfolgreich für den Newsletter angemeldet.");
        emailInputRef.current!.value = "";
      } else {
        alert("Fehler beim Anmelden. Bitte versuchen Sie es später erneut.");
      }
    } catch (error) {
      console.error("Newsletter submit error:", error);
      alert("Fehler beim Anmelden. Bitte versuchen Sie es später erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className={styles.footer}>
      {/* Stats band */}
      <div className={styles.statsBand}>
        <div className={styles.container}>
          <div className={styles.statsRow}>
            <div className={styles.statCard}>
              <strong>{SITE_STATS.totalCoupons.toLocaleString("de-DE")}</strong>
              <span>Aktive Gutscheine</span>
            </div>
            <div className={styles.statCard}>
              <strong>{SITE_STATS.totalShops}</strong>
              <span>Partner-Shops</span>
            </div>
            <div className={styles.statCard}>
              <strong>{SITE_STATS.activeUsers}</strong>
              <span>Zufriedene Nutzer</span>
            </div>
            <div className={styles.statCard}>
              <strong>{SITE_STATS.totalSavings}€</strong>
              <span>Gespartes Geld dieses Jahr</span>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className={styles.newsletter}>
        <div className={styles.container}>
          <div className={styles.newsletterContent}>
            <div className={styles.newsletterText}>
              <h3>Kein Angebot mehr verpassen!</h3>
              <p>Abonnieren Sie unseren Newsletter und erhalten Sie täglich die besten Gutscheine.</p>
            </div>
            <form className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Ihre E-Mail-Adresse"
                required
                className={styles.newsletterInput}
                ref={emailInputRef}
              />
              <button type="submit" className={styles.newsletterBtn} disabled={isSubmitting}>
                {isSubmitting ? "Wird gesendet..." : "Jetzt anmelden"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer links */}
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            {/* Brand column */}
            <div className={styles.brandColumn}>
              <Link href="/" className={styles.footerLogo}>
                <div className={styles.footerLogoIcon}>DC</div>
                <span>DealCoupon</span>
              </Link>
              <p className={styles.brandDesc}>
                Deutschlands führendes Gutschein-Portal. Jeden Tag neue Rabattcodes, Deals und Angebote von über{" "}
                {SITE_STATS.totalShops} Top-Shops.
              </p>
            </div>

            {/* Link sections */}
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.heading} className={styles.footerSection}>
                <h4 className={styles.footerHeading}>{section.heading}</h4>
                <ul className={styles.footerLinks}>
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={styles.footerLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <p className={styles.copyright}>
            © {currentYear} DeutschCoupons.de – Alle Rechte vorbehalten.
          </p>
          <p className={styles.disclaimer}>
            * Die auf dieser Website genannten Rabatte, Gutscheincodes und Angebote sind zum Zeitpunkt der Veröffentlichung aktuell. Wir übernehmen keine Garantie für die Gültigkeit. Alle Preisangaben inkl. MwSt.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
            <Link href="/agb">AGB</Link>
            <Link href="/cookies">Cookie-Einstellungen</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
