import Navbar from "../../components/Navbar";
import  "../../styles/HomePage.css";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="container">
        <h1>Bienvenido a Bembos</h1>
        <p>Esta es la HomePage de prueba para validar el Navbar.</p>

        <button className="button">Ver Menú</button>
      </main>
    </>
  );
}
