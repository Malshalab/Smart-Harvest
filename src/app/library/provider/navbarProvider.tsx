"use client";

import React, { ReactNode } from "react";
import { NavbarContextProvider } from "@/app/library/context/navbarContext";

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  return <NavbarContextProvider>{children}</NavbarContextProvider>;
};
