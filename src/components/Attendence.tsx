import { useState } from "react";
import { ConfirmAttendence } from "./ConfirmAttendence";

export const Attendance = () => { 

  const [isOpen, setIsOpen] = useState(false);
  
  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <div className="attendance-wrapper">
      <h2 className="text-section-title">Confirma tu asistencia</h2>
      <p className="text-section-description">Déjanos saber si contaremos con tu presencia para este día tan especial</p>
      <button className="home-button attendance-button" onClick={openPopup} >
        {`Confírmanos`}
      </button>

      {
        isOpen &&
        (
          <div className="popup-overlay">
            <ConfirmAttendence onClose={closePopup} />
          </div>
        ) 
      }
    
    </div>
  )
}