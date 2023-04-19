import React, { useState } from "react";

export default function BannerLog({ dataLog }) {
  const [slider, updateSlider] = useState(0);
  const pictures = dataLog.pictures;
  const prevNext = (slider, change) => {
    if (change === "prev") {
      slider === 0
        ? updateSlider(pictures.length - 1)
        : updateSlider(slider - 1);
    } else {
      slider === pictures.length - 1
        ? updateSlider(0)
        : updateSlider(slider + 1);
    }
  };
  return (
    <div>
      <div className="sliderDisplay">
        {pictures.length !== 1 ? (
          <div>
            <button
              className="prev"
              onClick={() => prevNext(slider, "prev")}
            ></button>
            <button
              className="next"
              onClick={() => prevNext(slider, "next")}
            ></button>
            <p className="compteur">
              {slider + 1}/{pictures.length}
            </p>
          </div>
        ) : (
          <div></div>
        )}
        <img
          src={pictures[slider]}
          alt="Différentes photos des appartements en location"
        />
      </div>
    </div>
  );
}
