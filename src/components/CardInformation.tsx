import React, { useState } from "react";
import type { CardInforationProps } from "../lib/entities/CardInforationProps";
import { handleRedirectLinkClick } from "./Common";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

export const CardInforation: React.FC<CardInforationProps> = (
  args: CardInforationProps
) => {
  const { title, type, informationList, icon, desktopUrl, mobileUrl } = args;

  const isLocation = type === "location";
  const isDressCode = type === "dressCode";

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <div className={`card-information-${type}`}>
      <div className="card-icon">{icon}</div>

      {isDressCode ? (
        <h2 className="card-title">
          Código de vestimenta
          <div
            style={{
              marginTop: "1px",
              fontSize: "20px",
              fontStyle: "italic",
              fontWeight: "600",
            }}
          >
            Formal
          </div>
        </h2>
      ) : (
        <h2 className="card-title">{title}</h2>
      )}
      {isLocation && title === "Ceremonia" ? (
        <div className="card-content">
          <div className="info-row">
            <span className="info-icon">
              <FaMapMarkerAlt />
            </span>
            <span className="info-text">
              Parroquia del Santuario Arquidiocesano del Corazón de Jesús – San
              Pedro
              <br />
              <span style={{ fontStyle: "italic", fontSize: "0.9rem" }}>
                Presidida por
                <br />
                Monseñor Juan Jose Salaverry Villarreal
                <br />
                Obispo Auxiliar de Lima
              </span>
            </span>
          </div>
          <div className="info-row">
            <span className="info-icon">
              <FaClock />
            </span>
            <span className="info-text">01:45 p.m.</span>
          </div>
        </div>
      ) : (
        <div className="card-content">
          {informationList.map(({ icon, text }, idx) => (
            <div className="info-row" key={idx}>
              <span className="info-icon">{icon}</span>
              <span className="info-text">{text}</span>
            </div>
          ))}
        </div>
      )}

      {isLocation && (
        <button
          className="home-button info-button"
          onClick={() =>
            handleRedirectLinkClick({
              desktopUrl,
              mobileUrl,
            })
          }
        >
          Ver referencia
        </button>
      )}

      {isDressCode && (
        <button className="home-button info-button" onClick={openPopup}>
          Ver Dress Code
        </button>
      )}

      {isOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>Dress Code</h2>
            <div className="dress-images">
              <div className="dress-item">
                <img src="./colores.svg" alt="Vestimenta Hombre" />
                <p>Vestimenta Prohibida</p>
              </div>
            </div>
            <button className="close-popup-button" onClick={closePopup}>
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
