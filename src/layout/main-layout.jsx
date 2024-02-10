import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
export const MainLayout = ({children}) => {
  return (
    <>
      <div className="wrapper">
        <header>
          <Header />
        </header>
        <main>{children}</main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
