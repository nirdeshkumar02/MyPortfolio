import React from "react";
import Title from "../components/Title/title";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Title />
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
