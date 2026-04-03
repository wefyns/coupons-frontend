import Link from "next/link";
import { CATEGORIES } from "@/data/index";
import styles from "./CategoryGrid.module.css";

interface CategoryGridProps {
  title?: string;
  subtitle?: string;
}

export default function CategoryGrid({ title, subtitle }: CategoryGridProps) {
  return (
    <section className={styles.section}>
      {(title || subtitle) && (
        <div className={styles.header}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      )}
      <div className={styles.grid}>
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            href={`/kategorien/${cat.slug}`}
            className={styles.card}
            style={{ "--cat-color": cat.color } as React.CSSProperties}
          >
            <span className={styles.icon}>{cat.icon}</span>
            <span className={styles.name}>{cat.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
