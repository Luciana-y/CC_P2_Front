// components/LoginCard.jsx
import { useState } from "react";
import "../styles/Login.css";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="login-card">
      <h2 className="login-title">INICIAR SESIÓN</h2>

      {/* EMAIL */}
      <label>Correo electrónico *</label>
      <input
        type="email"
        placeholder="correo@ejemplo.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* PASSWORD */}
      <label>Contraseña *</label>
      <div className="password-container">
        <input
          type={showPass ? "text" : "password"}
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span
          className="toggle-pass"
          onClick={() => setShowPass(!showPass)}
        >
          👁
        </span>
      </div>

      {/* SUBMIT */}
      <button className="btn-login">
        Iniciar sesión
      </button>
    </div>
  );
}
