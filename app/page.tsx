"use client";

const CONTACT_EMAIL = "anthonyhayward1000@gmail.com";
const GITHUB_URL = "https://github.com/small-cactus";
const LINKEDIN_URL = "https://www.linkedin.com/in/anthony-hayward-b307b52b8";
const PORTFOLIO_URL = "https://www.anthony-hayward.com/";

const facts = [
  { value: "$600", label: "fixed price" },
  { value: "48-hour", label: "scheduled window" },
  { value: "8-hour", label: "engineering cap" },
  { value: "7-day", label: "regression warranty" },
];

const fixes = [
  "Contact, quote, or booking forms that no longer send",
  "Checkout and payment errors",
  "Login and customer account problems",
  "Pages that crash, hang, or show the wrong thing",
  "Raw server errors or unfinished template text showing to customers",
  "Broken connections to outside services like payment, email, or shipping tools",
  "Failed updates that keep a site or a new change from going live",
  "A page or search that has become painfully slow",
];

const steps = [
  {
    title: "Describe the problem",
    copy: "Use the form at the bottom of this page: what happens now, what should happen, what the site runs on if you know it, and your deadline. It takes about five minutes, and no phone call is needed.",
  },
  {
    title: "Get a written decision",
    copy: "I reply with one of three things: a firm $600 scope, a $200 diagnostic proposal if the cause is unknown, or a no with my reasons. You pay nothing at this stage.",
  },
  {
    title: "Book the window",
    copy: "A $360 deposit and access to the code reserve a scheduled 48-hour window. The remaining $240 is due only when you accept the work.",
  },
  {
    title: "Get the fix",
    copy: "You receive tested code, help getting it live, and a short written summary of what was wrong and what changed. Every job includes one revision and a seven-day regression warranty.",
  },
];

const services = [
  {
    name: "Rescue sprint",
    detail:
      "One problem, up to eight engineering hours inside a scheduled 48-hour window. Includes deployment help, a written summary, one revision, and the warranty.",
    price: "$600",
  },
  {
    name: "Diagnostic",
    detail:
      "A written diagnosis and a recommended fix, for when nobody knows what is wrong yet. Prepaid, and useful even if someone else ends up doing the repair.",
    price: "$200",
  },
  {
    name: "Extended sprint",
    detail:
      "The same terms with a higher hour cap, agreed in writing up front, for problems clearly bigger than eight hours.",
    price: "$900",
  },
];

const included = [
  "Diagnosis of one clearly defined production issue",
  "Up to eight engineering hours in a scheduled 48-hour window",
  "Implementation, testing, and deployment help",
  "A written summary of the cause and the fix",
  "One in-scope revision",
  "Seven-day regression warranty",
];

const excluded = [
  "Full redesigns and large migrations",
  "Open-ended maintenance or retainers",
  "Malware and security incident response",
  "Projects where nobody can give me access to the code",
  "Work beyond the agreed eight-hour cap",
];

const proofs = [
  {
    title: "LinkedIn",
    copy: "My real name, current role, and work history.",
    url: LINKEDIN_URL,
    label: "My LinkedIn profile",
  },
  {
    title: "Portfolio",
    copy: "Shipped project work, collected in one place.",
    url: PORTFOLIO_URL,
    label: "anthony-hayward.com",
  },
  {
    title: "GitHub",
    copy: "Public code and commit history, under the account small-cactus.",
    url: GITHUB_URL,
    label: "github.com/small-cactus",
  },
];

const answers = [
  {
    q: "You have a full-time job. Will my fix get squeezed out?",
    a: "No. Each job runs in a scheduled window with a hard eight-hour cap, and I hold very few windows at a time. If I can’t give a problem proper attention, I decline it. It also means you’re hiring someone who builds and ships software every working day.",
  },
  {
    q: "What if my problem is bigger than one window?",
    a: "You hear that in the written decision, before any money moves. From there the options are a $200 diagnostic to pin down the cause, an extended sprint agreed in writing, or stopping there with my reasons in hand.",
  },
  {
    q: "What if you can’t fix it?",
    a: "I only accept problems I’m confident fit inside the cap, and the written decision exists to filter out the rest. If the diagnosis changes once I’m in the code, work stops: you get my findings in writing and decide the next step. Hours never quietly pile up.",
  },
  {
    q: "Why pay a deposit to someone you found on the internet?",
    a: "Money moves only after you have a written scope in hand: the symptom, the definition of done, the price, and the exclusions. The $360 deposit books the window, and the $240 balance is due when you accept the work, after you’ve seen the fix running. If you’d rather take a smaller first step, start with the $200 diagnostic.",
  },
  {
    q: "Do we need a call?",
    a: "No. Everything arrives in writing: your form, my scope, the delivery summary. Written answers are easier to check later and easier to hold me to. Replies usually come in the evening. If you’d rather talk one through, ask.",
  },
  {
    q: "Our original developer is gone. Can you still help?",
    a: "Usually, yes. If you control the website’s code, hosting, and the accounts it depends on, or can regain control of them, I can work without the person who built it. List whatever access you still have in the form, and my reply will say whether it’s enough.",
  },
];

