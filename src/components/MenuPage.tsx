import React from "react";
import { useNavigate } from "react-router-dom";
import frame6 from "../assets/inspiration-book/Frame 6.png";
import group660 from "../assets/inspiration-book/Group 660.png";
import group661 from "../assets/inspiration-book/Group 661.png";
import vector from "../assets/inspiration-book/Vector.png";
import calicoLogo from "../assets/calico-logo.png";
import "./MenuPage.scss";

const MenuPage: React.FC = () => {
  const navigate = useNavigate();

  const images = [
    { src: frame6, alt: "Inspiration 1" },
    { src: group660, alt: "Inspiration 2" },
    { src: group661, alt: "Inspiration 3" },
    { src: vector, alt: "Inspiration 4" },
  ];

  return (
    <div className="menu-page">
      <img src={calicoLogo} alt="Calico" className="header-logo" />

      <section className="inspiration-section">
        <h2>
          Calico is a creative clubhouse where people come together to make,
          share, and learn in unexpected ways. There's always something
          happening. Just come along and you'll start happening too.
        </h2>
        <div className="picture-wall">
          {images.map((image, index) => (
            <div key={index} className="frame">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <a
          href="https://www.instagram.com/calico_london/"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </a>
      </footer>
    </div>
  );
};

export default MenuPage;
