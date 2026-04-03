import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AGB – Allgemeine Geschäftsbedingungen | DealCoupon',
  description: 'Allgemeine Geschäftsbedingungen von DealCoupon.de.',
};

export default function AGBPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Allgemeine Geschäftsbedingungen</h1>
        <div className={styles.content}>
          <h2>§ 1 Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung des Gutschein- und
            Rabattportals DealCoupon.de. Mit der Nutzung unserer Website stimmen Sie diesen
            Bedingungen zu.
          </p>

          <h2>§ 2 Leistungsbeschreibung</h2>
          <p>
            DealCoupon.de ist ein kostenloses Informationsportal, das Gutscheine, Rabattcodes und
            Angebote verschiedener Online-Händler sammelt und veröffentlicht. Wir bieten keine eigenen
            Produkte oder Dienstleistungen zum Kauf an.
          </p>

          <h2>§ 3 Nutzung der Gutscheine</h2>
          <p>
            Die auf DealCoupon.de veröffentlichten Gutscheine und Rabattcodes werden von den
            jeweiligen Händlern bereitgestellt. Wir übernehmen keine Garantie für die Gültigkeit
            oder Einlösbarkeit der Codes. Bitte prüfen Sie die jeweiligen Bedingungen des Händlers.
          </p>

          <h2>§ 4 Haftungsausschluss</h2>
          <p>
            DealCoupon.de haftet nicht für fehlerhafte, abgelaufene oder nicht einlösbare Gutscheine.
            Alle Angaben zu Rabatten, Ablaufdaten und Konditionen sind ohne Gewähr.
          </p>

          <h2>§ 5 Urheberrecht</h2>
          <p>
            Alle Inhalte dieser Website, einschließlich Texte, Grafiken und Logos, sind urheberrechtlich
            geschützt. Eine Verwendung ohne ausdrückliche schriftliche Genehmigung ist nicht gestattet.
          </p>

          <h2>§ 6 Änderungen der AGB</h2>
          <p>
            Wir behalten uns vor, diese AGB jederzeit zu ändern. Änderungen werden auf dieser Seite
            veröffentlicht. Durch die weitere Nutzung unserer Dienste stimmen Sie den geänderten
            Bedingungen zu.
          </p>

          <h2>§ 7 Anwendbares Recht</h2>
          <p>
            Es gilt ausschließlich deutsches Recht. Gerichtsstand ist Berlin, Deutschland.
          </p>
        </div>
      </div>
    </main>
  );
}
