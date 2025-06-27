import React from "react";
import { Hero } from "./Hero";
import { Brokerage } from "./Brokerage";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

export const PricingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Brokerage />
      <Footer />
    </>
  );
};
