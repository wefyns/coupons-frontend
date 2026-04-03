import type { Metadata } from "next";
import Link from "next/link";
import CouponCard from "@/components/CouponCard/CouponCard";
import ShopCard from "@/components/ShopCard/ShopCard";
import CategoryGrid from "@/components/CategoryGrid/CategoryGrid";
import {
  getFeaturedCoupons,
  getNewCoupons,
  getPopularCoupons,
  getFeaturedShops,
  SHOPS,
  SITE_STATS,
} from "@/data/index";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "DealCoupon – Beste Gutscheine & Rabattcodes 2026",
  description:
    "Täglich neue Gutscheine, Rabattcodes und Deals für über 500 deutsche Online-Shops. Spare jetzt mit DealCoupon – Deutschlands #1 Gutscheinportal!",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "DealCoupon – Beste Gutscheine & Rabattcodes 2026",
    description: "Täglich neue Gutscheine für 500+ Shops. Jetzt sparen!",
    url: "https://dealcoupon.de",
  },
};

export default function HomePage() {
  const featuredCoupons = getFeaturedCoupons();
  const newCoupons = getNewCoupons();
  const popularCoupons = getPopularCoupons();
  const featuredShops = getFeaturedShops();
  const allShops = SHOPS.slice(0, 8);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>🇩🇪 Deutschlands #1 Gutschein-Portal</div>
            <h1 className={styles.heroTitle}>
              Spare täglich mit den <span className={styles.accent}>besten Gutscheinen</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Über {SITE_STATS.totalCoupons.toLocaleString("de-DE")} aktive Rabattcodes und Deals von mehr als{" "}
              {SITE_STATS.totalShops} Top-Shops – täglich aktualisiert.
            </p>

            <form action="/suche" method="get" className={styles.heroSearch}>
              <input
                type="text"
                name="q"
                placeholder="Shop oder Gutschein suchen…"
                className={styles.heroSearchInput}
              />
              <button type="submit" className={styles.heroSearchBtn}>
                Jetzt suchen
              </button>
            </form>

            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <strong>{SITE_STATS.totalCoupons.toLocaleString("de-DE")}+</strong>
                <span>Aktive Gutscheine</span>
              </div>
              <div className={styles.heroStat}>
                <strong>{SITE_STATS.totalShops}+</strong>
                <span>Partner-Shops</span>
              </div>
              <div className={styles.heroStat}>
                <strong>{SITE_STATS.activeUsers}+</strong>
                <span>Zufriedene Nutzer</span>
              </div>
              <div className={styles.heroStat}>
                <strong>100%</strong>
                <span>Kostenlos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className={styles.howItWorks}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Wie funktioniert es?</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepIcon}>🔍</div>
              <h3>Shop oder Gutschein suchen</h3>
              <p>Geben Sie den Shop oder die Art des Gutscheins in die Suchleiste ein.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepIcon}>📋</div>
              <h3>Code kopieren</h3>
              <p>Klicken Sie auf „Code anzeigen" und kopieren Sie den Gutscheincode.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepIcon}>🛒</div>
              <h3>Im Shop einlösen</h3>
              <p>Fügen Sie den Code beim Checkout im Online-Shop ein und sparen Sie sofort.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepIcon}>💰</div>
              <h3>Geld gespart!</h3>
              <p>Fertig! Sie haben erfolgreich Geld beim Einkaufen gespart.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.section}>
        <div className={styles.container}>
          <CategoryGrid
            title="Alle Kategorien"
            subtitle="Finden Sie Gutscheine für alle Bereiche des täglichen Lebens"
          />
        </div>
      </section>

      {/* Featured coupons */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>⭐ Top-Gutscheine des Tages</h2>
              <p className={styles.sectionSubtitle}>
                Unsere Redaktion hat die besten Angebote für Sie ausgewählt
              </p>
            </div>
            <Link href="/beliebt" className={styles.seeAll}>
              Alle anzeigen →
            </Link>
          </div>
          <div className={styles.couponGrid}>
            {featuredCoupons.map((coupon) => (
              <CouponCard key={coupon.id} coupon={coupon} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular shops */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>🏪 Beliebte Shops</h2>
              <p className={styles.sectionSubtitle}>
                Gutscheine für die bekanntesten deutschen Online-Shops
              </p>
            </div>
            <Link href="/shops" className={styles.seeAll}>
              Alle Shops →
            </Link>
          </div>
          <div className={styles.shopGrid}>
            {featuredShops.map((shop) => (
              <ShopCard key={shop.id} shop={shop} />
            ))}
          </div>
        </div>
      </section>

      {/* New coupons */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>✨ Neue Gutscheine</h2>
              <p className={styles.sectionSubtitle}>
                Frisch hinzugefügte Rabattcodes und Deals
              </p>
            </div>
            <Link href="/neu" className={styles.seeAll}>
              Alle neuen →
            </Link>
          </div>
          <div className={styles.couponGrid}>
            {newCoupons.map((coupon) => (
              <CouponCard key={coupon.id} coupon={coupon} />
            ))}
          </div>
        </div>
      </section>

      {/* All shops grid */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Alle Partner-Shops</h2>
              <p className={styles.sectionSubtitle}>
                Entdecken Sie Gutscheine für alle unsere Partner
              </p>
            </div>
            <Link href="/shops" className={styles.seeAll}>
              Alle {SHOPS.length} Shops →
            </Link>
          </div>
          <div className={styles.shopGrid}>
            {allShops.map((shop) => (
              <ShopCard key={shop.id} shop={shop} size="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* Popular coupons */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>🔥 Beliebteste Gutscheine</h2>
              <p className={styles.sectionSubtitle}>
                Diese Gutscheine werden von unserer Community am häufigsten genutzt
              </p>
            </div>
            <Link href="/beliebt" className={styles.seeAll}>
              Alle beliebten →
            </Link>
          </div>
          <div className={styles.couponGrid}>
            {popularCoupons.slice(0, 6).map((coupon) => (
              <CouponCard key={coupon.id} coupon={coupon} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className={styles.trustSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Warum DeutschCoupons?</h2>
          <div className={styles.trustGrid}>
            <div className={styles.trustCard}>
              <div className={styles.trustIcon}>✅</div>
              <h3>Täglich geprüfte Codes</h3>
              <p>Unser Team prüft jeden Gutschein manuell auf Aktualität und Gültigkeit.</p>
            </div>
            <div className={styles.trustCard}>
              <div className={styles.trustIcon}>🆓</div>
              <h3>Komplett kostenlos</h3>
              <p>DeutschCoupons ist für alle Nutzer 100% kostenlos – jetzt und in Zukunft.</p>
            </div>
            <div className={styles.trustCard}>
              <div className={styles.trustIcon}>🔒</div>
              <h3>Datenschutz-konform</h3>
              <p>Wir speichern keine persönlichen Daten und verfolgen Sie nicht.</p>
            </div>
            <div className={styles.trustCard}>
              <div className={styles.trustIcon}>⚡</div>
              <h3>Sofort sparen</h3>
              <p>Kein Anmelden nötig – Code kopieren, einfügen, sparen!</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO text */}
      <section className={styles.seoSection}>
        <div className={styles.container}>
          <div className={styles.seoContent}>
            <h2>Gutscheine &amp; Rabattcodes bei DeutschCoupons</h2>
            <p>
              DeutschCoupons ist Ihr persönlicher Sparhelfer für alle Online-Einkäufe in Deutschland. Wir sammeln täglich
              neue Gutscheincodes, Rabattaktionen und Deals von über {SITE_STATS.totalShops} der beliebtesten deutschen
              Online-Shops – von Mode über Elektronik bis hin zu Reisen und Lebensmitteln.
            </p>
            <p>
              Unsere Redaktion prüft jeden Gutschein auf Aktualität und stellt sicher, dass Sie nur funktionierende Codes
              finden. Zusätzlich informieren wir Sie über aktuelle Sale-Aktionen und zeitlich begrenzte Angebote, damit
              Sie keinen Rabatt verpassen.
            </p>
            <p>
              Die Nutzung von DeutschCoupons ist vollständig kostenlos. Es ist keine Registrierung erforderlich. Einfach
              den gewünschten Shop oder die Kategorie auswählen, den passenden Gutscheincode kopieren und beim Checkout
              im Online-Shop einlösen.
            </p>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'DealCoupon',
            description: 'Deutschlands führendes Gutscheinportal mit täglich aktualisierten Rabattcodes',
            url: 'https://dealcoupon.de',
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://dealcoupon.de/suche?q={search_term_string}',
              },
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'DealCoupon',
            url: 'https://dealcoupon.de',
            logo: 'https://dealcoupon.de/logo.png',
            description: 'Deutschlands #1 Gutscheinportal',
            sameAs: [
              'https://facebook.com/dealcoupon',
              'https://twitter.com/dealcoupon',
              'https://instagram.com/dealcoupon',
            ],
          }),
        }}
      />
    </div>
  );
}
