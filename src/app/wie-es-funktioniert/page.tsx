import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Wie es funktioniert | DeutschCoupons",
  description: "So nutzen Sie DeutschCoupons: Gutscheincode finden, kopieren und beim Checkout einlösen.",
};

export default function WieEsFunktioniertPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumb items={[{ label: "Wie es funktioniert" }]} />
        <h1 className={styles.title}>Wie funktioniert DeutschCoupons?</h1>
        <p className={styles.intro}>
          DeutschCoupons macht es einfach, beim Online-Shopping Geld zu sparen. Hier erklären wir Ihnen Schritt für
          Schritt, wie Sie unsere Gutscheine und Rabattcodes nutzen können.
        </p>
        <div className={styles.steps}>
          {[
            {
              num: "1",
              icon: "🔍",
              title: "Shop oder Kategorie auswählen",
              text: 'Suchen Sie über die Suchleiste nach Ihrem Lieblingsshop oder stöbern Sie in unseren Kategorien. Sie können auch direkt auf der Startseite die aktuellen Top-Angebote sehen."',
            },
            {
              num: "2",
              icon: "🏷️",
              title: "Passenden Gutschein auswählen",
              text: "Wählen Sie den Gutschein, der am besten zu Ihrer Bestellung passt. Achten Sie auf den Mindestbestellwert und das Gültigkeitsdatum.",
            },
            {
              num: "3",
              icon: "📋",
              title: "Code kopieren",
              text: 'Klicken Sie auf "Code anzeigen" – der Gutscheincode wird aufgedeckt und kann kopiert werden. Bei Deals ohne Code klicken Sie einfach auf "Zum Angebot".',
            },
            {
              num: "4",
              icon: "🛒",
              title: "Im Shop einlösen",
              text: "Fügen Sie den kopierten Code im Warenkorb oder beim Checkout in das Gutschein-Feld ein. Der Rabatt wird sofort abgezogen.",
            },
            {
              num: "5",
              icon: "💰",
              title: "Geld gespart!",
              text: "Fertig! Sie haben erfolgreich Geld gespart. Haben Sie noch Fragen? Kontaktieren Sie uns gerne.",
            },
          ].map((step) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepIcon}>{step.icon}</div>
              <div className={styles.stepContent}>
                <h2>{step.title}</h2>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.faq}>
          <h2>Häufig gestellte Fragen</h2>
          {[
            {
              q: "Ist DeutschCoupons kostenlos?",
              a: "Ja, DeutschCoupons ist für alle Nutzer vollständig kostenlos. Sie müssen sich nicht registrieren und zahlen nichts.",
            },
            {
              q: "Wie oft werden Gutscheine aktualisiert?",
              a: "Unser Team aktualisiert die Gutscheine täglich. Abgelaufene Codes werden entfernt und neue sofort hinzugefügt.",
            },
            {
              q: "Was tun, wenn ein Code nicht funktioniert?",
              a: 'Klicken Sie auf "Nicht funktioniert" unter dem Gutschein. Unser Team prüft den Code so schnell wie möglich.',
            },
            {
              q: "Kann ich mehrere Gutscheine kombinieren?",
              a: "Das hängt vom jeweiligen Shop ab. In den Bedingungen des Gutscheins ist angegeben, ob eine Kombination möglich ist.",
            },
          ].map((item, i) => (
            <div key={i} className={styles.faqItem}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
