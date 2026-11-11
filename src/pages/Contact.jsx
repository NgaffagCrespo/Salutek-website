import { useEffect, useState } from "react";
import { SITE, CITIES } from "../data.js";
import WhatsAppIcon from "../components/WhatsAppIcon.jsx";

const BESOINS = [
  "Achat d'un onduleur", "Achat de batteries", "Installation", "Maintenance / contrat d'entretien",
  "Dépannage / réparation d'onduleur", "Dépannage / remplacement de batteries", "Solution solaire ou hybride", "Autre demande",
];

export default function Contact() {
  useEffect(() => { document.title = `Contact et devis | ${SITE.name}`; }, []);
  const [f, setF] = useState({ nom: "", tel: "", ville: CITIES[0], besoin: BESOINS[0], message: "" });
  const [envoye, setEnvoye] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  // Le message est envoyé sur WhatsApp : aucun serveur n'est nécessaire.
  const envoyer = (e) => {
    e.preventDefault();
    const msg =
      `Bonjour, je souhaite un devis.\n` +
      `Nom : ${f.nom}\nTéléphone : ${f.tel}\nVille : ${f.ville}\nBesoin : ${f.besoin}\n` +
      (f.message ? `Message : ${f.message}` : "");
    const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
    const w = window.open(url, "_blank");
    if (!w) window.location.href = url; // si le navigateur bloque la nouvelle fenêtre
    setEnvoye(true);
  };

  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>Parlons de votre besoin</h1>
          <p className="lead">Décrivez-nous votre situation, nous vous répondons rapidement avec une solution adaptée.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <h2>Nos coordonnées</h2>
            <ul className="infos">
              <li>📞 <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a></li>
              <li className="wa-line"><WhatsAppIcon badge size={24} /> <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp : {SITE.phone}</a></li>
              <li>✉️ <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li>📍 {SITE.address}</li>
              <li>🕗 {SITE.hours}</li>
            </ul>
            <p>Nous intervenons partout au Cameroun, en ville comme en zone éloignée.</p>
          </div>

          <form className="card form" onSubmit={envoyer}>
            <label>Nom complet
              <input required value={f.nom} onChange={set("nom")} placeholder="Votre nom" />
            </label>
            <label>Téléphone
              <input required type="tel" value={f.tel} onChange={set("tel")} placeholder="6XX XX XX XX" />
            </label>
            <label>Ville
              <select value={f.ville} onChange={set("ville")}>
                {CITIES.map((c) => <option key={c}>{c}</option>)}
                <option>Autre ville</option>
              </select>
            </label>
            <label>Votre besoin
              <select value={f.besoin} onChange={set("besoin")}>
                {BESOINS.map((b) => <option key={b}>{b}</option>)}
              </select>
            </label>
            <label>Message
              <textarea rows="4" value={f.message} onChange={set("message")} placeholder="Puissance souhaitée, appareils à protéger, problème rencontré..." />
            </label>
            <button className="btn btn-wa" type="submit"><WhatsAppIcon size={20} /> Envoyer ma demande sur WhatsApp</button>
            {envoye && (
              <p className="sent">
                ✅ Votre message est prêt dans WhatsApp. Appuyez sur « Envoyer » pour le transmettre à {SITE.name}.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
