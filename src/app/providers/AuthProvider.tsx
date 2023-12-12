"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { IChildrenProps } from "../types/auth.type";

const AuthProvider: React.FC<IChildrenProps> = ({
  children,
}: IChildrenProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
