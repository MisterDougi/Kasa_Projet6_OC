import * as React from "react";
import BannerImg from "../../assets/about_banner.png";
import Banner from "../../components/Banner/Banner.js";
import about from "../../about.json";
import Collapse from "../../components/Collapse/Collapse";

export default function About() {
  return (
    <div>
      <div>
        <Banner src={BannerImg} alt="Photo de paysage de montagnes" />
      </div>
      <div className="collapsesDisplay">
        <Collapse
          widthClass="collapse"
          title="Fiabilité"
          content={about.fiabilite}
        />
        <Collapse
          widthClass="collapse"
          title="Respect"
          content={about.respect}
        />
        <Collapse
          widthClass="collapse"
          title="Service"
          content={about.service}
        />
        <Collapse
          widthClass="collapse"
          title="Sécurité"
          content={about.securite}
        />
      </div>
    </div>
  );
}
