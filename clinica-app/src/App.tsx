import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LaClinica from "./components/LaClinica";
import Equipo from "./components/Equipo";
import Filosofia from "./components/Filosofia";
import Instalaciones from "./components/Instalaciones";
import Tratamientos from "./components/Tratamientos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LaClinica />
        <Equipo />
        <Filosofia />
        <Instalaciones />
        <Tratamientos />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
