import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie-Richtlinie | DealCoupon',
  description: 'Informationen zur Verwendung von Cookies auf DealCoupon.de.',
};

export default function CookiesPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Cookie-Richtlinie</h1>
        <div className={styles.content}>
          <p>
            Diese Cookie-Richtlinie erklärt, wie DealCoupon.de (nachfolgend „wir" oder „uns") Cookies
            und ähnliche Technologien auf unserer Website verwendet.
          </p>

          <h2>Was sind Cookies?</h2>
          <p>
            Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Gerät gespeichert
            werden. Sie helfen dabei, die Website funktionsfähig zu machen und Ihr Nutzungserlebnis zu
            verbessern.
          </p>

          <h2>Welche Cookies verwenden wir?</h2>
          <p>Wir verwenden folgende Kategorien von Cookies:</p>
          <ul>
            <li>
              <strong>Notwendige Cookies:</strong> Diese sind für den Betrieb der Website unerlässlich
              und können nicht deaktiviert werden.
            </li>
            <li>
              <strong>Analytische Cookies:</strong> Diese helfen uns zu verstehen, wie Besucher unsere
              Website nutzen, um sie zu verbessern.
            </li>
            <li>
              <strong>Marketing-Cookies:</strong> Diese werden verwendet, um Ihnen relevante Werbung
              anzuzeigen.
            </li>
          </ul>

          <h2>Cookies von Drittanbietern</h2>
          <p>
            Einige unserer Partner setzen ebenfalls Cookies. Dies umfasst Analyse-Tools und
            Werbenetzwerke. Diese Cookies unterliegen der Datenschutzrichtlinie der jeweiligen
            Drittanbieter.
          </p>

          <h2>Cookies verwalten</h2>
          <p>
            Sie können Cookies in Ihren Browsereinstellungen jederzeit deaktivieren oder löschen.
            Bitte beachten Sie, dass die Deaktivierung bestimmter Cookies die Funktionalität unserer
            Website beeinträchtigen kann.
          </p>

          <h2>Kontakt</h2>
          <p>
            Bei Fragen zu unserer Cookie-Richtlinie wenden Sie sich bitte an:
            datenschutz@dealcoupon.de
          </p>
        </div>
      </div>
    </main>
  );
}
