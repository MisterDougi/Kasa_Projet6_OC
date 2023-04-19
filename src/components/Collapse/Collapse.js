import { useState } from "react";
import Arrow from "../../assets/leftArrow.svg";

export default function Collapse(data) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  function toggleCollapsed() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div onClick={toggleCollapsed} className={data.widthClass}>
      <div className="infoCollapse">
        <h3>{data.title}</h3>
        <img
          src={Arrow}
          className={isCollapsed ? null : "rotateArrowReverse"}
          alt="flèches"
        />
      </div>

      {!isCollapsed && (
        <div>
          {typeof data.content === "string" ? (
            <p>{data.content}</p>
          ) : Array.isArray(data.content) ? (
            <ul>
              {data.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      )}
    </div>
  );
}
