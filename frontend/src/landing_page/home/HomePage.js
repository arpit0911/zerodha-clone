import React from "react";
import { Stats } from "./Stats";
import { Pricing } from "./Pricing";
import { Education } from "./Education";
import { Hero } from "./Hero";
import { Awards } from "./Awards";
import { OpenAccount } from "../OpenAccount";
import { useAuth } from "../../Auth/AuthProvider";
// import { Footer } from "../Footer";
// import { Navbar } from "../Navbar";

export const HomePage = () => {
  const auth = useAuth();
  console.log("Auth state->", auth);
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
};
