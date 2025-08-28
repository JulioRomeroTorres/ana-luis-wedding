import { useState } from "react";
import { ConfirmAttendence } from "./ConfirmAttendence";

export const Attendance = () => { 

  const [isOpen, setIsOpen] = useState(false);
  
  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <div className="attendance-wrapper">
      <h2 className="text-section-title">Confirma tu asistencia</h2>
      <p className="text-section-description">
       Este día es muy especial para nosotros. La ceremonia religiosa en la iglesia es abierta<br />
       para todos los que deseen acompañarnos. Por temas de aforo,<br />
       la recepción es un evento exclusivo para las personas señaladas en la invitación,<br />
       según la cantidad de pases asignados, por lo que te pedimos con cariño <br />
       no traer niños ni acompañantes adicionales.

Gracias de corazón por tu comprensión <br />
 y apoyo para que juntos podamos disfrutar de una velada cómoda, alegre y bien organizada.
      </p>
      
      <button className="home-button attendance-button" onClick={openPopup} >
        {`Confírmanos`}
      </button>
      <p className="text-section-description">
      <strong>Fecha máxima de confirmación: 15 de setiembre</strong><br />

      </p>
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