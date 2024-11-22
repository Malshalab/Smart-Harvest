"use client";

import React, { ReactNode } from "react";
import { NavbarContextProvider } from "../context/navBarContext.jsx";

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  return <NavbarContextProvider>{children}</NavbarContextProvider>;
};