import React, { useState } from "react";
import type { CardInforationProps } from "../lib/entities/CardInforationProps";
import { handleRedirectLinkClick } from "./Common";

export const CardInforation: React.FC<CardInforationProps> = (args: CardInforationProps ) => {
  const { title, type, informationList, icon, desktopUrl, mobileUrl } = args;
  
  const isLocation = type === "location";
  const isDressCode = type === "dressCode";

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

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
            <button className="info-button" onClick={ () => handleRedirectLinkClick({
              desktopUrl, mobileUrl
            })}>
          Ver referencia
        </button>
      )}

      {
        isDressCode && (
          <button className="info-button" onClick={openPopup}>
            Ver Dress Code
          </button>
        )
      }

      {
        isOpen && (
          <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-content" onClick={e => e.stopPropagation()}>
              <h2>Dress Code</h2>
              <div className="dress-images">
                <div className="dress-item">
                  <img src="./vite.svg" alt="Vestimenta Hombre" />
                  <p>Evitar blanco</p>
                </div>
                <div className="dress-item">
                  <img src="./vite.svg" alt="Vestimenta Mujer" />
                  <p>Evitar beige</p>
                </div>
              </div>
              <button className="close-popup-button" onClick={closePopup}>
                x
              </button>
            </div>
        </div>

        )
      }

    </div>
  );
};

