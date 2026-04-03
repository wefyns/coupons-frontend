import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DealCoupon – Beste Gutscheine & Rabattcodes Deutschland',
    short_name: 'DealCoupon',
    description: 'Täglich neue Gutscheine, Rabattcodes und Deals für über 500 deutsche Online-Shops. Spare jetzt mit DealCoupon!',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#e63946',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
