import { DEFAULT_MESSAGE, PERUVIN_PREFIX, YAPE_PHONE_NUMBER } from "../lib/Constants";
import type { ContactInformation } from "../lib/entities/ContactInformation";

const handlerContactButton = (args: ContactInformation) => {
  const {phoneNumber, message = DEFAULT_MESSAGE} = args;
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
}

export const Contact = () => {
  return (
    <div className="contact-container">
      <p>No dudes en contactarnos si tienes alguna duda</p>
      <button 
      className="contact-container-button"
      onClick={ () => handlerContactButton({
        phoneNumber: `${PERUVIN_PREFIX}${YAPE_PHONE_NUMBER}`
      })}
      > {`¡Contáctanos! ;)`}  </button>
    </div>
  )
}