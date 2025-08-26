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
            Su presencia es nuestro mayor regalo, si desean \n acompañarnos también con un detalle,\n
            será recibido con inmensa gratitud para nuestro nuevo \n hogar.`
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
                <p> Aceptamos transferencias bancarias a nuestra cuenta BCP, esto nos ayudaría bastante: </p>
                <p> - Número de cuenta en soles: 5154083434026</p>
                <p> - Número de cuenta interbancario: 00251500408343402653</p>
                <p>También acaptamos yapes a este número 🤑 : {YAPE_PHONE_NUMBER}</p>
              </div>
              <button className="close-popup-button" onClick={closePopup}>
                x
              </button>
            </div>
        </div>

        )
      }

      </div>
    </div>
  )
}