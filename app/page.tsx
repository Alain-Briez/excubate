const clientPlaceholders = [
  "GROUP 01",
  "INDUSTRY 02",
  "LAB 03",
  "CORP. 04",
  "VENTURE 05",
  "GROUP 06",
  "INDUSTRY 07",
  "LAB 08",
  "CORP. 09",
  "VENTURE 10",
];

const experiments = [
  ["TARGET", "3 active segments", "TEST"],
  ["ANGLE", "9 propositions", "TEST"],
  ["CHANNEL", "4 GTM motions", "TEST"],
  ["OFFER", "2 models retained", "VALID"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Xcubate, back to top">
          XCUBATE<span className="brand-dot">●</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#method">Method</a>
          <a href="#outcome">Outcome</a>
          <a href="#founder">Founder</a>
        </nav>
        <a className="header-cta" href="#contact">
          Submit a project <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-kicker">
          <span>Enterprise innovation agency</span>
          <span>Paris / Europe</span>
          <span>Protocol 90.J</span>
        </div>
        <h1>
          Innovation cannot
          <br />
          move at <em>corporate speed.</em>
        </h1>
        <div className="hero-bottom">
          <div className="hero-stamp" aria-hidden="true">
            <span>D+90</span>
            <small>GO / NO GO</small>
          </div>
          <div className="hero-copy">
            <p>
              Xcubate helps large enterprises preserve their capacity to
              innovate fast. We excubate high-potential projects from corporate
              drag and turn them into validated businesses in 90 days.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#contact">
                Challenge our project <span aria-hidden="true">→</span>
              </a>
              <a className="text-link" href="#method">
                See the protocol ↓
              </a>
            </div>
          </div>
        </div>
        <div className="hero-ticker" aria-label="Xcubate principles">
          <span>NO THEATRE</span>
          <span>HYPOTHESES &gt; OPINIONS</span>
          <span>EVIDENCE &gt; SLIDES</span>
          <span>90 DAYS. NOT 18 MONTHS.</span>
        </div>
      </section>

      <section className="logo-wall" aria-labelledby="clients-title">
        <div className="logo-wall-head section-shell">
          <p className="eyebrow" id="clients-title">
            Already deployed across 50+ enterprise innovation projects
          </p>
          <p className="placeholder-note">Client logos to be added</p>
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
        <div className="section-index">01 / REALITY</div>
        <div className="manifesto-content">
          <p className="lead-serif">
            The world is accelerating. Most corporate innovation systems are not.
          </p>
          <p className="excubation-note">
            <strong>Excubation keeps enterprise innovation fast.</strong> We move
            the project into a high-autonomy, high-frequency execution system,
            then bring back a validated business your organisation can scale.
          </p>
          <div className="manifesto-grid">
            <div>
              <span className="strike">A reassuring business plan.</span>
              <span className="replacement">Market evidence.</span>
            </div>
            <div>
              <span className="strike">Another innovation workshop.</span>
              <span className="replacement">Customers on the phone.</span>
            </div>
            <div>
              <span className="strike">A prototype in a drawer.</span>
              <span className="replacement">An offer people will buy.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="protocol" id="method">
        <div className="section-shell protocol-head">
          <div className="section-index">02 / PROTOCOL</div>
          <div>
            <p className="eyebrow">The X90 high-velocity excubation system</p>
            <h2>Maximum velocity. Without corporate antibodies.</h2>
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
              <span>D01—D10</span>
            </div>
            <h3>Decode the project.</h3>
            <p>
              Understand the technology, assets, internal constraints and real
              ambition. Isolate what can create value — and what is merely
              sophistication.
            </p>
            <ul>
              <li>Project audit &amp; interviews</li>
              <li>Asset inventory</li>
              <li>Success criteria</li>
            </ul>
            <div className="node node-a" aria-hidden="true">01</div>
          </article>

          <article className="phase phase-b">
            <div className="phase-meta">
              <span>PHASE 02</span>
              <span>D08—D20</span>
            </div>
            <h3>Formulate the bets.</h3>
            <p>
              Turn technical potential into business hypotheses, informed by
              the models already outperforming in comparable markets.
            </p>
            <ul>
              <li>Comparable business models</li>
              <li>Targets &amp; use cases</li>
              <li>Value propositions</li>
            </ul>
            <div className="node node-b" aria-hidden="true">02</div>
          </article>

          <article className="phase phase-c">
            <div className="phase-meta">
              <span>PHASE 03</span>
              <span>D18—D55</span>
            </div>
            <h3>Create market collision.</h3>
            <p>
              Run rapid experiments across targets, angles, offers and channels.
              Measure signals. Kill weak paths fast. Double down on the ones that
              move.
            </p>
            <div className="experiment-stack">
              {experiments.map(([label, value, status]) => (
                <div className="experiment-row" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                  <i className={status === "VALID" ? "is-valid" : ""}>
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
              <span>D50—D90</span>
            </div>
            <h3>Prototype the business.</h3>
            <p>
              Build exactly what is needed to sell and deliver: an MVP for a tech
              business, or a product prototype and complete sales process for a
              physical one.
            </p>
            <ul>
              <li>MVP or product prototype</li>
              <li>Live commercial motion</li>
              <li>Qualified pipeline</li>
            </ul>
            <div className="node node-d" aria-hidden="true">04</div>
          </article>

          <div className="flow-line flow-one" aria-hidden="true" />
          <div className="flow-line flow-two" aria-hidden="true" />
          <div className="flow-line flow-three" aria-hidden="true" />
        </div>
      </section>

      <section className="outcome" id="outcome">
        <div className="section-shell outcome-grid">
          <div>
            <div className="section-index inverse">03 / OUTPUT</div>
            <h2>Not a recommendation.<br />A business ready to re-enter the enterprise.</h2>
          </div>
          <div className="outcome-list">
            <div>
              <span>01</span>
              <p>A business model confronted with the market.</p>
              <b>VALIDATED</b>
            </div>
            <div>
              <span>02</span>
              <p>A sellable MVP or product prototype.</p>
              <b>LIVE</b>
            </div>
            <div>
              <span>03</span>
              <p>A go-to-market playbook already in motion.</p>
              <b>DOCUMENTED</b>
            </div>
            <div>
              <span>04</span>
              <p>A pipeline of first customers.</p>
              <b>OPEN</b>
            </div>
          </div>
        </div>
        <div className="outcome-marquee" aria-hidden="true">
          <div className="outcome-marquee-track">
            <span>BUILD / TEST / KILL / SCALE /&nbsp;</span>
            <span>BUILD / TEST / KILL / SCALE /&nbsp;</span>
          </div>
        </div>
      </section>

      <section className="proof section-shell">
        <div className="proof-stat">
          <strong>50<span>+</span></strong>
          <p>enterprise projects put through the protocol.</p>
        </div>
        <div className="proof-stat">
          <strong>90<span>d</span></strong>
          <p>to reach an evidence-based investment decision.</p>
        </div>
        <div className="proof-quote">
          <span>PLACEHOLDER / CLIENT TESTIMONIAL</span>
          <blockquote>
            “A short, factual client quote with a result that is impossible to
            ignore.”
          </blockquote>
          <cite>Name, role — Enterprise group</cite>
        </div>
      </section>

      <section className="founder" id="founder">
        <div className="founder-visual" aria-label="Founder portrait placeholder">
          <div className="portrait-placeholder">
            <span>PORTRAIT</span>
            <span>TO BE ADDED</span>
          </div>
          <div className="founder-tag">FOUNDER / OPERATOR</div>
        </div>
        <div className="founder-copy">
          <div className="section-index">04 / FOUNDER</div>
          <p className="eyebrow">Your future sparring partner</p>
          <h2>Founder name.</h2>
          <p className="founder-intro">
            Not a facilitator. An operator embedded with your team to turn a
            technical idea into a testable commercial machine.
          </p>
          <p>
            Add your background here: the companies built or supported, your
            sector expertise, and the convictions that led you to create Xcubate.
          </p>
          <a className="text-link" href="#contact">View full profile ↗</a>
        </div>
      </section>

      <section className="fit section-shell">
        <div className="section-index">05 / FILTER</div>
        <div className="fit-content">
          <h2>This protocol is not for everyone.</h2>
          <div className="fit-columns">
            <div className="fit-card yes">
              <h3>We should talk if —</h3>
              <ul>
                <li>Your technical project is still searching for its business model.</li>
                <li>You can mobilise a team for 90 days.</li>
                <li>You are ready to let the market challenge internal beliefs.</li>
              </ul>
            </div>
            <div className="fit-card no">
              <h3>Walk away if —</h3>
              <ul>
                <li>You only want a market study.</li>
                <li>Every test must go through six committees.</li>
                <li>The project has to succeed, whatever the evidence says.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-grid section-shell">
          <div className="section-index inverse">06 / CONTACT</div>
          <div>
            <p className="eyebrow">We take on a limited number of projects</p>
            <h2>You have the technology.<br /><em>Let&apos;s verify the business.</em></h2>
            <p className="contact-note">
              30 minutes. Your project, its constraints, and the first risk to
              test. If we cannot accelerate it, we will tell you.
            </p>
            <a className="button button-light" href="mailto:contact@xcubate.io?subject=Innovation%20project%20—%20X90">
              Submit a project <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand brand-light" href="#top">XCUBATE<span className="brand-dot">●</span></a>
        <p>Innovation → Business / 90 days</p>
        <div>
          <a href="mailto:contact@xcubate.io">contact@xcubate.io</a>
          <span>© 2026 Xcubate</span>
        </div>
      </footer>
    </main>
  );
}
