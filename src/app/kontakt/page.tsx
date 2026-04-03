import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt | DealCoupon',
  description: 'Kontaktieren Sie das DealCoupon-Team. Wir helfen Ihnen gerne weiter.',
};

export default function KontaktPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Kontakt</h1>
        <p className={styles.intro}>
          Du hast eine Frage, einen Verbesserungsvorschlag oder möchtest einen Fehler melden? Wir
          freuen uns auf deine Nachricht!
        </p>

        <div className={styles.layout}>
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Nachricht senden</h2>
            <form className={styles.form} action="#" method="POST">
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="name">Name *</label>
                <input id="name" name="name" type="text" placeholder="Dein Name" required className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">E-Mail *</label>
                <input id="email" name="email" type="email" placeholder="deine@email.de" required className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="subject">Betreff *</label>
                <input id="subject" name="subject" type="text" placeholder="Worum geht es?" required className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="message">Nachricht *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Schreibe uns deine Nachricht..."
                  required
                  className={styles.textarea}
                />
              </div>
              <button type="submit" className={styles.submitBtn}>Nachricht senden →</button>
            </form>
          </div>

          <div className={styles.infoCol}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Kontaktdaten</h3>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📧</span>
                <div>
                  <strong>E-Mail</strong>
                  <p>info@dealcoupon.de</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📍</span>
                <div>
                  <strong>Adresse</strong>
                  <p>Musterstraße 1<br />10115 Berlin, Deutschland</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>⏰</span>
                <div>
                  <strong>Erreichbarkeit</strong>
                  <p>Mo – Fr, 09:00 – 18:00 Uhr</p>
                </div>
              </div>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Häufige Anfragen</h3>
              <ul className={styles.faqList}>
                <li>Gutschein melden / aktualisieren</li>
                <li>Gutschein einreichen</li>
                <li>Kooperation / Werbung anfragen</li>
                <li>Technische Probleme melden</li>
                <li>Datenschutz-Anfragen</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
