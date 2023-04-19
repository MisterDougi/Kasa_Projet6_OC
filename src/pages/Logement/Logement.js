import React from "react";
import BannerLog from "../../components/BannerLog/BannerLog";
import InfosLog from "../../components/InfosLog/InfosLog";
import { Navigate, useParams } from "react-router-dom";
import data from "../../data.json";

export default function Logement() {
  const { id } = useParams();
  const infoLog = data.find((obj) => obj.id === id);
  if (infoLog) {
    return (
      <div>
        <div>
          <BannerLog dataLog={infoLog} />
          <InfosLog dataLog={infoLog} />
        </div>
      </div>
    );
  } else {
    return <Navigate to="/404" />;
  }
}
