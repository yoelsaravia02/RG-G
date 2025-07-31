import React, { useState, useRef, useEffect } from 'react'

const videos = [
  `${process.env.PUBLIC_URL}/video_02.mp4`,
  `${process.env.PUBLIC_URL}/video_01.mp4`
]

const Carousel = ({ setFading }) => {
  const [current, setCurrent] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [localFading, setLocalFading] = useState(false)
  const [isPlaying, setIsPlayaing] = useState(true)
  const containerRef = useRef(null)
  const videoRef = useRef(null)

  // Detectar visibilidad
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  // Fade solo después de interacción
  useEffect(() => {
    if (!hasInteracted) return
    setLocalFading(true)
    setFading(true)
    const timeout = setTimeout(() => {
      setLocalFading(false)
      setFading(false)
    }, 700)
    return () => clearTimeout(timeout)
  }, [current, hasInteracted, setFading])

  // Control de reproducción
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.play()
      else videoRef.current.pause()
    }
  }, [isPlaying, current])

  const handleEnded = () => {
    if (!isVisible) return
    setHasInteracted(true)
    setLocalFading(true)
    setFading(true)
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % videos.length)
    }, 700)
  }

  const handleButtonClick = (idx) => {
    if (idx === current) return
    setHasInteracted(true)
    setLocalFading(true)
    setFading(true)
    setTimeout(() => {
      setCurrent(idx)
    }, 700)
  }

  // Clases fade después de interacción
  const fadeClasses = localFading
    ? 'opacity-0 transition-opacity duration-700'
    : 'opacity-100 transition-opacity duration-700'

  const videoClass =
    hasInteracted ? `block w-full h-full object-cover absolute top-0 left-0 ${fadeClasses}` : 'block w-full h-full object-cover absolute top-0 left-0'

  return (
    <div className="relative h-full w-full" ref={containerRef}>
      <div className="relative h-full overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          src={videos[current]}
          className={videoClass}
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
    </div>
  )
}

export default Carousel
