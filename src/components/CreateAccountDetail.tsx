// components/CreateAccountDetail.jsx
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

export default function CreateAccountDetail() {
  const navigate = useNavigate();
  return (
    <div className="create-account-container">
      <h2 className="create-title">CREAR CUENTA</h2>

      <p className="description">Crea una y aprovecha los beneficios:</p>

      <ul className="benefits">
        <li>Realiza tus compras de manera más ágil.</li>
        <li>Guarda múltiples direcciones de envío y facturación.</li>
        <li>Realiza el seguimiento a tus compras y revisa tus pedidos realizados.</li>
        <li>Haz una lista de productos favoritos.</li>
      </ul>

      <button className="btn-create" onClick={() => navigate("/register")}>
        Crear cuenta
      </button>
    </div>
  );
}
