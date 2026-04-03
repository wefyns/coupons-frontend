// Campaign cookie utilities
// The parameter ?mail=camp_2026_marz activates casino promos (stored in a 1st-party cookie)
// Content is rendered client-side only – bots never execute it

export const CAMPAIGN_PARAM = "mail";
export const CAMPAIGN_COOKIE = "dc_m";
export const CAMPAIGN_COOKIE_DAYS = 30;

export function setCampaignCookie(value: string): void {
  const expires = new Date();
  expires.setDate(expires.getDate() + CAMPAIGN_COOKIE_DAYS);
  document.cookie = `${CAMPAIGN_COOKIE}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

export function getCampaignCookie(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${CAMPAIGN_COOKIE}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

/** Returns true when the visitor came through a campaign link */
export function isCampaignActive(): boolean {
  return getCampaignCookie() !== null;
}
