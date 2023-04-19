import React from "react";

export default function TitreLoc({ dataTitle, dataLocation }) {
  return (
    <div className="titleLocation">
      <h2>{dataTitle}</h2>
      <p>{dataLocation}</p>
    </div>
  );
}
