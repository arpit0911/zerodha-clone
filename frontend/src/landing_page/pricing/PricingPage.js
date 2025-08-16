import React from "react";
import { Hero } from "./Hero";
import { Brokerage } from "./Brokerage";
import { OpenAccount } from "../OpenAccount";
import { useAuth } from "../../Auth/AuthProvider";
export const PricingPage = () => {
  const { user } = useAuth();
  return (
    <>
      <Hero />
      {!user && <OpenAccount />}
      <Brokerage />
    </>
  );
};
