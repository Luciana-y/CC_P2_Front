import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/cliente/RegisterPage";
import HomePage from "./pages/cliente/HomePage";
import LoginPage from "./pages/cliente/LoginPage";
import StartPage from "./pages/StartPage";
import LoginSistema from "./pages/trabajdor/LoginSistema";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />

        {/* Rutas para clientes */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Rutas para trabajadores */}
        <Route path="/loginSistema" element={<LoginSistema/>} />
      </Routes>
    </BrowserRouter>
  );
}
