import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Novedades() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: false,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px"
        }
      }
    ]
  };

  const novedades = [
    {
      nombre: "Nuevo Lanzamiento",
      descripcion: "Presentamos nuestra última innovación con características revolucionarias que cambiarán tu experiencia digital.",
      imagen: "https://images.pexels.com/photos/2280551/pexels-photo-2280551.jpeg"
    },
    {
      nombre: "Premio Recibido",
      descripcion: "Hemos sido reconocidos con el premio a la mejor innovación tecnológica del año por nuestra excelencia.",
      imagen: "https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg"
    },
    {
      nombre: "Nueva Comunidad",
      descripcion: "Únete a nuestra creciente comunidad de más de 50,000 usuarios activos que confían en nosotros.",
      imagen: "https://images.pexels.com/photos/4427620/pexels-photo-4427620.jpeg"
    },
    {
      nombre: "Seguridad Mejorada",
      descripcion: "Implementamos nuevos protocolos de seguridad para garantizar la máxima protección de tus datos.",
      imagen: "https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg"
    },
    {
      nombre: "Rendimiento Ultra",
      descripcion: "Experimenta velocidades de carga 3x más rápidas con nuestra nueva arquitectura optimizada.",
      imagen: "https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg"
    },
    {
      nombre: "Expansión Global",
      descripcion: "Ahora disponible en 25 países más, llevando nuestra tecnología a todos los rincones del mundo.",
      imagen: "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg"
    }
  ];
  return (
    <section style={{
      background: '#000',
      minHeight: '500px',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    }}>

  <div style={{ textAlign: 'center', marginBottom: '40px', color: '#fff' }}>
        <h2 className="font-bona" style={{
          fontSize: '3.2rem',
          fontWeight: 'bold',
          color: '#ffffff',
          marginBottom: '10px'
        }}>
          Novedades
        </h2>
        <p className="font-mona" style={{
          fontSize: '1.3rem',
          color: '#ffffff',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Descubre las últimas actualizaciones y noticias
        </p>
      </div>
  <div style={{ maxWidth: '100%', width: '100%', margin: '0', overflow: 'hidden', background: '#000', padding: 0 }}>
        <Slider {...settings}>
          {novedades.map((novedad, idx) => (
            <div key={idx}>
              <div style={{
                background: '#242424',
                height: '480px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                margin: '0 10px',
                borderRadius: '15px',
                padding: '30px 20px',
                boxSizing: 'border-box',
                transition: 'transform 0.3s ease',
              }}>
                <img
                  src={novedad.imagen}
                  alt={novedad.nombre}
                  style={{
                    borderRadius: '15px',
                    width: '100%',
                    maxWidth: '320px',
                    height: '240px',
                    objectFit: 'cover',
                    marginBottom: '20px',
                  }}
                />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#eeeeeeff', marginBottom: '10px', textAlign: 'center' }}>
                  {novedad.nombre}
                </h3>
                <p style={{ fontSize: '1rem', color: '#cacacaff', textAlign: 'center', lineHeight: '2' }}>
                  {novedad.descripcion}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Novedades;