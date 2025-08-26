import { WELCOME_VIDEO_URL } from "../lib/Constants"

export const Welcome = () => {
  
  return (
    <div className="welcome-container">
      <h1 className="text-names">Analucía y Alonso</h1>
      <h2 className="text-subtitle">Aquí empieza nuestra historia! </h2>
      <div className="welcome-video-container">
        <video autoPlay muted loop >
          <source src={WELCOME_VIDEO_URL} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>

      </div>
    </div>
  ) 

}