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
  "React and Next.js pages that error, hang, or render wrong",
  "API, webhook, and third-party integration failures",
  "Authentication and account-flow defects",
  "Builds and deployments that fail or block a launch",
  "Checkout, form, and email-delivery breakage",
  "One slow page, query, or endpoint",
];

const steps = [
  {
    title: "Send the symptom",
    copy: "Use the form below: what happens, what should happen, your stack, and the deadline. Five minutes, no call.",
  },
  {
    title: "Get a written fit decision",
    copy: "A firm $600 scope, a $200 diagnostic if the cause is unknown, or a straight “not a fit” with reasons. Always in writing, always before payment.",
  },
  {
    title: "Reserve the window",
    copy: "A $360 deposit (60%) and repository access lock a scheduled 48-hour window. The remaining $240 is due when you accept the work.",
  },
  {
    title: "Verify and ship",
    copy: "Tested code, deployment help, and a written cause-and-fix summary — backed by one in-scope revision and a seven-day regression warranty.",
  },
];

const included = [
  "Diagnosis of one clearly defined production issue",
  "Up to eight engineering hours in a scheduled 48-hour window",
  "Implementation, testing, and deployment assistance",
  "Written cause-and-solution summary",
  "One in-scope revision",
  "Seven-day regression warranty",
];

const excluded = [
  "Complete redesigns or large migrations",
  "Open-ended maintenance or retainers",
  "Malware or security incident response",
  "Projects without repository access",
  "Work beyond the agreed eight-hour cap",
];

const proofs = [
  {
    title: "LinkedIn",
    copy: "My real name, current role, and history. Confirm you’re dealing with a working software engineer, not a lead-gen front.",
    url: LINKEDIN_URL,
    label: "Verify on LinkedIn",
  },
  {
    title: "Portfolio",
    copy: "Shipped project work, collected in one place.",
    url: PORTFOLIO_URL,
    label: "anthony-hayward.com",
  },
  {
    title: "GitHub",
    copy: "Public repositories and commit history under small-cactus. Read how I actually write software.",
    url: GITHUB_URL,
    label: "github.com/small-cactus",
  },
];

