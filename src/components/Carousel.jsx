import React, { useState, useRef, useEffect } from 'react'

const videos = [
  `${process.env.PUBLIC_URL}/video_02.mp4`,
  `${process.env.PUBLIC_URL}/video_01.mp4`
]

const Carousel = ({ setFading }) => {
  const [current, setCurrent] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [firstLoad, setFirstLoad] = useState(true)
  const [localFading, setLocalFading] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true) // Nuevo estado
  const containerRef = useRef(null)
  const videoRef = useRef(null)

  // Detecta si el div está visible en pantalla
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  // Fade-in al cambiar de video, pero no en la primera carga
  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false)
      setLocalFading(false)
      setFading(false)
    } else {
      setLocalFading(true)
      setFading(true)
      const timeout = setTimeout(() => {
        setLocalFading(false)
        setFading(false)
      }, 700)
      return () => clearTimeout(timeout)
    }
  }, [current, firstLoad, setFading])

  // Controla play/pause del video
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [isPlaying, current])

  const handleEnded = () => {
    if (!isVisible) return
    setLocalFading(true)
    setFading(true)
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % videos.length)
    }, 700)
  }

  const handleButtonClick = (idx) => {
    if (idx === current) return
    setLocalFading(true)
    setFading(true)
    setTimeout(() => {
      setCurrent(idx)
    }, 700)
  }

  // Fade classes
  const fadeClasses = localFading
    ? 'opacity-0 transition-opacity duration-700'
    : 'opacity-100 transition-opacity duration-700'

  // Si es la primera carga, no aplicar fade
  const videoFadeClass = firstLoad ? '' : fadeClasses

  return (
    <div className="relative h-full w-full" ref={containerRef}>
      <div className="relative h-full overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          src={videos[current]}
          className={`block w-full h-full object-cover absolute top-0 left-0 ${videoFadeClass}`}
          autoPlay
          loop={false}
          muted
          playsInline
          onEnded={handleEnded}
        >
          Tu navegador no soporta el video.
        </video>

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
      {/* Indicadores de slide y botón de play/pause */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 items-center">
        {videos.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-gray-400' : 'bg-gray-300'}`}
            aria-current={current === idx}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => handleButtonClick(idx)}
            disabled={localFading}
          />
        ))}
        {/* Botón play/pause */}
        <button
          type="button"
          className="ml-4 w-8 h-8 flex items-center justify-center rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 shadow"
          onClick={() => setIsPlaying((p) => !p)}
        >
          {isPlaying ? (
            // Icono de pausa
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" />
              <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" />
            </svg>
          ) : (
            // Icono de play
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <polygon points="6,4 20,12 6,20 6,4" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

export default Carousel
