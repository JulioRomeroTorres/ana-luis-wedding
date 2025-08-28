import { useState } from "react";
import { YAPE_PHONE_NUMBER } from "../lib/Constants";

export const Rewards = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  
  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <div className="reward-container">
      <h2 className="text-section-title">Lista de regalos</h2>
      <div className = "reward-description">
        <p className="text-section-description">
          {`
            Su presencia es nuestro mayor regalo, \n 
            si desean acompañarnos con un detalle, \n
            lo recibiremos con inmensa gratitud \n 
            para nuestro nuevo hogar.`
          }
      </p>
      <button className="home-button reward-button" onClick={openPopup}>
          Datos Bancarios
      </button>
        {
        isOpen && (
          <div className="reward-popup-overlay" onClick={closePopup}>
            <div className="reward-popup-content" onClick={e => e.stopPropagation()}>
              <div className="popup-content-description"
              >
                <p> Aceptamos transferencias bancarias a nuestra cuenta AGORA </p>
                <p> Número de cuenta en soles: 094-00131000366310-6-52</p>
                <p>También aceptamos yape a este número: {YAPE_PHONE_NUMBER}</p>
              </div>
              <button className="close-popup-button" onClick={closePopup}>
              </button>
            </div>
        </div>

        )
      }

      </div>
    </div>
  )
}