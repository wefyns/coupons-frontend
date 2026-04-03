"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CAMPAIGN_PARAM, CAMPAIGN_COOKIE_DAYS } from "@/lib/campaign";

/**
 * Reads ?mail=... from the URL and stores it as a first-party cookie.
 * Must be rendered inside a <Suspense> boundary.
 */
export default function CampaignDetector() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const value = searchParams.get(CAMPAIGN_PARAM);
    if (value) {
      const expires = new Date();
      expires.setDate(expires.getDate() + CAMPAIGN_COOKIE_DAYS);
      document.cookie = `dc_m=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
    }
  }, [searchParams]);

  return null;
}
