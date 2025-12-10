import Carousel from "../components/Carousel.jsx";
import ShapeDivider from "../components/ShapeDivider.jsx";
import ContactoHP from "../components/ContactoHP.jsx";

const HomePage = ({ setFading }) => (
  <div style={{
          backgroundColor: "#161616ff"}}>
    <div className="h-screen flex flex-col">
      {/* Puedes pasar setFading si Carousel lo necesita */}
      <div className="flex-1 relative">
        <Carousel setFading={setFading} />
        <ShapeDivider />
      </div>
    </div>
    {/* <Novedades /> */}
    <ContactoHP/>
  </div>
);

export default HomePage;