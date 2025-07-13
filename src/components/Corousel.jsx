import React, { useState, useRef, useEffect } from 'react'

const videos = [
  `${process.env.PUBLIC_URL}/video_02.mp4`,
  `${process.env.PUBLIC_URL}/video_01.mp4`
]

const Accordion = ({ setFading }) => {
  const [current, setCurrent] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [firstLoad, setFirstLoad] = useState(true)
  const [localFading, setLocalFading] = useState(false)
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
      </div>
      {/* Indicadores de slide */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
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
      </div>
    </div>
  )
}

export default Accordion
