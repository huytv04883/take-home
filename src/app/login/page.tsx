"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "../components/Button/Button";
import InputBase from "../components/InputBase/InputBase";
import "./Login.css";
import Image from "next/image";

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="login-page">
      <div className="section explore">
        <h2>
          Explore and Earn on
          <Image
            src="/logo.png"
            alt="Take home logo"
            width={135}
            height={83}
            priority
          />
        </h2>
        <div className="box-right">
          <Image
            src="/logo.png"
            alt="Take home logo"
            width={135}
            height={83}
            priority
          />
          <p>test Front end interview 1</p>
        </div>
      </div>
      <div className="section sign-up">
        <InputBase className="input-signup" />
        <Button
          onClick={(e) => signIn("google")}
          size="large"
          className="btn-signup"
        >
          Sign up
        </Button>
      </div>
      <div className="section action-login">
        <Button
          onClick={(e) => signIn("google")}
          size="large"
          className="btn-login"
        >
          Log in
        </Button>
        <Button
          onClick={(e) => signIn("google")}
          size="large"
          className="btn-launch-app"
        >
          Launch App
        </Button>
      </div>
      <div className="section pricing">
        <div className="pricing-item">
          <p>$1.80B</p>
          <span>30 Day Volume</span>
        </div>
        <div className="pricing-item">
          <p>$0.84B</p>
          <span>Managed on testX.fi</span>
        </div>
        <div className="pricing-item">
          <p>$21.43M</p>
          <span>Total Collateral Automated</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
