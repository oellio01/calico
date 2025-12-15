import React from "react";
import { useNavigate } from "react-router-dom";
import calicoLogo from "../assets/calico-logo.png";
import "./LandingPage.scss";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page" onClick={() => navigate("/menu")}>
      <img src={calicoLogo} alt="Calico" className="logo" />
    </div>
  );
};

export default LandingPage;
