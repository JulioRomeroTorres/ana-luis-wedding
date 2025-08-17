import type { CardInforationProps } from "../lib/entities/CardInforationProps"
import { CardInforation } from "./CardInformation"
import { FaMapMarkerAlt, FaClock, FaRing } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { FaMale, FaFemale } from "react-icons/fa";
import { FaPersonHalfDress } from "react-icons/fa6";

export const InfoCards = () => {
  
  const cardInformationList: CardInforationProps[] = [ 
    {
      title: "Ceremonia",
      type: "location",
      icon: <FaRing  />,
      desktopUrl: "",
      mobileUrl: "",
      informationList: [
        {
          icon: <FaMapMarkerAlt />,
          text: "Parroquia del Santuario Arquidiocesano del Corazón de Jesús – San Pedro"
        },
        {
          icon: <FaClock />,
          text: "01:45 p.m."
        },
      ]
    },
    {
      title: "Fiesta",
      type: "location",
      icon: <GiPartyPopper />,
      desktopUrl: "",
      mobileUrl: "",
      informationList: [
        {
          icon: <FaMapMarkerAlt />,
          text: "Refugio El Parral - Avenida Los Laureles Mz. K lote 4, Lurigancho-Chosica"
        },
        {
          icon: <FaClock />,
          text: "04:30 p.m."
        },
      ]
    },
    {
      title: "Dress code",
      type: "dressCode",
      icon: <FaPersonHalfDress />,
      desktopUrl: "",
      mobileUrl: "",
      informationList: [
        {
          icon: <FaMale />,
          text: "Vestido Largo (evitar el color blanco o similares)"
        },
        {
          icon: <FaFemale/>,
          text: "Terno (evitar el color beige)"
        },
      ]
    }
     
  ]
  
  return (
    <div className="card-information-wrapper">
    {
      cardInformationList.map( (card, index) => {
        return <CardInforation key = {index} {...card} />
      })
    }
    </div> 
  )
}