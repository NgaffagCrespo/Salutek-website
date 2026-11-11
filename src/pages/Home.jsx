import { useEffect } from "react";
import { Link } from "react-router-dom";
import Photo from "../components/Photo.jsx";
import { SERVICES, CITIES, SITE } from "../data.js";

const ATOUTS = [
  ["🛡️", "Matériel fiable", "Des onduleurs et des batteries choisis pour leur robustesse et leur durée de vie."],
  ["🔧", "Experts qualifiés", "Des techniciens expérimentés, à l'écoute, qui expliquent chaque intervention."],
  ["🇨🇲", "Partout au Cameroun", "De Douala à Maroua, nous vous accompagnons où que vous soyez."],
  ["⏱️", "Réactivité", "Devis rapide, intervention soignée et suivi après chaque passage."],
];

export default function Home() {
  useEffect(() => { document.title = `${SITE.name} | Onduleurs au Cameroun`; }, []);
  return (
    <>
      <section className="hero">
        <div className="container hero-in">
          <div>
            <span className="tag">Onduleurs · Batteries · Maintenance</span>
            <h1>L'énergie qui ne s'arrête jamais, partout au Cameroun.</h1>
            <p className="lead">
              Un onduleur de qualité, des batteries en pleine forme et un entretien régulier : c'est la tranquillité
              retrouvée. Vos appareils sont protégés, votre activité continue, même quand le courant vacille.
            </p>
            <div className="actions">
              <Link to="/contact" className="btn">Demander un devis gratuit</Link>
              <Link to="/services" className="btn btn-light">Découvrir nos services</Link>
            </div>
          </div>
          <Photo src="hero.jpg" alt="Onduleur en ligne à écran LCD, prêt à protéger vos équipements" className="hero-img" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Pourquoi nous faire confiance ?</h2>
          <p className="sub">Parce qu'une coupure ne devrait jamais coûter une journée de travail.</p>
          <div className="grid g4">
            {ATOUTS.map(([icon, title, text]) => (
              <div className="card" key={title}>
                <div className="icon">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <Photo src="a-propos.jpg" alt="Notre stock de batteries, prêtes à la livraison" />
          <div>
            <h2>Votre partenaire énergie au quotidien</h2>
            <p>
              Délestages, baisses de tension, pannes soudaines : nous savons ce que cela représente pour une famille,
              un commerce ou une entreprise. Notre mission est simple : vous offrir une alimentation stable et sûre,
              grâce à des équipements adaptés et un service de proximité.
            </p>
            <p>
              Du premier conseil à la maintenance régulière, nous restons à vos côtés pour que votre installation
              fonctionne longtemps, sans mauvaise surprise. Un stock disponible, des équipements éprouvés et un suivi sérieux.
            </p>
            <Link to="/contact" className="btn">Parler à un conseiller</Link>
          </div>
        </div>
      </section>

      <section className="section batteries">
        <div className="container split">
          <div>
            <span className="tag">Nouveau : batteries</span>
            <h2>Des batteries qui tiennent la distance</h2>
            <p>
              L'onduleur est le cœur de votre installation, la batterie en est le souffle. Nous vous proposons
              un large choix de batteries neuves, et nous intervenons rapidement quand la vôtre faiblit.
            </p>
            <ul className="ticks">
              <li>Vente de batteries gel, AGM, plomb et lithium</li>
              <li>Test de charge et diagnostic gratuit de l'état de santé</li>
              <li>Dépannage et remplacement sur site, partout au Cameroun</li>
            </ul>
            <div className="actions">
              <Link to="/contact" className="btn">Demander une batterie</Link>
              <Link to="/services#batteries" className="btn btn-outline">En savoir plus</Link>
            </div>
          </div>
          <Photo src="batterie.jpg" alt="Gamme de batteries étanches sans entretien" />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Nos services</h2>
          <p className="sub">Tout ce qu'il faut pour garder la lumière allumée, du premier onduleur à la dernière batterie.</p>
          <div className="grid g3">
            {SERVICES.filter((s) => ["vente", "maintenance", "depannage-batteries"].includes(s.id)).map((s) => (
              <article className="card service" key={s.id}>
                <Photo src={s.image} alt={s.title} />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
          <div className="center"><Link to="/services" className="btn btn-outline">Voir tous les services</Link></div>
        </div>
      </section>

      <section className="section dark">
        <div className="container center">
          <h2>Nous intervenons dans tout le pays</h2>
          <p className="sub">Où que vous soyez, notre équipe se déplace pour vous.</p>
          <div className="cities">
            {CITIES.map((c) => <span key={c}>{c}</span>)}
            <span>et partout ailleurs</span>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container center">
          <h2>Prêt à ne plus subir les coupures ?</h2>
          <p>Parlez-nous de votre besoin, nous vous répondons rapidement avec une solution sur mesure.</p>
          <Link to="/contact" className="btn">Obtenir mon devis</Link>
        </div>
      </section>
    </>
  );
}
