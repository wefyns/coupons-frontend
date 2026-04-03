import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Newsletter – Exklusive Deals & Rabatte | DealCoupon',
  description: 'Melde dich für den DealCoupon Newsletter an und erhalte täglich die besten Gutscheine.',
};

export default function NewsletterPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroIcon}>✉️</div>
          <h1 className={styles.title}>Nie wieder einen Deal verpassen!</h1>
          <p className={styles.subtitle}>
            Melde dich jetzt für unseren kostenlosen Newsletter an und erhalte täglich die besten
            Gutscheine und exklusiven Rabattcodes direkt in dein Postfach.
          </p>
          <form className={styles.form} action="#" method="POST">
            <input
              type="email"
              name="email"
              placeholder="Deine E-Mail-Adresse"
              required
              className={styles.emailInput}
            />
            <button type="submit" className={styles.submitBtn}>
              Jetzt anmelden
            </button>
          </form>
          <p className={styles.disclaimer}>
            Kostenlos & jederzeit abmeldbar. Kein Spam. Datenschutz wird großgeschrieben.
          </p>
        </div>

        <div className={styles.benefits}>
          <h2 className={styles.benefitsTitle}>Das erwartet dich:</h2>
          <div className={styles.benefitGrid}>
            {[
              { icon: '🎯', title: 'Täglich neue Deals', desc: 'Die besten Gutscheine des Tages, handverlesen für dich.' },
              { icon: '⚡', title: 'Exklusive Angebote', desc: 'Als Newsletter-Abonnent erhältst du als Erster Zugang zu exklusiven Codes.' },
              { icon: '🛒', title: 'Alle Kategorien', desc: 'Mode, Elektronik, Reisen, Lebensmittel und vieles mehr.' },
              { icon: '🔔', title: 'Ablauf-Erinnerungen', desc: 'Wir erinnern dich rechtzeitig, bevor ein guter Deal abläuft.' },
            ].map((b) => (
              <div key={b.title} className={styles.benefitCard}>
                <span className={styles.benefitIcon}>{b.icon}</span>
                <h3 className={styles.benefitName}>{b.title}</h3>
                <p className={styles.benefitDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
