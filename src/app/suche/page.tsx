import type { Metadata } from "next";
import CouponCard from "@/components/CouponCard/CouponCard";
import ShopCard from "@/components/ShopCard/ShopCard";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { COUPONS, SHOPS } from "@/data/index";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Suche – Gutscheine & Shops finden | DeutschCoupons",
};

interface Props {
  searchParams: Promise<{ q?: string }>;
}

export default async function SuchePage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = (q ?? "").toLowerCase().trim();

  const matchingShops = query
    ? SHOPS.filter(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          s.description.toLowerCase().includes(query) ||
          s.tags.some((t) => t.toLowerCase().includes(query))
      )
    : [];

  const matchingCoupons = query
    ? COUPONS.filter(
        (c) =>
          c.title.toLowerCase().includes(query) ||
          c.description.toLowerCase().includes(query) ||
          (c.code && c.code.toLowerCase().includes(query))
      )
    : [];

  const totalResults = matchingShops.length + matchingCoupons.length;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumb items={[{ label: "Suche" }]} />

        <div className={styles.header}>
          <h1 className={styles.title}>Gutschein-Suche</h1>
        </div>

        {/* Search form */}
        <form action="/suche" method="get" className={styles.searchForm}>
          <input
            type="text"
            name="q"
            defaultValue={q ?? ""}
            placeholder="Shop oder Gutschein suchen…"
            className={styles.searchInput}
            autoFocus
          />
          <button type="submit" className={styles.searchBtn}>
            Suchen
          </button>
        </form>

        {query && (
          <p className={styles.resultInfo}>
            {totalResults} Ergebnisse für <strong>&ldquo;{q}&rdquo;</strong>
          </p>
        )}

        {/* Shop results */}
        {matchingShops.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Shops ({matchingShops.length})
            </h2>
            <div className={styles.shopGrid}>
              {matchingShops.map((shop) => (
                <ShopCard key={shop.id} shop={shop} />
              ))}
            </div>
          </section>
        )}

        {/* Coupon results */}
        {matchingCoupons.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Gutscheine ({matchingCoupons.length})
            </h2>
            <div className={styles.couponGrid}>
              {matchingCoupons.map((c) => (
                <CouponCard key={c.id} coupon={c} />
              ))}
            </div>
          </section>
        )}

        {/* No results */}
        {query && totalResults === 0 && (
          <div className={styles.noResults}>
            <div className={styles.noResultsIcon}>🔍</div>
            <h2>Keine Ergebnisse gefunden</h2>
            <p>
              Für <strong>&ldquo;{q}&rdquo;</strong> wurden keine Gutscheine oder Shops gefunden.
            </p>
            <p>Versuchen Sie es mit einem anderen Suchbegriff oder stöbern Sie in unseren Kategorien.</p>
          </div>
        )}

        {!query && (
          <div className={styles.emptySearch}>
            <p>Geben Sie einen Suchbegriff ein, um Gutscheine und Shops zu finden.</p>
          </div>
        )}
      </div>
    </div>
  );
}
