import Link from "next/link";
import { CATEGORIES, NAV_ITEMS, SITE_STATS } from "@/data/index";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <span className={styles.topBarText}>
            🎉 Über {SITE_STATS.totalCoupons.toLocaleString("de-DE")} aktive
            Gutscheine – <strong>Jeden Tag neu!</strong>
          </span>
          <div className={styles.topBarLinks}>
            <Link href="/newsletter">Newsletter</Link>
            <Link href="/wie-es-funktioniert">Wie es funktioniert</Link>
            <Link href="/einreichen">Gutschein einreichen</Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className={styles.mainHeader}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <img
              src="/logos/gutsch-logo.svg"
              alt="DeutschCoupons Logo"
              width={40}
              height={40}
            />
            <div className={styles.logoText}>
              <span className={styles.logoMain}>gutscheincodewelt.de</span>
              <span className={styles.logoSub}>
                Spare täglich mit den besten Gutscheinen
              </span>
            </div>
          </Link>

          <div className={styles.searchWrapper}>
            <form action="/suche" method="get" className={styles.searchForm}>
              <input
                type="text"
                name="q"
                placeholder="Shop oder Gutschein suchen…"
                className={styles.searchInput}
              />
              <button type="submit" className={styles.searchBtn}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </form>
          </div>

          <div className={styles.headerStats}>
            <div className={styles.statItem}>
              <strong>{SITE_STATS.totalShops}</strong>
              <span>Shops</span>
            </div>
            <div className={styles.statItem}>
              <strong>{SITE_STATS.totalCoupons.toLocaleString("de-DE")}</strong>
              <span>Gutscheine</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.navItems}>
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className={styles.navItem}>
                {item.icon && (
                  <span className={styles.navIcon}>{item.icon}</span>
                )}
                {item.label}
              </Link>
            ))}

            {/* Kategorien dropdown */}
            <div className={styles.dropdown}>
              <button className={styles.dropdownTrigger}>
                📂 Alle Kategorien
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className={styles.dropdownMenu}>
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/kategorien/${cat.slug}`}
                    className={styles.dropdownItem}
                  >
                    <span>{cat.icon}</span>
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
