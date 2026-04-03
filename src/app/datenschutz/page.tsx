import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | DeutschCoupons",
};

export default function DatenschutzPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumb items={[{ label: "Datenschutz" }]} />
        <h1 className={styles.title}>Datenschutzerklärung</h1>
        <div className={styles.content}>
          <h2>1. Datenschutz auf einen Blick</h2>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
          passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
          identifiziert werden können.</p>

          <h2>2. Datenerfassung auf dieser Website</h2>
          <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können
          Sie dem Impressum dieser Website entnehmen.</p>

          <h2>3. Cookies</h2>
          <p>Diese Website verwendet keine essentiellen Cookies, die für den Betrieb notwendig sind. Optionale
          Analytics-Cookies werden nur mit Ihrer Zustimmung gesetzt.</p>

          <h2>4. Analyse-Tools und Werbung</h2>
          <p>Wir verwenden keine Tracking-Tools von Drittanbietern ohne Ihre ausdrückliche Einwilligung.</p>

          <h2>5. Affiliate-Links</h2>
          <p>Einige Links auf dieser Website sind sogenannte Affiliate-Links. Wenn Sie über diese Links einkaufen,
          erhalten wir eine Provision. Dies hat keinen Einfluss auf den Preis, den Sie bezahlen.</p>

          <h2>6. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht auf Auskunft über die gespeicherten Daten, das Recht auf Berichtigung
          unrichtiger Daten, das Recht auf Löschung sowie das Recht auf Einschränkung der Verarbeitung.</p>

          <p>Kontakt für Datenschutzanfragen: datenschutz@deutschcoupons.de</p>
        </div>
      </div>
    </div>
  );
}
