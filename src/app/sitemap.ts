import { MetadataRoute } from 'next';
import { SHOPS, CATEGORIES, COUPONS } from '@/data/index';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dealcoupon.de';
  const currentDate = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/shops`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kategorien`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/neu`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/beliebt`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gratis`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/wie-es-funktioniert`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/agb`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((category) => ({
    url: `${baseUrl}/kategorien/${category.slug}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  // Shop pages
  const shopPages: MetadataRoute.Sitemap = SHOPS.map((shop) => ({
    url: `${baseUrl}/shops/${shop.slug}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: shop.featured ? 0.9 : 0.7,
  }));

  // Coupon pages
  const couponPages: MetadataRoute.Sitemap = COUPONS.map((coupon) => ({
    url: `${baseUrl}/gutschein/${coupon.id}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...shopPages, ...couponPages];
}
