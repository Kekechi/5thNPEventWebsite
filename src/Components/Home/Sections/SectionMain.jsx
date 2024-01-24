import React from "react";
import "./section.scss";

function SectionMain({ particleColor, title }) {
  const particles = [];

  for (let i = 0; i < 20; i++) {
    particles.push(
      <div className="circle-container" key={i}>
        <div className="circle"></div>
      </div>
    );
  }

  return (
    <div className="border section-main">
      <div
        className="section-background"
        style={{ "--particle-color": particleColor }}
      >
        {particles}
      </div>
      <h5 className="text-light text-center mt-3">{title}</h5>
      <p className="text-light mx-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
        nulla labore atque minima magni accusantium rem, dolores autem
        voluptatibus aspernatur quasi inventore laboriosam mollitia repellendus
        incidunt aliquam sunt eaque id.
      </p>
    </div>
  );
}

export default SectionMain;
