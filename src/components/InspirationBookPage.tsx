import React from "react";
import { useNavigate } from "react-router-dom";
import "./Page.scss";

const InspirationBookPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <button className="back" onClick={() => navigate("/menu")}>
        ← back
      </button>
      <div className="content">
        <h1>inspiration book</h1>
        <p>A collection of ideas and moments.</p>
      </div>
    </div>
  );
};

export default InspirationBookPage;

