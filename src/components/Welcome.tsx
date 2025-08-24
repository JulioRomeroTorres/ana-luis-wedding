import { WELCOME_VIDEO_URL } from "../lib/Constants"

export const Welcome = () => {
  
  return (
    <div className="welcome-container">
      <h1>Analucia & Luis</h1>
      <h1>Aquí empieza nuestra historia! </h1>
      <div className="welcome-video-container">
        <video autoPlay muted loop >
          <source src={WELCOME_VIDEO_URL} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>

      </div>
    </div>
  ) 

}