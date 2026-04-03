import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über uns | DealCoupon – Dein Gutschinportal',
  description: 'Erfahre mehr über DealCoupon.de – das führende Gutschein- und Rabattportal in Deutschland.',
};

export default function UeberUnsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Über DealCoupon</h1>
          <p className={styles.heroText}>
            Wir helfen Millionen von Deutschen, beim Online-Shopping zu sparen – täglich mit den
            besten Gutscheinen, Rabattcodes und Sonderangeboten.
          </p>
        </div>

        <div className={styles.statsRow}>
          {[
            { num: '500+', label: 'Aktive Shops' },
            { num: '10.000+', label: 'Gutscheine & Deals' },
            { num: '2 Mio.', label: 'Monatliche Nutzer' },
            { num: 'Seit 2020', label: 'Im Einsatz' },
          ].map((s) => (
            <div key={s.label} className={styles.statCard}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Unsere Mission</h2>
          <p className={styles.text}>
            DealCoupon.de wurde mit einer klaren Mission gegründet: Jedem Verbraucher den Zugang zu
            den besten Rabatten und Sparangeboten zu ermöglichen – kostenlos, einfach und zuverlässig.
            Wir glauben, dass Sparen Spaß machen kann.
          </p>
          <p className={styles.text}>
            Jeden Tag durchsuchen wir das Internet nach den neuesten Gutscheincodes, prüfen sie auf
            Gültigkeit und stellen sie unserer Community kostenlos zur Verfügung. Mit über 500
            Partner-Shops in allen Kategorien findest du bei uns immer den passenden Deal.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Wie wir arbeiten</h2>
          <div className={styles.valueGrid}>
            {[
              { icon: '🔍', title: 'Tägliche Recherche', desc: 'Unser Team und unsere Algorithmen suchen täglich nach neuen Deals und Gutscheincodes.' },
              { icon: '✅', title: 'Manuelle Prüfung', desc: 'Jeder Gutschein wird vor der Veröffentlichung auf seine Gültigkeit geprüft.' },
              { icon: '⚡', title: 'Schnelle Updates', desc: 'Abgelaufene Codes werden zeitnah entfernt, neue sofort hinzugefügt.' },
              { icon: '🤝', title: 'Community-Beiträge', desc: 'Nutzer können eigene Gutscheine einreichen und so anderen helfen zu sparen.' },
            ].map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueName}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2>Gemeinsam sparen</h2>
          <p>Werde Teil unserer wachsenden Spar-Community und entdecke täglich neue Deals.</p>
          <a href="/newsletter" className={styles.ctaBtn}>Zum Newsletter anmelden</a>
        </div>
      </div>
    </main>
  );
}
