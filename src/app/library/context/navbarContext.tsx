"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface NavbarContextType {
  anchorEl: HTMLElement | null;
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
}

export const NavbarContext = createContext<NavbarContextType | undefined>(
  undefined
);

export const NavbarContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <NavbarContext.Provider value={{ anchorEl, setAnchorEl }}>
      {children}
    </NavbarContext.Provider>
  );
};
