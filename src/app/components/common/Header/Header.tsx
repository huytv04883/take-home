import Image from "next/image";
import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-header">
        <Image
          src="/logo.png"
          alt="Take home logo"
          width={260}
          height={135}
          priority
        />
      </div>
      <div className="nav-header">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
