// pages/LoginPage.jsx
import LoginCard from "../../components/LoginCard";
import CreateAccountDetail from "../../components/CreateAccountDetail";
import "../../styles/Login.css";
import Navbar from "../../components/Navbar";

export default function LoginPage() {
  return (
    <>
    <Navbar></Navbar>
    <div className="login-page">
      <div className="login-left">
        <LoginCard />
      </div>

      <div className="login-right">
        <CreateAccountDetail />
      </div>
    </div>
    </>
  );
}
