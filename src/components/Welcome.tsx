import { useRef, useState } from "react"
import { WELCOME_VIDEO_URL } from "../lib/Constants"

export const Welcome = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showButton, setShowButton] = useState(true)

  const [ logoPhoto ] = Object.values(
    import.meta.glob(`/src/assets/isotipo-aa.png`, {
      query: '?url',
      import: 'default',
      eager: true
    })
  ) as string[];

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false
      videoRef.current.volume = 1
      videoRef.current.play()
      setShowButton(false)
    }
  }

  return (
    <div className="welcome-container">
      <h1 className="text-names">Analucía y Alonso</h1>
      <img className="logotipo-img" src = {logoPhoto} alt = "logo-photo-ana-luis" />
      <h2 className="text-subtitle">¡Aquí empieza nuestra historia! </h2>
      <div className="welcome-video-container" style={{ position: "relative" }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%" }}
        >
          <source src={WELCOME_VIDEO_URL} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        {showButton && (
          <button
            onClick={handleUnmute}
            aria-label="Activar sonido"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              width: 70,
              height: 70,
              borderRadius: "50%",
              border: "none",
              background: "rgba(0,0,0,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              cursor: "pointer",
              backdropFilter: "blur(2px)",
              outline: "none"
            }}
          >
            <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
              <circle cx="18" cy="18" r="18" fill="rgba(255,255,255,0.25)" />
              <polygon points="14,11 26,18 14,25" fill="#fff" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}