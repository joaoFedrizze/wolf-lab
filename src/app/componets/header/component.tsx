"use client";

import "./style.scss";
import Image from "next/image";
import dogTrack from "../../assets/img/dog-track.png";

export default function Header() {
  return (
    <header className="main-header">
      <div className="main-header-container">
        <div className="main-header-logo">
          <Image src={dogTrack} alt="" />

          <p>WOLF LAB</p>
        </div>

        <nav className="main-header-menu">
          <ul>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Versões</a>
            </li>
            <li>
              <a href="#">Dollor sit</a>
            </li>
            <li>
              <a href="#">Amet</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
