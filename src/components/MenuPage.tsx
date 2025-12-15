import React from "react";
import { useNavigate } from "react-router-dom";
import "./MenuPage.scss";

const MenuPage: React.FC = () => {
  const navigate = useNavigate();

  const mainLinks = [
    { title: "about", path: "/about" },
    { title: "inspiration book", path: "/inspiration-book" },
    { title: "instagram", path: "https://www.instagram.com/calico_london/" },
  ];

  const handleClick = (path: string) => {
    if (path.startsWith("http")) {
      window.open(path, "_blank");
    } else {
      navigate(path);
    }
  };

  return (
    <div className="menu-page">
      <nav className="nav">
        {mainLinks.map((link) => (
          <button
            key={link.title}
            className="nav-link"
            onClick={() => handleClick(link.path)}
          >
            {link.title}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default MenuPage;
