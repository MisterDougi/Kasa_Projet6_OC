import React from "react";
import Host from "../Host/Host";
import Rating from "../Rating/Rating";
import Tag from "../Tag/Tag";
import TitreLoc from "../TitreLoc/TitreLoc";
import Collapse from "../Collapse/Collapse";

export default function InfosLog({ dataLog }) {
  const listTags = dataLog.tags.map((item) => <Tag data={item} key={item} />);

  return (
    <div>
      <div className="infosLogementDisplay">
        <div className="titreAndTagDisplay">
          <TitreLoc
            dataTitle={dataLog.title}
            dataLocation={dataLog.location}
            className="titreLocationDisplay"
          />
          <div className="tagDisplay">{listTags}</div>
        </div>
        <div className="hostAndRatingDisplay">
          <Host dataHost={dataLog.host} className="hostDisplay" />
          <Rating rating={dataLog.rating} />
        </div>
      </div>
      <div className="collapseLogementDisplay">
        <Collapse
          widthClass="collapse"
          title="Description"
          content={dataLog.description}
        />
        <Collapse
          widthClass="collapse"
          title="Équipements"
          content={dataLog.equipments}
        />
      </div>
    </div>
  );
}
