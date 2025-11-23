// pages/RegisterPage.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Register.css";
import Navbar from "../../components/Navbar";

// Importar interfaces y servicio
import type { RegisterClientRequest } from '../../interfaces/user';
import { registerClient } from '../../services/auth';

export default function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
    documento: "", // Número del documento
    numero: "", // Número de teléfono
    fecha_nacimiento: "",
    contraseña: "",
    confirmarContraseña: "", // Estado extra para validación
    tipoDocumento: "DNI", // Estado para el select
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setError(null);

    if (formData.contraseña !== formData.confirmarContraseña) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    if (formData.contraseña.length < 6) { // Validación simple
        setError("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    // Construir el objeto de petición (usando solo los campos de la Interfaz)
    const clientData: RegisterClientRequest = {
      nombre: formData.nombre,
      apellidos: formData.apellidos,
      correo: formData.correo,
      documento: formData.documento,
      numero: formData.numero,
      fecha_nacimiento: formData.fecha_nacimiento,
      contraseña: formData.contraseña,
    };

    setLoading(true);

    try {
      // LLAMADA AL API GATEWAY a través del servicio
      await registerClient(clientData);

      alert("¡Cuenta creada exitosamente! Por favor, inicia sesión.");
      navigate("/login"); 
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocurrió un error inesperado.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="register-page">
        <h2 className="register-title">
          CREA TU CUENTA EN BEMBOS Y HAZ TUS PEDIDOS
        </h2>

        <div className="section">
          <h3 className="section-title">Información personal</h3>

          {/* NOMBRE */}
          <label>Nombre *</label>
          <input type="text" placeholder="Ej. Camila" name="nombre" value={formData.nombre} onChange={handleChange} />

          {/* APELLIDOS */}
          <label>Apellidos *</label>
          <input type="text" placeholder="Ej. Torres" name="apellidos" value={formData.apellidos} onChange={handleChange} />

          {/* DOCUMENTO */}
          <div className="row">
            <div className="col">
              <label>Tipo de Documento *</label>
              <select name="tipoDocumento" value={formData.tipoDocumento} onChange={handleChange}>
                <option value="DNI">DNI</option>
                <option value="Carnet de Extranjería">Carnet de Extranjería</option>
                <option value="Pasaporte">Pasaporte</option>
              </select>
            </div>
            <div className="col">
              <label>Documento *</label>
              <input type="text" placeholder="Número de documento" name="documento" value={formData.documento} onChange={handleChange} />
            </div>
          </div>

          {/* TELEFONO */}
          <label>Número de teléfono *</label>
          <input type="text" placeholder="" name="numero" value={formData.numero} onChange={handleChange} />

          {/* FECHA */}
          <label>Fecha de nacimiento *</label>
          <input type="date" name="fecha_nacimiento" value={formData.fecha_nacimiento} onChange={handleChange} />
        </div>

        <div className="section">
          <h3 className="section-title">Información de inicio de sesión</h3>

          {/* CORREO */}
          <label>Correo electrónico *</label>
          <input type="email" placeholder="Ej. nombre@gmail.com" name="correo" value={formData.correo} onChange={handleChange} />

          {/* PASSWORD */}
          <label>Contraseña *</label>
          <input type="password" placeholder="***********" name="contraseña" value={formData.contraseña} onChange={handleChange} />

          {/* CONFIRM PASSWORD */}
          <label>Confirmar contraseña *</label>
          <input type="password" placeholder="***********" name="confirmarContraseña" value={formData.confirmarContraseña} onChange={handleChange} />
        </div>

        {/* Mensaje de Error */}
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        
        {/* BOTÓN FINAL */}
        <button className="btn-register" onClick={handleSubmit} disabled={loading}>
          {loading ? "Creando Cuenta..." : "Crear cuenta"}
        </button>
      </div>
    </>
  );
}