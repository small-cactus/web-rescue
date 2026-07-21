"use client";

const CONTACT_EMAIL = "anthonyhayward1000@gmail.com";
const GITHUB_URL = "https://github.com/small-cactus";
const LINKEDIN_URL = "https://www.linkedin.com/in/anthony-hayward-b307b52b8";
const PORTFOLIO_URL = "https://www.anthony-hayward.com/";

const fixes = [
  "React and Next.js pages that error, hang, or render wrong",
  "API, webhook, and third-party integration failures",
  "Authentication and account-flow defects",
  "Builds and deployments that fail or block a launch",
  "Checkout, form, and email-delivery breakage",
  "One slow page, query, or endpoint",
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

const verify = [
  {
    tag: "VERIFY 01",
    title: "LinkedIn",
    copy: "My real name, current role, and history. Confirm you’re dealing with a working software engineer, not a lead-gen front.",
    url: LINKEDIN_URL,
    label: "Verify on LinkedIn ↗",
  },
  {
    tag: "VERIFY 02",
    title: "Portfolio",
    copy: "Shipped project work, collected in one place at anthony-hayward.com.",
    url: PORTFOLIO_URL,
    label: "See the work ↗",
  },
  {
    tag: "VERIFY 03",
    title: "GitHub",
    copy: "Public repositories and commit history under small-cactus. Read how I actually write software.",
    url: GITHUB_URL,
    label: "Read the code ↗",
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
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top">48H / RESCUE</a>
        <div className="navlinks">
          <a href="#fit">What I fix</a>
          <a href="#process">Process</a>
          <a href="#offer">Pricing</a>
          <a href="#trust">About</a>
          <a className="navCta" href="#request">Request a sprint</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <a className="availability" href={LINKEDIN_URL}>Anthony Hayward · Verify on LinkedIn ↗</a>
        <p className="eyebrow">React · Next.js · Node · Production fixes</p>
        <h1>One stuck problem,<br /><em>fixed in 48 hours.</em></h1>
        <p className="lede">For agencies and product teams with one urgent problem: a bug, a broken integration, a failed deploy, a launch blocker. I fix it in a scheduled 48-hour window for a flat $600. If it won’t fit in one sprint, I tell you before you pay.</p>
        <div className="heroActions">
          <a className="button primary" href="#request">Send what’s stuck <span>→</span></a>
          <a className="button secondary" href="#process">See how it works</a>
        </div>
        <p className="heroId">Run by <a href={LINKEDIN_URL}>Anthony Hayward</a>, a full-time software engineer who takes a small number of fixed-scope sprints outside working hours.</p>
        <div className="trustline"><span>$600 fixed</span><span>8-hour cap</span><span>7-day warranty</span><span>Written scope first</span></div>
      </section>

      <section className="marquee" aria-label="Typical rescue work">
        <div>BUG FIXES <b>+</b> API INTEGRATIONS <b>+</b> FAILED DEPLOYS <b>+</b> AUTH FLOWS <b>+</b> LAUNCH BLOCKERS <b>+</b></div>
      </section>

      <section className="section shell split" id="fit">
        <div>
          <p className="eyebrow">The right kind of problem</p>
          <h2>One contained issue.<br />A clear finish line.</h2>
          <p className="sectionCopy">This sprint exists for the ticket that matters right now but shouldn’t eat your team’s week or turn into an open-ended engagement. Not sure yours qualifies? Send it anyway. The worst case is a fast, honest “not a fit.”</p>
        </div>
        <ul className="fixList">
          {fixes.map((fix, i) => <li key={fix}><span>0{i + 1}</span>{fix}</li>)}
        </ul>
      </section>

      <section className="darkSection" id="process">
        <div className="shell">
          <p className="eyebrow light">How it works</p>
          <h2>From stuck to shipped.</h2>
          <div className="steps">
            <article><span>01</span><h3>Send the symptom</h3><p>Use the form below: what happens, what should happen, your stack, and the deadline. Five minutes, no call.</p></article>
            <article><span>02</span><h3>Get a written fit decision</h3><p>A firm $600 scope, a $200 diagnostic if the cause is unknown, or a straight “not a fit” with reasons. Always in writing, always before payment.</p></article>
            <article><span>03</span><h3>Reserve the window</h3><p>A $360 deposit (60%) and repository access lock a scheduled 48-hour window. The remaining $240 is due when you accept the work.</p></article>
            <article><span>04</span><h3>Verify and ship</h3><p>Tested code, deployment help, and a written cause-and-fix summary, backed by one in-scope revision and a seven-day regression warranty.</p></article>
          </div>
        </div>
      </section>

      <section className="section shell offer" id="offer">
        <div className="offerHeader">
          <div><p className="eyebrow">The package</p><h2>48-Hour Web<br />Rescue Sprint</h2></div>
          <div className="price"><strong>$600</strong><span>fixed scope</span></div>
        </div>
        <div className="offerGrid">
          <div><h3>Included</h3><ul>{included.map(item => <li key={item}>✓ {item}</li>)}</ul></div>
          <div><h3>Not included</h3><ul className="muted">{excluded.map(item => <li key={item}>{item}</li>)}</ul></div>
        </div>
        <div className="altGrid">
          <div className="altCard"><h3>$200 prepaid diagnostic</h3><p>For when the cause is unknown. You get a written diagnosis and a recommended fix, useful whoever implements it, including your own team.</p></div>
          <div className="altCard"><h3>$900 extended sprint</h3><p>The same structure with a higher hour cap, agreed in writing up front, for problems that are clearly bigger than eight hours.</p></div>
        </div>
      </section>

      <section className="section shell proof" id="trust">
        <p className="eyebrow">Who you’re hiring</p>
        <h2>A working engineer.<br />Not an agency.</h2>
        <p className="sectionCopy">I’m Anthony Hayward. I hold a full-time software-engineering role and take a small number of fixed-scope sprints outside those hours, on my own equipment and accounts. That structure is the point: the scope is written, the hours are capped, and I turn down work that doesn’t fit. There are no logos or testimonials here to take on faith. Verify me directly instead.</p>
        <div className="proofGrid">
          {verify.map(item => (
            <article key={item.title}><span>{item.tag}</span><h3>{item.title}</h3><p>{item.copy}</p><a href={item.url}>{item.label}</a></article>
          ))}
        </div>
      </section>

      <section className="section shell" id="answers">
        <p className="eyebrow">Straight answers</p>
        <h2>The questions<br />I’d ask too.</h2>
        <div className="answers">
          {answers.map(item => (
            <article key={item.q}><h3>{item.q}</h3><p>{item.a}</p></article>
          ))}
        </div>
      </section>

      <section className="request" id="request">
        <div className="shell requestInner">
          <div><p className="eyebrow light">Request a sprint</p><h2>What’s stuck?</h2><p>Describe it in plain words: what happens now, what should happen, your stack, your deadline. You’ll get a written fit decision: a firm $600 scope, a $200 diagnostic recommendation, or an honest “not a fit.” No call, no sales sequence, no mailing list.</p></div>
          <form className="requestCard" onSubmit={submitRequest}>
            <div className="formRow"><label>Name<input name="name" required /></label><label>Company<input name="company" required /></label></div>
            <label>Website<input name="website" type="url" placeholder="https://" /></label>
            <label>What happens now versus what should happen?<textarea name="problem" rows={4} required /></label>
            <div className="formRow"><label>Stack / hosting<input name="stack" required /></label><label>Deadline<input name="deadline" required /></label></div>
            <div className="formRow"><label>Budget<select name="budget"><option>$600 rescue sprint</option><option>$200 diagnostic</option><option>$900 extended sprint</option><option>Unsure</option></select></label><label>Safe test access?<select name="access"><option>Yes</option><option>No</option><option>Unsure</option></select></label></div>
            <button className="button primary full" type="submit">Prepare email request <span>→</span></button>
            <small>This opens your email app with the request prefilled. No information is stored on this site.</small>
            <a className="emailFallback" href={mailto}>Or email directly</a>
          </form>
        </div>
      </section>

      <footer className="shell footer">
        <span>48H / RESCUE</span>
        <div><a href={PORTFOLIO_URL}>Portfolio</a><a href={GITHUB_URL}>GitHub</a><a href={LINKEDIN_URL}>LinkedIn</a><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div>
        <small>Independent development service. Client confidentiality respected.</small>
      </footer>
    </main>
  );
}
