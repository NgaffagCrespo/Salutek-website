import { useState } from "react";

// Affiche /images/<src>. Si le fichier n'existe pas encore, un cadre de remplacement s'affiche.
export default function Photo({ src, alt, className = "" }) {
  const [ok, setOk] = useState(true);
  return (
    <div className={`photo ${className}`}>
      {ok ? (
        <img src={`${import.meta.env.BASE_URL}images/${src}`} alt={alt} loading="lazy" onError={() => setOk(false)} />
      ) : (
        <span>Image à ajouter : {src}</span>
      )}
    </div>
  );
}
