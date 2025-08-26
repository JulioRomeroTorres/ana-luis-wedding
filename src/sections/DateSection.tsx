import { ButtonReservation } from "../components/ButtonReservation"
import { Countdown } from "../components/Countdown"

export const DateSection = () => {
  
  return (

    <section className="date-section">
      <p className="date-section-reserve">RESERVA NUESTRA FECHA</p>
      
      <div className="date-section-main">
        <div className="date-section-left">
          <span className="weekday">SÁBADO</span>
          {/*<span className="month">OCTUBRE</span>*/}
        </div>

        <div className="date-section-day">
          25
        </div>

        <div className="date-section-right">
          <span className="month">OCTUBRE</span>
          {/*<span className="time">17:00 HRS.</span>*/}
          <span className="year">2025</span>
        </div>
        <Countdown></Countdown>
        <ButtonReservation/>
      </div>
    </section>


  )
}