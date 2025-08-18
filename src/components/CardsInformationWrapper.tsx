import type { CardInforationProps } from "../lib/entities/CardInforationProps"
import { CardInforation } from "./CardInformation"
import { FaMapMarkerAlt, FaClock, FaRing } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { FaMale, FaFemale } from "react-icons/fa";
import { FaPersonHalfDress } from "react-icons/fa6";
import { BiChurch } from "react-icons/bi";


export const InfoCards = () => {
  
  const cardInformationList: CardInforationProps[] = [ 
    {
      title: "Ceremonia",
      type: "location",
      icon: <BiChurch  />,
      desktopUrl: "https://www.google.com/maps?rlz=1C1ONGR_esPE1087PE1087&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBjc1ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=pe&sa=X&geocode=Kd1h2yO3yAWRMdJxNoHoJtKf&daddr=Jr.+Az%C3%A1ngaro+451,+Lima+15001",
      mobileUrl: "https://www.google.com/maps?rlz=1C1ONGR_esPE1087PE1087&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBjc1ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=pe&sa=X&geocode=Kd1h2yO3yAWRMdJxNoHoJtKf&daddr=Jr.+Az%C3%A1ngaro+451,+Lima+15001",
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
      desktopUrl: "https://www.google.com/maps/dir//Avenida+Los+Laureles+Mz.+K+lote+4,+Lurigancho-Chosica+15400/@-12.0120337,-77.0114524,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105c581dad53c4d:0x6e440108ed545241!2m2!1d-76.9290505!2d-12.0120458?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D",
      mobileUrl: "https://www.google.com/maps/dir//Avenida+Los+Laureles+Mz.+K+lote+4,+Lurigancho-Chosica+15400/@-12.0120337,-77.0114524,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105c581dad53c4d:0x6e440108ed545241!2m2!1d-76.9290505!2d-12.0120458?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D",
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