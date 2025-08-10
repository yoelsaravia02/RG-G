
import React, { useRef } from 'react'

const Carousel = () => {
  const containerRef = useRef(null)
  const videoRef = useRef(null)

  // Clases visuales igual que antes
  const videoClass = 'block w-full h-full object-cover absolute top-0 left-0 opacity-100 transition-opacity duration-700'

  return (
    <div className="relative h-full w-full" ref={containerRef}>
      <div className="relative h-full overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          src={`${process.env.PUBLIC_URL}/video.mp4`}
          className={videoClass}
          autoPlay
          loop
          muted
          playsInline
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
          <h1 className="text-6xl sm:text-6xl md:text-7xl font-extrabold mb-2 font-bona" style={{whiteSpace: 'nowrap'}}>
            Righetti & Gandione
          </h1>
          <h1
            className="font-mona"
            style={{
              fontWeight: '',
              fontSize: '1.8rem',
              color: '#fff',
              letterSpacing: '2px',
              marginTop: '5px',
              marginBottom: '0',
              textShadow: '0 0 10px rgba(0,0,0,0.3)'
            }}
          >
            Bureau Legal
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Carousel
