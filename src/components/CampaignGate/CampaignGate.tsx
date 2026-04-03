"use client";
import { useEffect, useState } from "react";
import { CAMPAIGN_PARAM, CAMPAIGN_COOKIE, CAMPAIGN_COOKIE_DAYS, isCampaignActive } from "@/lib/campaign";

interface Props {
  children: React.ReactNode;
}

/**
 * Renders children only when the campaign cookie is present OR
 * the ?mail= URL param is present on this page load.
 * Since this is a client component, bots that don't execute JS never see the content.
 */
export default function CampaignGate({ children }: Props) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Check URL param first (first-visit case)
    const params = new URLSearchParams(window.location.search);
    const paramValue = params.get(CAMPAIGN_PARAM);

    if (paramValue) {
      // Persist immediately so the gate is open now and on subsequent pages
      const expires = new Date();
      expires.setDate(expires.getDate() + CAMPAIGN_COOKIE_DAYS);
      document.cookie = `${CAMPAIGN_COOKIE}=${encodeURIComponent(paramValue)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
      setActive(true);
    } else if (isCampaignActive()) {
      setActive(true);
    }
  }, []);

  if (!active) return null;
  return <>{children}</>;
}
