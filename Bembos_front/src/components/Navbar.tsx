import "../styles/NavBar.css";
import logo from "../assets/logo.svg";
import { FaStore, FaTag, FaBars, FaSearch, FaPhone, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";   // ⭐ AGREGADO

export default function Navbar() {
    const navigate = useNavigate();

    // ⭐ AGREGADO: estados para controlar si se oculta o no
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    // ⭐ AGREGADO: detectar scroll
    useEffect(() => {
        function handleScroll() {
            const currentY = window.scrollY;

            if (currentY > lastScrollY && currentY > 80) {
                setHidden(true);  // Ocultar navbar al bajar
            } else {
                setHidden(false); // Mostrar navbar al subir
            }

            setLastScrollY(currentY);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header className={`navbar ${hidden ? "navbar-hidden" : ""}`}>   {/* ⭐ AGREGADO */}
        
            {/* LOGO */}
            <div className="logoContainer" onClick={() => navigate("/home")}>
                <img src={logo} alt="Bembos logo" className="logo" />
            </div>

            {/* LINKS */}
            <nav className="links">
                <a onClick={() => navigate("/menu")}><FaBars /> MENÚ</a>
                <a onClick={() => navigate("/promos")}><FaTag /> PROMOS EXCLUSIVAS</a>
                <a onClick={() => navigate("/cupones")}><FaTag /> CUPONES</a>
                <a onClick={() => navigate("/locales")}><FaStore /> LOCALES</a>
            </nav>

            {/* SEARCH */}
            <div className="search" onClick={() => navigate("/buscar")}>
                <FaSearch />
            </div>

            {/* CALL */}
            <div className="call clickable" onClick={() => navigate("/contacto")}>
                <FaPhone />
                <div>
                    <span>Llámanos</span>
                    <p className="callNumber">0149-1919</p>
                </div>
            </div>

            {/* USER */}
            <div className="user clickable" onClick={() => navigate("/login")}>
                <FaUser />
                <div>
                    <span>Hola,</span>
                    <p className="loginText">Iniciar Sesión</p>
                </div>
            </div>

            {/* CART */}
            <button className="cart" onClick={() => navigate("/carrito")}>S/ 0.00</button>

        </header>
    );
}
