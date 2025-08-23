import { useState } from "react";

export const Rewards = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  
  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <div className="reward-container">
      <h2>Nuestros regalos</h2>
      <div className = "reward-description">
        <p>
          {`
            Su presencia es nuestro mayor regalo, si desean \n acompañarnos también con un detalle,\n
            será recibido con inmensa gratitud para nuestro nuevo \n hogar.`
          }
      </p>
      <button className="reward-button" onClick={openPopup}>
          Ver Datos Bancarios
      </button>
        {
        isOpen && (
          <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-content" onClick={e => e.stopPropagation()}>
              <h2>Dress Code</h2>
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