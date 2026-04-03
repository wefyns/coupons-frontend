# SEO Optimierung – DealCoupon

## ✅ Реализовано

### Sitemap
- **Файл:** `src/app/sitemap.ts`
- **URL:** `/sitemap.xml`
- Автоматическая генерация всех страниц (статические, категории, магазины, купоны)
- Приоритеты и частоты обновления настроены
- **Всего страниц в sitemap:** ~87+

### Robots.txt
- **Файл:** `src/app/robots.ts`
- **URL:** `/robots.txt`
- Разрешен доступ ко всему сайту
- Блокирует `/api/` и `/_next/`
- Указывает на sitemap

### Web App Manifest (PWA)
- **Файл:** `src/app/manifest.ts`
- **URL:** `/manifest.webmanifest`
- Название, описание, иконки, тема

### Meta Tags
**В layout.tsx:**
- ✅ Title template
- ✅ Description
- ✅ Keywords (массив)
- ✅ Open Graph теги (title, description, url, images, type, locale)
- ✅ Twitter Card (summary_large_image)
- ✅ Robots meta (index, follow, max-snippet, max-image-preview)
- ✅ Canonical URLs
- ✅ Verification tags (Google, Yandex) - нужно заменить на реальные

**На страницах:**
- ✅ Уникальные title для каждой страницы
- ✅ Уникальные descriptions
- ✅ Canonical URLs
- ✅ Open Graph для всех страниц

### Структурированные данные (JSON-LD)
- ✅ **Главная страница:** WebSite + Organization + SearchAction
- ✅ **Страница купона:** Offer schema с promo code
- ✅ **Страница магазина:** LocalBusiness + AggregateRating

---

## ⚠️ Требуется добавить

### 1. Фавиконы и иконки
Создайте и разместите в `/public/`:
```
/public/favicon.ico           (32x32)
/public/icon-192x192.png      (для manifest)
/public/icon-512x512.png      (для manifest)
/public/apple-touch-icon.png  (180x180 для iOS)
```

**Генерация:**
- Используйте [favicon.io](https://favicon.io) или [realfavicongenerator.net](https://realfavicongenerator.net)
- Основной цвет: `#e63946` (красный акцент)
- Можно использовать текст "DC" или значок купона 🎫

### 2. Open Graph изображение
Создайте `/public/og-image.jpg` (1200x630px):
- Текст: "DealCoupon – Beste Gutscheine & Rabatte"
- Фон: белый с красным акцентом
- Логотип/иконки популярных магазинов
- Статистика (500+ Shops, 10.000+ Gutscheine)

**Инструменты:**
- [Canva](https://www.canva.com) – шаблоны OG images
- [Figma](https://www.figma.com)
- [Placid.app](https://placid.app) – автогенерация

### 3. Логотип сайта
Создайте `/public/logo.png` (квадратное, минимум 512x512):
- Используется в JSON-LD Organization schema
- Должен быть простым и узнаваемым

### 4. Verification коды
В `src/app/layout.tsx` замените placeholder verification коды:
```typescript
verification: {
  google: "your-google-verification-code",    // Google Search Console
  yandex: "your-yandex-verification-code",    // Yandex Webmaster
},
```

**Получение кодов:**
- [Google Search Console](https://search.google.com/search-console)
- [Yandex Webmaster](https://webmaster.yandex.ru)
- [Bing Webmaster](https://www.bing.com/webmasters) (опционально)

### 5. База URL
В `src/app/layout.tsx` и `src/app/sitemap.ts` замените на реальный домен:
```typescript
metadataBase: new URL('https://dealcoupon.de'),  // или ваш домен
```

### 6. Социальные сети
Обновите social links в JSON-LD на главной странице (`src/app/page.tsx`):
```json
"sameAs": [
  "https://facebook.com/REAL_PAGE",
  "https://twitter.com/REAL_HANDLE",
  "https://instagram.com/REAL_HANDLE"
]
```

---

## 📊 Рекомендации по дополнительной оптимизации

### Analytics
Добавьте в `layout.tsx` перед `</body>`:
```tsx
{/* Google Analytics */}
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### Performance
- ✅ Next.js автоматически оптимизирует изображения
- ✅ SSG везде где возможно
- ⚠️ Добавьте `loading="lazy"` для логотипов ниже fold:
  ```tsx
  <img src={shop.logo} alt={shop.name} loading="lazy" />
  ```

### Accessibility
- ✅ Alt теги на всех изображениях
- ✅ Semantic HTML (header, nav, main, footer, section)
- ⚠️ Добавьте `lang="de"` атрибут (уже есть в layout)

### Schema.org расширения
Можно добавить:
- **BreadcrumbList** на всех страницах (у нас уже есть визуальный Breadcrumb, можно добавить JSON-LD)
- **FAQPage** на странице "Wie es funktioniert"
- **ItemList** для списков купонов/магазинов

---

## 🚀 Деплой чеклист

Перед запуском в продакшн:

1. ✅ Проверьте sitemap: `curl https://yourdomain.com/sitemap.xml`
2. ✅ Проверьте robots.txt: `curl https://yourdomain.com/robots.txt`
3. ⚠️ Замените все placeholder изображения и verification коды
4. ⚠️ Обновите `metadataBase` URL на реальный домен
5. ⚠️ Зарегистрируйте сайт в Google Search Console
6. ⚠️ Отправьте sitemap в Search Console
7. ⚠️ Проверьте структурированные данные через [Rich Results Test](https://search.google.com/test/rich-results)
8. ⚠️ Проверьте Open Graph через [OpenGraph.xyz](https://www.opengraph.xyz)
9. ⚠️ Проверьте мобильную версию через [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

---

## 📈 Мониторинг

После запуска отслеживайте:
- Google Search Console – индексация, ошибки, позиции
- Google Analytics – трафик, источники, конверсии
- PageSpeed Insights – производительность
- Ahrefs/SEMrush – backlinks, позиции (платно)

---

## 🔗 Полезные ссылки

- [Next.js Metadata Docs](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Schema.org Documentation](https://schema.org)
- [Google Search Central](https://developers.google.com/search)
- [Open Graph Protocol](https://ogp.me)
