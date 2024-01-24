import React from "react";
import Hero from "./Hero/Hero";
import Schedule from "./Schedule/Schedule";
import Sections from "./Sections/Sections";

function Home() {
  return (
    <main id="top">
      <Hero />
      <Schedule />
      <Sections />
    </main>
  );
}

export default Home;
