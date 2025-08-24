import type { MapLinkProps } from "../lib/entities/MapLinkProps";

export const handleRedirectLinkClick = ({ desktopUrl, mobileUrl }: MapLinkProps) => {
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

  const urlToOpen = isMobile ? mobileUrl : desktopUrl;

  if (!urlToOpen) return;

  if (isMobile) {
    window.location.href = urlToOpen;
    return 
  }
  window.open(urlToOpen, '_blank');
};