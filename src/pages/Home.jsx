import React from "react";
import HeroSection from "../components/HeroSection";
import MainSection from "../components/MainSection";

const Home = () => {
  return (
    <main className="container">
      <section className="py-5">
        <>
          <HeroSection />

          <MainSection />
        </>
      </section>
    </main>
  );
};

export default Home;
