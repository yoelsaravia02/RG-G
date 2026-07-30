import React, { useRef, useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Carousel = () => {
  const containerRef = useRef(null)
  const videoRef = useRef(null)

  // Asegurar que el video se mantenga reproduciendo
  useEffect(() => {
    AOS.init({ duration: 1300, once: true });
    const video = videoRef.current
    if (!video) return

    const playIfPaused = () => video.paused && video.play().catch(() => { })

    video.addEventListener('pause', playIfPaused)
    video.addEventListener('loadeddata', playIfPaused)
    video.addEventListener('canplay', playIfPaused)

    const interval = setInterval(playIfPaused, 2000) // cada 2s, menos invasivo

    return () => {
      video.removeEventListener('pause', playIfPaused)
      video.removeEventListener('loadeddata', playIfPaused)
      video.removeEventListener('canplay', playIfPaused)
      clearInterval(interval)
    }
  }, [])

  const videoClass = 'block w-full h-full object-cover absolute top-0 left-0 opacity-100 transition-opacity duration-700'

  return (
    <div className="relative h-full w-full" ref={containerRef}>
      <div className="relative h-full overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          src={`${process.env.PUBLIC_URL}/1video.mp4`}
          className={videoClass}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false} // Asegurar que no hay controles
          onPause={(e) => {
            // Reanudar inmediatamente si se pausa
            e.target.play().catch(console.error)
          }}
        >
          Tu navegador no soporta el video.
        </video>

        <div
          id="textoPrincipal"
          className="absolute z-20 max-w-xl px-4 py-3 text-white"
          style={{
            top: '15%',
            left: '10%',
            transform: 'translate(0, 0)',
            textShadow: '0 0 10px rgba(0,0,0,0.3)'
          }}
        >
          <h1
            className="font-extrabold mb-2 font-dm-serif"
            style={{
              marginTop: "45px",
              fontSize: '2.2rem',
            }}
          >
            <span 
              className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight" 
              data-aos="zoom-in"
              style={{
                whiteSpace: 'normal'
              }}
            >
              <style>{`
                @media (min-width: 1024px) {
                  #textoPrincipal h1 span {
                    white-space: nowrap !important;
                  }
                }
              `}</style>
              Righetti Gandione
            </span>
          </h1>
          <h1
            className="font-mona"
            style={{
              fontWeight: '',
              color: '#fff',
              letterSpacing: '2px',
              marginTop: '5px',
              marginBottom: '0',
              textShadow: '0 0 10px rgba(0,0,0,0.3)'
            }}
          >
            <span className="block text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" data-aos="zoom-in">
              Bureau Legal
            </span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Carousel
