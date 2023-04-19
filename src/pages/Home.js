import React from "react";
import Banner from "../components/Banner/Banner.js";
import BannerImg from "../assets/home_banner.png";
import ListCards from "../components/ListCards/ListCards.js";

export default function Home() {
  return (
    <div>
      <Banner
        from="Home"
        src={BannerImg}
        texte="Chez vous, partout et ailleurs"
        alt="Photo de falaises au bord de l'eau"
      />
      <ListCards />
    </div>
  );
}
