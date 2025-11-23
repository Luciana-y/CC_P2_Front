// pages/StartPage.jsx
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/HomePage.css";

export default function StartPage() {
  const navigate = useNavigate();

function handleContinue(selectedRole: "cliente" | "trabajador") {
  if (selectedRole === "cliente") {
    navigate("/home");
  }
  if (selectedRole === "trabajador") {
    navigate("/loginSistema");
  }
}

  return (
    <>
    <Navbar />
      <main className="container">
        <h1>Bienvenido al Sistema de Bembos</h1>
        <p>Antes de empezar, selecciona tu rol:</p>

        <div className="role-buttons">
          <button
            className="button"
            onClick={() => handleContinue("cliente")}
          >
            Cliente
          </button>

          <button
            className="button"
            onClick={() => handleContinue("trabajador")}
          >
            Trabajador
          </button>
        </div>
      </main>
    </>
  );
}
