import React, { useState, useRef, useEffect } from 'react'

const videos = [
  `${process.env.PUBLIC_URL}/videos/2.mp4`,
  `${process.env.PUBLIC_URL}/videos/1.mp4`
]

const FADE_BEFORE_SEC = 3.0 // iniciar la animación 3 segundos antes de que termine el video
const FADE_TOTAL_MS = 2000 // duración total del fade (ms)
const FADE_HALF_MS = FADE_TOTAL_MS / 2 // 1000ms para fade out, 1000ms para fade in

const Carousel1 = ({ setFading }) => {
  const [current, setCurrent] = useState(0)
  const [isFading, setIsFading] = useState(false)
  const [fadeTriggered, setFadeTriggered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const containerRef = useRef(null)
  const videoRef = useRef(null)

  // IntersectionObserver
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause()
        } else if (entry.isIntersecting && videoRef.current && isPlaying) {
          videoRef.current.play().catch(() => {})
        }
      },
      { threshold: 0.1 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [isPlaying])

  // play/pause cuando cambie current o isPlaying
  useEffect(() => {
    if (!videoRef.current) return
    if (isPlaying) videoRef.current.play().catch(() => {})
    else videoRef.current.pause()
  }, [isPlaying, current])

  // Handler que inicia el sequence de fade -> cambio -> unfade
  const triggerFade = () => {
    if (fadeTriggered) return
    setFadeTriggered(true)
    setIsFading(true)
    setFading && setFading(true)

    // A mitad del fade cambiamos el video (cuando pantalla esté completamente negra)
    setTimeout(() => {
      setCurrent(prev => (prev + 1) % videos.length)
    }, FADE_HALF_MS)

    // Fin del fade completo: quitamos overlay
    setTimeout(() => {
      setIsFading(false)
      setFading && setFading(false)
      // dejamos un pequeño buffer antes de permitir otro trigger
      setTimeout(() => setFadeTriggered(false), 200)
    }, FADE_TOTAL_MS)
  }

  // Observador de tiempo del video: dispara triggerFade 3 segundos antes del final
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onTimeUpdate = () => {
      const duration = video.duration
      const currentTime = video.currentTime
      if (!isFinite(duration) || duration === 0) return

      // Solo si queda <= 3 segundos
      if (duration - currentTime <= FADE_BEFORE_SEC && !fadeTriggered) {
        triggerFade()
      }
    }

    video.addEventListener('timeupdate', onTimeUpdate)
    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate)
    }
  }, [current, fadeTriggered])

  // fallback: si el video termina sin haberse disparado
  const handleEnded = () => {
    if (!fadeTriggered) triggerFade()
  }

  // Estilo del overlay con transición suave
  const overlayStyle = {
    transition: `opacity ${FADE_HALF_MS}ms ease-in-out`,
    pointerEvents: 'none' // para que no interfiera con interactions
  }

  return (
    <div className="relative h-full w-full" ref={containerRef}>
      <div className="relative h-full overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          src={videos[current]}
          className="block w-full h-full object-cover absolute top-0 left-0"
          autoPlay
          loop={false}
          muted
          playsInline
          preload="auto"
          onEnded={handleEnded}
        >
          Tu navegador no soporta el video.
        </video>

        {/* Overlay negro para fade-through-black */}
        <div
          className={`absolute top-0 left-0 w-full h-full bg-black z-10 ${
            isFading ? 'opacity-100' : 'opacity-0'
          }`}
          style={overlayStyle}
        />

        {/* Texto */}
        <div
          id="textoPrincipal"
          className="absolute z-20 max-w-xl px-4 py-3 text-white"
          style={{
            top: '15%',
            left: '5%',
            transform: 'translate(0, 0)',
            textShadow: '0 0 10px rgba(0,0,0,0.7)'
          }}
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-2">
            Tu texto principal aquí
          </h2>
          <h2 className="text-xl md:text-xl lg:text-2xl font-light">
            Tu texto secundario aquí
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Carousel1
