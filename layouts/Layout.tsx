import React from "react";
import { Header, Footer } from "./";
import ILayoutProps from "@/types/ILayoutProps";

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