const answers = [
  {
    q: "You have a full-time job. Will my fix get squeezed out?",
    a: "No. A sprint runs in a scheduled window with a hard eight-hour cap, and I take very few of them. If I can’t give a problem a real window, I don’t take it. The job cuts the other way too: you’re hiring someone who writes software for a living, all week, every week.",
  },
  {
    q: "What if my problem is bigger than one sprint?",
    a: "You hear that up front, in the fit decision, before any payment. The options stay simple: a $200 diagnostic to pin down the cause, a $900 extended sprint agreed in writing, or “not a fit” with my reasoning.",
  },
  {
    q: "What if you can’t fix it?",
    a: "Then I shouldn’t have accepted it, and the fit decision exists to catch that. I only take problems I’m confident fit the cap. If diagnosis changes the picture mid-sprint, you get my findings in writing immediately and decide the next step. Hours never quietly pile up.",
  },
  {
    q: "Why pay a 60% deposit to someone you found on the internet?",
    a: "Because by the time money moves, you’re not buying a promise, you’re approving a document. The written scope comes first: symptom, definition of done, price, exclusions. The $360 deposit reserves a scheduled window, the $240 balance is due only when you accept the work, and the $200 diagnostic exists if you want a smaller first step.",
  },
  {
    q: "Do we need a call?",
    a: "No. The whole flow is written: your form, my scope, the delivery notes. Expect replies in the evening and on weekends, in writing. If you’d rather talk one through, ask.",
  },
  {
    q: "Can this be white-label for your client work?",
    a: "Yes. I can work quietly in your repository, deliver the fix as a pull request, and let your team own the client relationship.",
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

function Rail({ num, label }: { num: string; label: string }) {
  return (
    <div className="rail" aria-hidden="true">
      <span className="railNum">{num}</span>
      <span className="label">{label}</span>
    </div>
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
      `Current vs. expected: ${data.get("problem")}`,
      `Stack / hosting: ${data.get("stack")}`,
      `Deadline: ${data.get("deadline")}`,
      `Budget: ${data.get("budget")}`,
      `Safe test access available: ${data.get("access")}`,
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
            <a href="#process">Process</a>
            <a href="#terms">Terms</a>
            <a href={LINKEDIN_URL} rel="me">LinkedIn<Ext /></a>
            <a className="mastCta" href="#request">Request a sprint</a>
          </nav>
        </div>
      </header>

      <main id="top" tabIndex={-1}>
        <section className="hero shell" aria-labelledby="hero-title">
          <p className="kicker">React · Next.js · Node — production fixes</p>
          <h1 id="hero-title">
            One stuck problem, <em>fixed in forty-eight hours.</em>
          </h1>
          <p className="lede">
            For agencies and product teams with one urgent problem: a bug, a broken
            integration, a failed deploy, a launch blocker. I fix it in a scheduled
            48-hour window for a flat $600 — and if it won’t fit in one sprint, I
            tell you before you pay.
          </p>
          <div className="heroActions">
            <a className="btn" href="#request">
              Send what’s stuck <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a className="quietLink" href="#terms">Read the terms first</a>
          </div>
          <p className="byline">
            Run by <strong>Anthony Hayward</strong>, a full-time software engineer
            who takes a small number of fixed-scope sprints outside working hours.
          </p>
          <p className="verifyLine">
            Verify: <a href={LINKEDIN_URL} rel="me">LinkedIn<Ext /></a>
            <span className="sep" aria-hidden="true">·</span>
            <a href={PORTFOLIO_URL}>Portfolio<Ext /></a>
            <span className="sep" aria-hidden="true">·</span>
            <a href={GITHUB_URL}>GitHub<Ext /></a>
          </p>
          <dl className="facts">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="sr-only">{fact.label}</dt>
                <dd>
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="section" id="scope" aria-labelledby="scope-title">
          <div className="shell sectionInner">
            <Rail num="01" label="What I fix" />
            <div>
              <h2 id="scope-title">One contained issue. A clear finish line.</h2>
              <p className="sectionCopy">
                This sprint exists for the ticket that matters right now but
                shouldn’t eat your team’s week or turn into an open-ended
                engagement.
              </p>
              <ul className="fixList">
                {fixes.map((fix, i) => (
                  <li key={fix}>
                    <span className="num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    {fix}
                  </li>
                ))}
              </ul>
              <p className="fixNote">
                Not sure yours qualifies? Send it anyway. The worst case is a
                fast, honest “not a fit.”
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="process" aria-labelledby="process-title">
          <div className="shell sectionInner">
            <Rail num="02" label="Process" />
            <div>
              <h2 id="process-title">From stuck to shipped, in writing.</h2>
              <div className="steps">
                {steps.map((step, i) => (
                  <article className="step" key={step.title}>
                    <span className="stepNum" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.copy}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="terms" aria-labelledby="terms-title">
          <div className="shell sectionInner">
            <Rail num="03" label="Terms" />
            <div>
              <h2 id="terms-title">A rate card, not an estimate.</h2>
              <div className="rate main">
                <span className="rateName">48-Hour Web Rescue Sprint</span>
                <span className="leader" aria-hidden="true" />
                <span className="ratePrice">$600</span>
              </div>
              <p className="rateSub">
                One production problem, diagnosed and fixed within up to eight
                engineering hours in a scheduled 48-hour window.
              </p>
              <div className="clauseCols">
                <div>
                  <h3>Included</h3>
                  <ul>
                    {included.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="out">
                  <h3>Out of scope</h3>
                  <ul>
                    {excluded.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="termsGroup">
                <span className="label">Payment</span>
                <div className="rate">
                  <span className="rateName">Deposit, on scheduling</span>
                  <span className="leader" aria-hidden="true" />
                  <span className="ratePrice">$360</span>
                </div>
                <p className="rateSub">
                  A $360 deposit (60%) and repository access reserve your
                  scheduled window. Paid only after you approve the written scope.
                </p>
                <div className="rate">
                  <span className="rateName">Balance, on acceptance</span>
                  <span className="leader" aria-hidden="true" />
                  <span className="ratePrice">$240</span>
                </div>
                <p className="rateSub">
                  The remaining $240 is due when you accept the work — after
                  you’ve seen the fix and the written summary.
                </p>
              </div>

              <div className="termsGroup">
                <span className="label">If one sprint isn’t the right shape</span>
                <div className="rate">
                  <span className="rateName">Prepaid diagnostic</span>
                  <span className="leader" aria-hidden="true" />
                  <span className="ratePrice">$200</span>
                </div>
                <p className="rateSub">
                  For when the cause is unknown. A written diagnosis and a
                  recommended fix, useful whoever implements it — including your
                  own team.
                </p>
                <div className="rate">
                  <span className="rateName">Extended sprint</span>
                  <span className="leader" aria-hidden="true" />
                  <span className="ratePrice">$900</span>
                </div>
                <p className="rateSub">
                  The same structure with a higher hour cap, agreed in writing up
                  front, for problems that are clearly bigger than eight hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="verify" aria-labelledby="verify-title">
          <div className="shell sectionInner">
            <Rail num="04" label="Verify" />
            <div>
              <h2 id="verify-title">A working engineer, not an agency.</h2>
              <p className="sectionCopy proofIntro">
                I’m Anthony Hayward. I hold a full-time software-engineering role
                and take a small number of fixed-scope sprints outside those
                hours, on my own equipment and accounts. That structure is the
                point: the scope is written, the hours are capped, and I turn
                down work that doesn’t fit. There are no logos or testimonials
                here to take on faith — verify me directly instead.
              </p>
              <div className="proofList">
                {proofs.map((proof) => (
                  <div className="proofRow" key={proof.title}>
                    <h3>{proof.title}</h3>
                    <p>{proof.copy}</p>
                    <a href={proof.url} rel={proof.title === "LinkedIn" ? "me" : undefined}>
                      {proof.label}<Ext />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="questions" aria-labelledby="questions-title">
          <div className="shell sectionInner">
            <Rail num="05" label="Questions" />
            <div>
              <h2 id="questions-title">The questions I’d ask too.</h2>
              <div className="answers">
                {answers.map((item) => (
                  <article key={item.q}>
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="request" aria-labelledby="request-title">
          <div className="shell sectionInner">
            <Rail num="06" label="Request" />
            <div className="requestGrid">
              <div className="requestIntro">
                <h2 id="request-title">Send what’s stuck.</h2>
                <p>
                  Describe it in plain words: what happens now, what should
                  happen, your stack, your deadline. You’ll get a written fit
                  decision — a firm $600 scope, a $200 diagnostic
                  recommendation, or an honest “not a fit.”
                </p>
                <p className="small">
                  No call, no sales sequence, no mailing list. Replies usually
                  come in the evening, in writing. Prefer plain email? Write to{" "}
                  <a className="inlineLink" href={mailto}>{CONTACT_EMAIL}</a>.
                </p>
              </div>
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
                    <span>Stack / hosting</span>
                    <input name="stack" placeholder="e.g. Next.js on Vercel" required />
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
                    <span>Safe test access?</span>
                    <select name="access" defaultValue="Yes">
                      <option>Yes</option>
                      <option>No</option>
                      <option>Unsure</option>
                    </select>
                  </label>
                </div>
                <button className="btn" type="submit">
                  Prepare the email <span className="arrow" aria-hidden="true">→</span>
                </button>
                <p className="formNote">
                  This opens your email app with the request prefilled.{" "}
                  No information is stored on this site.
                </p>
                <a className="emailFallback" href={mailto}>Or email directly</a>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell">
          <div className="footerInner">
            <span className="footerName">
              Anthony Hayward<small>48-Hour Web Rescue Sprint</small>
            </span>
            <div className="footerLinks">
              <a href={PORTFOLIO_URL}>Portfolio</a>
              <a href={GITHUB_URL}>GitHub</a>
              <a href={LINKEDIN_URL} rel="me">LinkedIn</a>
              <a href={mailto}>{CONTACT_EMAIL}</a>
            </div>
          </div>
          <div className="colophon">
            <p>Independent development service. Client confidentiality respected.</p>
            <p>Set in Newsreader &amp; Inter. No cookies, no analytics, no chat widget.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
