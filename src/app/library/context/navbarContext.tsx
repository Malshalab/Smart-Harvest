"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

// Navbar context type
interface NavbarContextType {
  anchorEl: HTMLElement | null;
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
}

// Create the context
export const NavbarContext = createContext<NavbarContextType | undefined>(
  undefined
);

// Navbar provider component
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
