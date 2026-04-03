import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gutschein einreichen | DealCoupon',
  description: 'Du hast einen Gutschein gefunden? Reiche ihn bei DealCoupon ein und hilf anderen beim Sparen.',
};

export default function EinreichenPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Gutschein einreichen</h1>
        <p className={styles.intro}>
          Du hast einen tollen Gutschein gefunden, den wir noch nicht haben? Super! Teile ihn mit
          der Community und hilf anderen beim Sparen.
        </p>

        <div className={styles.formCard}>
          <form className={styles.form} action="#" method="POST">
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="shop">Shop / Händler *</label>
              <input
                id="shop"
                name="shop"
                type="text"
                placeholder="z.B. Zalando, Amazon, MediaMarkt"
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="code">Gutscheincode (falls vorhanden)</label>
              <input
                id="code"
                name="code"
                type="text"
                placeholder="z.B. SOMMER20"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="discount">Rabatt / Beschreibung *</label>
              <input
                id="discount"
                name="discount"
                type="text"
                placeholder="z.B. 20% auf alles, Versandkostenfrei ab 30€"
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="start">Gültig ab</label>
                <input id="start" name="start" type="date" className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="end">Gültig bis</label>
                <input id="end" name="end" type="date" className={styles.input} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="terms">Bedingungen / Einschränkungen</label>
              <textarea
                id="terms"
                name="terms"
                rows={3}
                placeholder="z.B. Nur für Neukunden, Mindestbestellwert 50€"
                className={styles.textarea}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">Deine E-Mail (optional, für Rückfragen)</label>
              <input id="email" name="email" type="email" placeholder="deine@email.de" className={styles.input} />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Gutschein einreichen →
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
