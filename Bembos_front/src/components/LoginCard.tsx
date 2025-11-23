// components/LoginCard.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from '../services/auth';
import type { LoginRequest } from '../interfaces/user';
import "../styles/Login.css";

export default function LoginCard() {
  // Nota: Renombrados a 'correo' y 'contraseña' para coincidir con la interfaz LoginRequest
  const [correo, setCorreo] = useState<string>(""); 
  const [contraseña, setContraseña] = useState<string>(""); 
  const [showPass, setShowPass] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(null);

    const credentials: LoginRequest = { correo, contraseña };
    
    try {
      // LLAMADA AL API GATEWAY a través del servicio
      const responseData = await loginUser(credentials); 
      
      console.log("Login exitoso. Tipo:", responseData.type);

      // 1. Guardar el token (ejemplo)
      localStorage.setItem('authToken', responseData.token);
      
      // 2. Redirigir según el tipo de usuario
      if (responseData.type === "worker") {
          navigate("/loginSistema");
      } else {
          navigate("/home");
      }
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      console.error("Error al iniciar sesión:", errorMessage);
      setError(errorMessage);
    }
  };


  return (
    <div className="login-card">
      <h2 className="login-title">INICIAR SESIÓN</h2>

      {/* EMAIL */}
      <label>Correo electrónico *</label>
      <input
        type="email"
        placeholder="correo@ejemplo.com"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />

      {/* PASSWORD */}
      <label>Contraseña *</label>
      <div className="password-container">
        <input
          type={showPass ? "text" : "password"}
          placeholder="********"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
        <span
          className="toggle-pass"
          onClick={() => setShowPass(!showPass)}
        >
          👁
        </span>
      </div>
      
      {/* Mensaje de Error */}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      {/* SUBMIT */}
      <button className="btn-login" onClick={handleLogin}>
        Iniciar sesión
      </button>
    </div>
  );
}