import React from "react";

export default function Host({ dataHost }) {
  return (
    <div className="hostStyle">
      <p>{dataHost.name}</p>
      <img src={dataHost.picture} alt={dataHost.name} />
    </div>
  );
}
