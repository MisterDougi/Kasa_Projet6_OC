import React from "react";
export default function NotFound() {
  return (
    <div>
      <div className="blocNotFound">
        <p className="bloc404">404</p>
        <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <div className="linkRetourAccueil">
        <a href="http://localhost:3000/">Retourner sur la page d'accueil</a>
      </div>
    </div>
  );
}
