import React from "react";

export default function Banner({ from, texte, src, alt }) {
  return (
    <div className={from === "Home" ? "banner heightHome" : "banner"}>
      <div className="imgBanner">
        <img src={src} alt={alt} />
      </div>
      <div className="bannerText">
        <p>{texte}</p>
      </div>
    </div>
  );
}
