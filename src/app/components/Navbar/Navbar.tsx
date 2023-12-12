"use client";

import React, { useState } from "react";
import { getDataAptosWallet } from "../../utils/connect";
import Button from "../Button/Button";
import "./Navbar.css";
import { shortenHex } from "../../utils/shortenHex";
import Image from "next/image";

interface Data {
  address: string;
  publicKey: string;
}

interface AptosWalletData {
  response: Data;
  account: Data;
}

const Navbar = () => {
  const [dataAptosWallet, setData] = useState<AptosWalletData | undefined>(
    undefined
  );

  const handleClick = async () => {
    const data = await getDataAptosWallet();
    if (data) {
      setData(data);
    }
  };

  return (
    <nav className="nav">
      <ul className="menu-list">
        <li className="menu-item">
          <a href={"/products"}>Products</a>
        </li>
        <li className="menu-item">
          <a href={"/protocols"}>Protocols</a>
        </li>
        <li className="menu-item">
          <a href={"/tokens"}>Tokens</a>
        </li>
        <li className="menu-item">
          <a href={"/use-cases"}>Use Cases</a>
        </li>
      </ul>
      <Button
        size="large"
        className={`btn-connect-wallet ${dataAptosWallet ? "active" : null}`}
        onClick={() => handleClick()}
      >
        {dataAptosWallet ? (
          <>
            <Image
              src="/petra.png"
              alt="Petra image"
              width={27}
              height={27}
              priority
            />
            {shortenHex(dataAptosWallet.account.address)}
          </>
        ) : (
          "Connect Wallet →"
        )}
      </Button>
    </nav>
  );
};

export default Navbar;
