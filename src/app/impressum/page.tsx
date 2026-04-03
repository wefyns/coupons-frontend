import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Impressum | DeutschCoupons",
};

export default function ImpressumPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumb items={[{ label: "Impressum" }]} />
        <h1 className={styles.title}>Impressum</h1>
        <div className={styles.content}>
          <p><strong>DeutschCoupons GmbH</strong><br />
          Musterstraße 42<br />
          10115 Berlin<br />
          Deutschland</p>
          <p><strong>Vertreten durch:</strong><br />
          Max Mustermann (Geschäftsführer)</p>
          <p><strong>Kontakt:</strong><br />
          Telefon: +49 (0) 30 123 456 789<br />
          E-Mail: info@deutschcoupons.de</p>
          <p><strong>Handelsregister:</strong><br />
          Amtsgericht Berlin-Charlottenburg<br />
          HRB 123456 B</p>
          <p><strong>Umsatzsteuer-Identifikationsnummer:</strong><br />
          DE 123456789</p>
          <h2>Haftungsausschluss</h2>
          <p>Die Betreiber dieser Website übernehmen keine Haftung für die Aktualität, Richtigkeit und Vollständigkeit
          der bereitgestellten Gutscheincodes und Angebote. Alle Rabatte und Gutscheine werden ohne Gewähr bereitgestellt.
          Änderungen, Irrtümer und Fehler bleiben vorbehalten.</p>
          <h2>Urheberrecht</h2>
          <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
          des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
        </div>
      </div>
    </div>
  );
}
