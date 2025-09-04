"use client";

import { createContext, useContext } from "react";
import { toast } from "sonner";

interface AlertContextProps {
  showAlert: (message: string, type?: boolean, duration?: number) => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const showAlert = (message: string, type?: boolean, duration = 4000) => {
    toast(message, {
      duration,
    });
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert deve ser usado dentro de AlertProvider");
  }
  return context;
};