function Ext() {
  return (
    <svg
      className="ext"
      width="9"
      height="9"
      viewBox="0 0 9 9"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M1.2 7.8 7.5 1.5M2.8 1.2h5v5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export default function Home() {
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Web Rescue Sprint request")}`;
  const submitRequest = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company")}`,
      `Website: ${data.get("website")}`,
      `What happens now, and what should happen: ${data.get("problem")}`,
      `What the site runs on: ${data.get("stack")}`,
      `Deadline: ${data.get("deadline")}`,
      `Budget: ${data.get("budget")}`,
      `Access to code or hosting: ${data.get("access")}`,
    ].join("\n\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Web Rescue Sprint request")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <a className="skip" href="#top">Skip to content</a>

      <header className="masthead">
        <div className="shell mastheadInner">
          <a className="wordmark" href="#top">
            Anthony Hayward<small>48-hour web rescue</small>
          </a>
          <nav className="mastNav" aria-label="Primary">
            <a href="#scope">What I fix</a>
            <a href="#price">Price</a>
            <a href={LINKEDIN_URL} target="_blank" rel="me noopener noreferrer">LinkedIn<Ext /></a>
            <a className="mastCta" href="#request">Request a fix</a>
          </nav>
        </div>
      </header>

      <main id="top" tabIndex={-1}>
        <div className="shell">
          <section className="hero" aria-labelledby="hero-title">
            <h1 id="hero-title">I fix broken websites for small businesses.</h1>
            <p className="lede">
              When a checkout fails, a contact form stops sending, or a login
              breaks, and the person who built the site is gone, it’s hard to
              even know who to call. I take one clearly defined problem at a
              time and fix it inside a scheduled 48-hour window, for a flat
              $600 agreed in writing before you pay anything.
            </p>
            <div className="heroActions">
              <a className="btn" href="#request">Describe the problem</a>
              <a className="quietLink" href="#price">Price and terms</a>
            </div>
            <p className="byline">
              Run by <strong>Anthony Hayward</strong>, a full-time software
              engineer who takes a small number of these jobs outside working
              hours.
            </p>
            <p className="verifyLine">
              Before you send anything, check who I am:{" "}
              <a href={LINKEDIN_URL} target="_blank" rel="me noopener noreferrer">LinkedIn<Ext /></a>
              <span className="pair">
                <span className="sep" aria-hidden="true">·</span>
                <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer">Portfolio<Ext /></a>
              </span>
              <span className="pair">
                <span className="sep" aria-hidden="true">·</span>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub<Ext /></a>
              </span>
            </p>
            <dl className="facts">
              {facts.map((fact) => (
                <div className="fact" key={fact.label}>
                  <dt className="sr-only">{fact.label}</dt>
                  <dd>
                    <strong>{fact.value}</strong> <span>{fact.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="section" id="scope" aria-labelledby="scope-title">
            <h2 id="scope-title">What I fix</h2>
            <p className="sectionCopy">
              The job is one production problem with a clear finish line.
              Typical examples:
            </p>
            <ul className="plainList">
              {fixes.map((fix) => (
                <li key={fix}>{fix}</li>
              ))}
            </ul>
            <p className="note">
              The problem may live in a modern React or Node application, an
              older PHP site, or a content-management system. The first
              question is always the symptom. If you don’t know what your site
              runs on, send the problem anyway and I’ll work it out from there.
            </p>
          </section>

          <section className="section" id="process" aria-labelledby="process-title">
            <h2 id="process-title">How it works</h2>
            <ol className="steps">
              {steps.map((step) => (
                <li key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="section" id="price" aria-labelledby="price-title">
            <h2 id="price-title">Price and terms</h2>
            <table className="rates">
              <caption className="sr-only">Services and fixed prices</caption>
              <tbody>
                {services.map((service) => (
                  <tr key={service.name}>
                    <th scope="row">
                      {service.name}
                      <span>{service.detail}</span>
                    </th>
                    <td>{service.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="sectionCopy">
              Payment comes in two parts: a $360 deposit (60%) after you
              approve the written scope, and the $240 balance when you accept
              the work. The price does not change after you approve the scope.
            </p>
            <div className="clauseCols">
              <div>
                <h3>Included</h3>
                <ul className="plainList">
                  {included.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Not included</h3>
                <ul className="plainList">
                  {excluded.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="section" id="who" aria-labelledby="who-title">
            <h2 id="who-title">Who you’re hiring</h2>
            <p className="sectionCopy">
              I’m Anthony Hayward, a full-time software engineer. I take a
              small number of these fixed-price jobs outside my working hours,
              on my own equipment and accounts. The written scope and the hour
              cap are what make that reliable: each job is small, defined, and
              scheduled, or I don’t take it.
            </p>
            <p className="sectionCopy">
              There are no testimonials or client logos on this page. Look me
              up directly instead:
            </p>
            <ul className="proofList">
              {proofs.map((proof) => (
                <li key={proof.title}>
                  <a
                    href={proof.url}
                    target="_blank"
                    rel={proof.title === "LinkedIn" ? "me noopener noreferrer" : "noopener noreferrer"}
                  >
                    {proof.label}<Ext />
                  </a>
                  <span>{proof.copy}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="section" id="questions" aria-labelledby="questions-title">
            <h2 id="questions-title">Common questions</h2>
            <div className="answers">
              {answers.map((item) => (
                <article key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="request" aria-labelledby="request-title">
            <h2 id="request-title">Send the problem</h2>
            <p className="sectionCopy">
              Describe it in plain words: what happens now, what should happen,
              and when you need it fixed. You’ll get a written answer with a
              firm $600 scope, a $200 diagnostic proposal, or a no with
              reasons.
            </p>
            <p className="note">
              No call, no follow-up sequence, no mailing list. If you’d rather
              skip the form, write to{" "}
              <a className="inlineLink" href={mailto}>{CONTACT_EMAIL}</a>.
            </p>
            <form className="requestForm" onSubmit={submitRequest}>
              <div className="formRow">
                <label className="field">
                  <span>Name</span>
                  <input name="name" autoComplete="name" required />
                </label>
                <label className="field">
                  <span>Company</span>
                  <input name="company" autoComplete="organization" required />
                </label>
              </div>
              <label className="field">
                <span>Website</span>
                <input name="website" type="url" inputMode="url" placeholder="https://" />
              </label>
              <label className="field">
                <span>What happens now, and what should happen?</span>
                <textarea name="problem" rows={5} required />
              </label>
              <div className="formRow">
                <label className="field">
                  <span>What the site runs on, if you know</span>
                  <input name="stack" placeholder="WordPress, Next.js, not sure..." />
                </label>
                <label className="field">
                  <span>Deadline</span>
                  <input name="deadline" required />
                </label>
              </div>
              <div className="formRow">
                <label className="field">
                  <span>Budget</span>
                  <select name="budget" defaultValue="$600 rescue sprint">
                    <option>$600 rescue sprint</option>
                    <option>$200 diagnostic</option>
                    <option>$900 extended sprint</option>
                    <option>Unsure</option>
                  </select>
                </label>
                <label className="field">
                  <span>Can you share code or hosting access?</span>
                  <select name="access" defaultValue="Yes">
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not sure</option>
                  </select>
                </label>
              </div>
              <button className="btn" type="submit">Prepare the email</button>
              <p className="formNote">
                This opens your email app with the request filled in.{" "}
                No information is stored on this site.
              </p>
            </form>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="shell">
          <div className="footerInner">
            <span className="footerName">
              Anthony Hayward<small>48-hour web rescue</small>
            </span>
            <div className="footerLinks">
              <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer">Portfolio</a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={LINKEDIN_URL} target="_blank" rel="me noopener noreferrer">LinkedIn</a>
              <a href={mailto}>{CONTACT_EMAIL}</a>
            </div>
          </div>
          <div className="colophon">
            <p>Independent service run by one engineer. Client work stays confidential.</p>
            <p>This site sets no cookies and runs no analytics.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
