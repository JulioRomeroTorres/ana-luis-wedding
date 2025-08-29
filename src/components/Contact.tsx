import { DEFAULT_MESSAGE, PERUVIN_PREFIX, YAPE_PHONE_NUMBER } from "../lib/Constants";
import type { ContactInformation } from "../lib/entities/ContactInformation";

const handlerContactButton = (args: ContactInformation) => {
  const {phoneNumber, message = DEFAULT_MESSAGE} = args;
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
}

const [ logoPhoto ] = Object.values(
    import.meta.glob(`/src/assets/isotipo-aa.png`, {
      query: '?url',
      import: 'default',
      eager: true
    })
  ) as string[];

export const Contact = () => {
  return (
    <div className="contact-container">
      <img src = {logoPhoto} alt = "logo-photo-ana-luis" />
      <p>No dudes en contactarnos si tienes alguna duda</p>
      <button 
      className="contact-container-button"
      onClick={ () => handlerContactButton({
        phoneNumber: `${PERUVIN_PREFIX}${YAPE_PHONE_NUMBER}`
      })}
      > {`¡Contáctanos!`}  </button>
    </div>
  )
}