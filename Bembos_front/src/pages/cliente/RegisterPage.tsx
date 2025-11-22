// pages/RegisterPage.jsx
import "../../styles/Register.css";
import Navbar from "../../components/Navbar";

export default function RegisterPage() {
  return (
    <>
    <Navbar></Navbar>
    <div className="register-page">
      <h2 className="register-title">
        CREA TU CUENTA EN BEMBOS Y HAZ TUS PEDIDOS
      </h2>

      <div className="section">
        <h3 className="section-title">Información personal</h3>

        {/* NOMBRE */}
        <label>Nombre *</label>
        <input type="text" placeholder="Ej. Camila" />

        {/* APELLIDOS */}
        <label>Apellidos *</label>
        <input type="text" placeholder="Ej. Torres" />

        {/* DOCUMENTO */}
        <div className="row">
          <div className="col">
            <label>Tipo de Documento *</label>
            <select>
              <option>Por favor Selecc</option>
              <option>DNI</option>
              <option>Carnet de Extranjería</option>
              <option>Pasaporte</option>
            </select>
          </div>

          <div className="col">
            <label>Documento *</label>
            <input type="text" placeholder="Selecciona un tipo de documento" />
          </div>
        </div>

        {/* TELEFONO */}
        <label>Número de teléfono *</label>
        <input type="text" placeholder="" />

        {/* FECHA */}
        <label>Fecha de nacimiento *</label>
        <input type="date" />
      </div>

      <div className="section">
        <h3 className="section-title">Información de inicio de sesión</h3>

        {/* CORREO */}
        <label>Correo electrónico *</label>
        <input type="email" placeholder="Ej. nombre@gmail.com" />

        {/* PASSWORD */}
        <label>Contraseña *</label>
        <input type="password" placeholder="***********" />

        {/* CONFIRM PASSWORD */}
        <label>Confirmar contraseña *</label>
        <input type="password" placeholder="***********" />
      </div>

      {/* BOTÓN FINAL */}
      <button className="btn-register">Crear cuenta</button>
    </div>
    </>
  );
}
