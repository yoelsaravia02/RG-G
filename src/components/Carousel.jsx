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
          <h1
            className="font-extrabold mb-2 font-bona"
            style={{
              whiteSpace: 'nowrap',
              fontSize: '2.2rem', // base para móviles
            }}
          >
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Righetti Gandione & Grounds
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
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Bureau Legal
            </span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Carousel
