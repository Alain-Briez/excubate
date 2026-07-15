const clientPlaceholders = [
  "GROUPE 01",
  "INDUSTRIE 02",
  "LAB 03",
  "CORP. 04",
  "VENTURE 05",
  "GROUPE 06",
  "INDUSTRIE 07",
  "LAB 08",
  "CORP. 09",
  "VENTURE 10",
];

const experiments = [
  ["CIBLE", "3 segments actifs", "TEST"],
  ["ANGLE", "9 propositions", "TEST"],
  ["CANAL", "4 motions GTM", "TEST"],
  ["OFFRE", "2 modèles retenus", "VALIDÉ"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Xcubate, retour en haut">
          XCUBATE<span className="brand-dot">●</span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#methode">Méthode</a>
          <a href="#resultat">Résultat</a>
          <a href="#fondateur">Fondateur</a>
        </nav>
        <a className="header-cta" href="#contact">
          Soumettre un projet <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-kicker">
          <span>Agence d&apos;innovation</span>
          <span>Paris / Europe</span>
          <span>Protocol 90.J</span>
        </div>
        <h1>
          Votre R&amp;D n&apos;est pas
          <br />
          encore un <em>business.</em>
        </h1>
        <div className="hero-bottom">
          <div className="hero-stamp" aria-hidden="true">
            <span>J+90</span>
            <small>GO / NO GO</small>
          </div>
          <div className="hero-copy">
            <p>
              Xcubate transforme les projets techniques en business viables en
              90 jours — par l&apos;expérimentation à haute fréquence, pas par les
              comités.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#contact">
                Challenger notre projet <span aria-hidden="true">→</span>
              </a>
              <a className="text-link" href="#methode">
                Voir le protocole ↓
              </a>
            </div>
          </div>
        </div>
        <div className="hero-ticker" aria-label="Principes de Xcubate">
          <span>NO THEATRE</span>
          <span>HYPOTHÈSES &gt; OPINIONS</span>
          <span>PREUVES &gt; SLIDES</span>
          <span>90 JOURS. PAS 18 MOIS.</span>
        </div>
      </section>

      <section className="logo-wall" aria-labelledby="clients-title">
        <div className="logo-wall-head section-shell">
          <p className="eyebrow" id="clients-title">
            Déjà appliqué sur plus de 50 projets grands comptes
          </p>
          <p className="placeholder-note">Logos clients à insérer</p>
        </div>
        <div className="logos-grid">
          {clientPlaceholders.map((client) => (
            <div className="logo-cell" key={client}>
              <span aria-hidden="true">◆</span>
              {client}
            </div>
          ))}
        </div>
      </section>

      <section className="manifesto section-shell">
        <div className="section-index">01 / CONSTAT</div>
        <div className="manifesto-content">
          <p className="lead-serif">
            Une technologie intéressante ne vaut rien tant que personne ne veut
            l&apos;acheter.
          </p>
          <div className="manifesto-grid">
            <div>
              <span className="strike">Un business plan rassurant.</span>
              <span className="replacement">Une preuve de marché.</span>
            </div>
            <div>
              <span className="strike">Un énième workshop.</span>
              <span className="replacement">Des clients au téléphone.</span>
            </div>
            <div>
              <span className="strike">Un prototype dans un tiroir.</span>
              <span className="replacement">Une offre vendable.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="protocol" id="methode">
        <div className="section-shell protocol-head">
          <div className="section-index">02 / PROTOCOLE</div>
          <div>
            <p className="eyebrow">Système d&apos;expérimentation X90</p>
            <h2>90 jours pour forcer la réalité à répondre.</h2>
          </div>
        </div>

        <div className="system-diagram section-shell">
          <div className="diagram-ruler" aria-hidden="true">
            {Array.from({ length: 13 }, (_, i) => (
              <span key={i}>{String(i * 7).padStart(2, "0")}</span>
            ))}
          </div>

          <article className="phase phase-a">
            <div className="phase-meta">
              <span>PHASE 01</span>
              <span>J01—J10</span>
            </div>
            <h3>Décoder le projet.</h3>
            <p>
              Comprendre la technologie, les actifs, les contraintes internes et
              l&apos;ambition réelle. Isoler ce qui peut créer de la valeur — et ce
              qui n&apos;est que de la sophistication.
            </p>
            <ul>
              <li>Audit projet &amp; entretiens</li>
              <li>Inventaire des actifs</li>
              <li>Critères de succès</li>
            </ul>
            <div className="node node-a" aria-hidden="true">01</div>
          </article>

          <article className="phase phase-b">
            <div className="phase-meta">
              <span>PHASE 02</span>
              <span>J08—J20</span>
            </div>
            <h3>Formuler les paris.</h3>
            <p>
              Transformer le potentiel technique en hypothèses business,
              inspirées des modèles qui performent déjà sur des marchés
              comparables.
            </p>
            <ul>
              <li>Business models comparables</li>
              <li>Cibles &amp; cas d&apos;usage</li>
              <li>Propositions de valeur</li>
            </ul>
            <div className="node node-b" aria-hidden="true">02</div>
          </article>

          <article className="phase phase-c">
            <div className="phase-meta">
              <span>PHASE 03</span>
              <span>J18—J55</span>
            </div>
            <h3>Créer la collision marché.</h3>
            <p>
              Lancer des expériences rapides sur les cibles, les angles, les
              offres et les canaux. Mesurer les signaux. Tuer vite les mauvaises
              pistes. Doubler la mise sur les bonnes.
            </p>
            <div className="experiment-stack">
              {experiments.map(([label, value, status]) => (
                <div className="experiment-row" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                  <i className={status === "VALIDÉ" ? "is-valid" : ""}>
                    {status}
                  </i>
                </div>
              ))}
            </div>
            <div className="node node-c" aria-hidden="true">03</div>
          </article>

          <article className="phase phase-d">
            <div className="phase-meta">
              <span>PHASE 04</span>
              <span>J50—J90</span>
            </div>
            <h3>Prototyper le business.</h3>
            <p>
              Construire ce qu&apos;il faut pour vendre et délivrer : MVP pour un
              business tech, prototype produit et processus commercial pour un
              business physique.
            </p>
            <ul>
              <li>MVP ou prototype produit</li>
              <li>Motion commerciale réelle</li>
              <li>Pipeline qualifié</li>
            </ul>
            <div className="node node-d" aria-hidden="true">04</div>
          </article>

          <div className="flow-line flow-one" aria-hidden="true" />
          <div className="flow-line flow-two" aria-hidden="true" />
          <div className="flow-line flow-three" aria-hidden="true" />
        </div>
      </section>

      <section className="outcome" id="resultat">
        <div className="section-shell outcome-grid">
          <div>
            <div className="section-index inverse">03 / SORTIE</div>
            <h2>Pas une reco.<br />Un business prêt à entrer dans l&apos;entreprise.</h2>
          </div>
          <div className="outcome-list">
            <div>
              <span>01</span>
              <p>Un modèle économique confronté au marché.</p>
              <b>VALIDÉ</b>
            </div>
            <div>
              <span>02</span>
              <p>Un MVP ou un prototype produit vendable.</p>
              <b>ACTIF</b>
            </div>
            <div>
              <span>03</span>
              <p>Un playbook go-to-market déjà déroulé.</p>
              <b>DOCUMENTÉ</b>
            </div>
            <div>
              <span>04</span>
              <p>Un pipeline de premiers clients.</p>
              <b>OUVERT</b>
            </div>
          </div>
        </div>
        <div className="outcome-marquee" aria-hidden="true">
          BUILD / TEST / KILL / SCALE / BUILD / TEST / KILL / SCALE
        </div>
      </section>

      <section className="proof section-shell">
        <div className="proof-stat">
          <strong>50<span>+</span></strong>
          <p>projets grands comptes passés dans le protocole.</p>
        </div>
        <div className="proof-stat">
          <strong>90<span>j</span></strong>
          <p>pour obtenir une décision fondée sur des preuves.</p>
        </div>
        <div className="proof-quote">
          <span>PLACEHOLDER / TÉMOIGNAGE CLIENT</span>
          <blockquote>
            “Une citation client courte, factuelle, avec un résultat impossible à
            ignorer.”
          </blockquote>
          <cite>Nom, fonction — Grand groupe</cite>
        </div>
      </section>

      <section className="founder" id="fondateur">
        <div className="founder-visual" aria-label="Emplacement réservé au portrait du fondateur">
          <div className="portrait-placeholder">
            <span>PORTRAIT</span>
            <span>À INSÉRER</span>
          </div>
          <div className="founder-tag">FOUNDER / OPERATOR</div>
        </div>
        <div className="founder-copy">
          <div className="section-index">04 / FONDATEUR</div>
          <p className="eyebrow">Votre futur sparring partner</p>
          <h2>Nom du fondateur.</h2>
          <p className="founder-intro">
            Pas un facilitateur. Un entrepreneur embarqué avec vos équipes pour
            transformer une idée technique en machine commerciale testable.
          </p>
          <p>
            Ajoutez ici votre parcours, les entreprises créées ou accompagnées,
            votre expertise sectorielle et les convictions qui vous ont conduit
            à bâtir Xcubate.
          </p>
          <a className="text-link" href="#contact">Voir le profil complet ↗</a>
        </div>
      </section>

      <section className="fit section-shell">
        <div className="section-index">05 / FILTRE</div>
        <div className="fit-content">
          <h2>Ce protocole n&apos;est pas fait pour tout le monde.</h2>
          <div className="fit-columns">
            <div className="fit-card yes">
              <h3>Nous devrions parler si —</h3>
              <ul>
                <li>Votre projet technique cherche son modèle économique.</li>
                <li>Vous pouvez mobiliser une équipe pendant 90 jours.</li>
                <li>Vous êtes prêt à laisser le marché contredire vos intuitions.</li>
              </ul>
            </div>
            <div className="fit-card no">
              <h3>Passez votre chemin si —</h3>
              <ul>
                <li>Vous cherchez uniquement une étude de marché.</li>
                <li>Chaque test doit passer par six comités.</li>
                <li>Le projet doit réussir, quelles que soient les preuves.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-grid section-shell">
          <div className="section-index inverse">06 / CONTACT</div>
          <div>
            <p className="eyebrow">Nous prenons un nombre limité de projets</p>
            <h2>Vous avez la technologie.<br /><em>Vérifions le business.</em></h2>
            <p className="contact-note">
              30 minutes. Votre projet, ses contraintes, le premier risque à tester.
              Si nous ne sommes pas utiles, nous vous le dirons.
            </p>
            <a className="button button-light" href="mailto:contact@xcubate.io?subject=Projet%20d%27innovation%20—%20X90">
              Soumettre un projet <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand brand-light" href="#top">XCUBATE<span className="brand-dot">●</span></a>
        <p>Innovation → Business / 90 jours</p>
        <div>
          <a href="mailto:contact@xcubate.io">contact@xcubate.io</a>
          <span>© 2026 Xcubate</span>
        </div>
      </footer>
    </main>
  );
}
