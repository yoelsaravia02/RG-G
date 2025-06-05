import NavBar from "./components/NavBar.jsx";
import Accordion from "./components/Accordion.jsx";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-16 md:h-20"> {/* Alto fijo para el NavBar */}
        <NavBar />
      </div>
      <div className="flex-1">
        <Accordion />
      </div>
    </div>
  );
}

export default App;
