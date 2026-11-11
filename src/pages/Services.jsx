import { useEffect } from "react";
import { Link } from "react-router-dom";
import Photo from "../components/Photo.jsx";
import { SERVICES, SITE } from "../data.js";

const ETAPES = [
  ["1", "Écoute et diagnostic", "Nous comprenons votre besoin et évaluons votre installation."],
  ["2", "Devis clair", "Une proposition détaillée, adaptée à votre budget."],
  ["3", "Intervention soignée", "Installation, réparation ou entretien par nos techniciens."],
  ["4", "Suivi", "Nous restons disponibles après notre passage."],
];

export default function Services() {
  useEffect(() => { document.title = `Nos services | ${SITE.name}`; }, []);
  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>Des services pensés pour votre tranquillité</h1>
          <p className="lead">
            Onduleurs, batteries, installation, maintenance et dépannage : un seul interlocuteur pour que votre
            énergie reste stable, sur tout le territoire camerounais.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {SERVICES.map((s, i) => (
            <article className={`split row ${i % 2 ? "reverse" : ""}`} id={s.id} key={s.id}>
              <Photo src={s.image} alt={s.title} />
              <div>
                <h2>{s.title}</h2>
                <p>{s.text}</p>
                <ul className="ticks">{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <Link to="/contact" className="btn btn-outline">Demander un devis</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2 className="center">Comment ça se passe ?</h2>
          <div className="grid g4 steps">
            {ETAPES.map(([n, t, d]) => (
              <div className="card" key={n}>
                <div className="num">{n}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container center">
          <h2>Un projet, une panne, une question ?</h2>
          <p>Notre équipe vous répond et vous conseille gratuitement.</p>
          <Link to="/contact" className="btn">Nous contacter</Link>
        </div>
      </section>
    </>
  );
}
