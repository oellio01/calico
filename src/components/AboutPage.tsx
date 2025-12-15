import React from "react";
import { useNavigate } from "react-router-dom";
import "./Page.scss";

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <button className="back" onClick={() => navigate("/menu")}>
        ← back
      </button>
      <div className="content">
        <h1>about</h1>
        <p>A cozy space for creativity and connection.</p>
      </div>
    </div>
  );
};

export default AboutPage;

