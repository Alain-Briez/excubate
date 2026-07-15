import Image from "next/image";

const clients = [
  { name: "L’Oréal", logo: "/logos/loreal.svg" },
  { name: "Mars, Incorporated", logo: "/logos/mars.svg" },
  { name: "Royal Canin", logo: "/logos/royal-canin.svg" },
  { name: "Unilever", logo: "/logos/unilever.svg" },
  { name: "Decathlon", logo: "/logos/decathlon.svg" },
  { name: "EDF", logo: "/logos/edf.svg", className: "client-logo-tall" },
  { name: "Triller", logo: "/logos/triller.svg" },
  { name: "HEC Paris", logo: "/logos/hec-paris.svg", className: "client-logo-tall" },
  { name: "Leroy Merlin", logo: "/logos/leroy-merlin.svg", className: "client-logo-tall" },
  { name: "Crédit Mutuel", logo: "/logos/credit-mutuel.svg" },
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
        <a className="brand" href="#top" aria-label="Excubate, back to top">
          EXCUBATE<span className="brand-dot">●</span>
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
          Make innovation
          <br />
          move at <em>market speed.</em>
        </h1>
        <div className="hero-bottom">
          <div className="hero-stamp" aria-hidden="true">
            <span>D+90</span>
            <small>GO / NO GO</small>
          </div>
          <div className="hero-copy">
            <p>
              Excubate gives ambitious enterprise teams the speed and focus to
              turn R&amp;D and innovation projects into validated businesses in 90
              days — while keeping internal ownership and strategic alignment.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#contact">
                Pressure-test your project <span aria-hidden="true">→</span>
              </a>
              <a className="text-link" href="#method">
                See the protocol ↓
              </a>
            </div>
          </div>
        </div>
        <div className="hero-ticker" aria-label="Excubate principles">
          <span>FULL FOCUS</span>
          <span>HYPOTHESES, TESTED</span>
          <span>EVIDENCE BUILDS ALIGNMENT</span>
          <span>90 DAYS TO A CLEAR DECISION</span>
        </div>
      </section>

      <section className="logo-wall" aria-labelledby="clients-title">
        <div className="logo-wall-head section-shell">
          <p className="eyebrow" id="clients-title">
            Already deployed across 50+ enterprise innovation projects
          </p>
        </div>
        <div className="logos-grid">
          {clients.map((client) => (
            <div className="logo-cell" key={client.name}>
              <Image
                className={`client-logo ${client.className ?? ""}`}
                src={client.logo}
                alt={client.name}
                width={200}
                height={80}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="manifesto section-shell">
        <div className="section-index">01 / REALITY</div>
        <div className="manifesto-content">
          <p className="lead-serif">
            The world is accelerating. Your capacity to innovate can accelerate
            with it.
          </p>
          <p className="excubation-note">
            <strong>Excubation keeps enterprise innovation fast.</strong> We move
            the project into a focused, high-frequency execution system alongside
            your team, then bring back a validated business your organisation can
            scale.
          </p>
          <div className="manifesto-grid">
            <div>
              <span className="strike">Strategy alone.</span>
              <span className="replacement">Strategy tested in market.</span>
            </div>
            <div>
              <span className="strike">An informed hypothesis.</span>
              <span className="replacement">Customer evidence.</span>
            </div>
            <div>
              <span className="strike">Technical proof alone.</span>
              <span className="replacement">Commercial proof.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="protocol" id="method">
        <div className="section-shell protocol-head">
          <div className="section-index">02 / PROTOCOL</div>
          <div>
            <p className="eyebrow">The X90 high-velocity excubation system</p>
            <h2>Maximum velocity. Full enterprise alignment.</h2>
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
              ambition. Distinguish what can create value now from what can
              compound over the longer horizon.
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
              Measure signals. Close weak paths early. Concentrate resources where
              the evidence is strongest.
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
            <h2>Beyond a recommendation.<br />A business ready to scale inside the enterprise.</h2>
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
        <div className="founder-visual">
          <img
            className="founder-portrait"
            src="/alain-briez.png"
            alt="Alain Briez, founder of Excubate"
          />
          <div className="founder-tag">FOUNDER / OPERATOR</div>
        </div>
        <div className="founder-copy">
          <div className="section-index">04 / FOUNDER</div>
          <p className="eyebrow">Serial tech entrepreneur / 7-figure agency exit</p>
          <h2>Alain Briez.</h2>
          <p className="founder-intro">
            I do not advise entrepreneurs from the sidelines. I build companies.
          </p>
          <p>
            I work directly with enterprise teams to turn innovation projects
            into businesses that can survive the market. No junior hand-off. No
            distance between the strategy and the person doing the work.
          </p>
          <p>
            My track record spans medical AI, senior companionship, sales tech,
            consumer products, secure cloud infrastructure and international
            go-to-market. Four ventures are still running. Two were exited. Two
            failed. Every one sharpened how I build, test and decide.
          </p>
          <div className="founder-ventures" aria-label="Companies founded by Alain Briez">
            <div>
              <span>OPERATING</span>
              <p>Verbasync · MyAmigo · MyMementa · Outstalk</p>
            </div>
            <div>
              <span>EXITED</span>
              <p>Reddot Growth · Blisseo</p>
            </div>
            <div>
              <span>HARD LESSONS</span>
              <p>Iteria Systems · KountryVeggyz</p>
            </div>
          </div>
          <a className="text-link" href="#contact">Work directly with Alain ↗</a>
        </div>
      </section>

      <section className="fit section-shell">
        <div className="section-index">05 / FILTER</div>
        <div className="fit-content">
          <h2>Built for teams ready to move.</h2>
          <div className="fit-columns">
            <div className="fit-card yes">
              <h3>We should talk if —</h3>
              <ul>
                <li>Your technical project is ready for commercial hypotheses.</li>
                <li>You can form a joint team for 90 days.</li>
                <li>You want market evidence before the next major investment.</li>
              </ul>
            </div>
            <div className="fit-card no">
              <h3>Another approach may fit better if —</h3>
              <ul>
                <li>You need strategic research without market activation.</li>
                <li>The project cannot enter live testing yet.</li>
                <li>The investment decision has already been made.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-grid section-shell">
          <div className="section-index inverse">06 / CONTACT</div>
          <div className="contact-content">
            <div className="contact-copy">
              <p className="eyebrow">We take on a limited number of projects</p>
              <h2>You have the technology.<br /><em>Let&apos;s verify the business.</em></h2>
              <p className="contact-note">
                Tell us where the project stands. We&apos;ll identify the first risk
                worth testing and whether X90 is the right format.
              </p>
            </div>

            <form
              className="contact-form"
              action="mailto:contact@Excubate.io?subject=New%20Excubate%20project"
              method="post"
              encType="text/plain"
            >
              <div className="contact-form-grid">
                <label className="form-field">
                  <span>Name</span>
                  <input type="text" name="Name" autoComplete="name" required />
                </label>
                <label className="form-field">
                  <span>Email</span>
                  <input type="email" name="Email" autoComplete="email" required />
                </label>
                <label className="form-field form-field-wide">
                  <span>Company</span>
                  <input type="text" name="Company" autoComplete="organization" required />
                </label>
                <label className="form-field form-field-wide">
                  <span>Project timeline</span>
                  <select name="Project timeline" defaultValue="" required>
                    <option value="" disabled>Select a timeline</option>
                    <option value="This month">This month</option>
                    <option value="Within 3 months">Within 3 months</option>
                    <option value="Within 6 months">Within 6 months</option>
                    <option value="No project yet">No project yet</option>
                  </select>
                </label>
                <label className="form-field form-field-wide">
                  <span>Complementary information <i>Optional</i></span>
                  <textarea name="Complementary information" rows={5} />
                </label>
              </div>
              <div className="contact-form-footer">
                <button className="contact-submit" type="submit">
                  Submit your project <span aria-hidden="true">↗</span>
                </button>
                <small>Opens your email client to send.</small>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand brand-light" href="#top">Excubate<span className="brand-dot">●</span></a>
        <p>Innovation → Business / 90 days</p>
        <div>
          <a href="mailto:contact@Excubate.io">contact@Excubate.io</a>
          <span>© 2026 Excubate</span>
        </div>
      </footer>
    </main>
  );
}
