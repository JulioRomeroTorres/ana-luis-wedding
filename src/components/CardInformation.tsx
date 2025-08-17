import React from "react";
import type { CardInforationProps } from "../lib/entities/CardInforationProps";

export interface MapLinkProps {
  desktopUrl: string;
  mobileUrl: string;
}

const handleMapClick = ({ desktopUrl, mobileUrl }: MapLinkProps) => {
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

  const urlToOpen = isMobile ? mobileUrl : desktopUrl;

  if (!urlToOpen) return;

  if (isMobile) {
    window.location.href = urlToOpen;
    return 
  }
  window.open(urlToOpen, '_blank');
};

export const CardInforation: React.FC<CardInforationProps> = (args: CardInforationProps ) => {
  const { title, type, informationList, icon, desktopUrl, mobileUrl } = args;
  const isLocation = type === "location";

  return (
    <div 
        className={`card-information-${type}`}
    >
        <div className="card-icon">{icon}</div>
        <h2 className="card-title">{title}</h2>

        <div className="card-content">
        {informationList.map(({ icon, text }, idx) => (
          <div className="info-row" key={idx}>
            <span className="info-icon">{icon}</span>
            <span className="info-text">{text}</span>
          </div>
        ))}
      </div>
        
        {
          isLocation && (
            <button className="info-button" onClick={ () => handleMapClick({
              desktopUrl, mobileUrl
            })}>
          Ver referencia
        </button>
      )}

    </div>
  );
};

