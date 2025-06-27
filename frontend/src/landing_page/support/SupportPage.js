import React from "react";
import { Hero } from "./Hero";
import { CreateTicket } from "./CreateTicket";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

export const SupportPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CreateTicket />
      <Footer />
    </>
  );
};
