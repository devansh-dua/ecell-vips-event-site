import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock3, MapPin, Share2 } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import './OrientationEventPage.css';

const eventUrl = '/events/ecell-orientation-2026';

const foundationLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/llm4s-foundation/' },
  { label: 'Reddit', href: 'https://www.reddit.com/user/llm4s_foundation/' },
  { label: 'X / Twitter', href: 'https://x.com/llm4sfoundation/' },
  { label: 'Bluesky', href: 'https://bsky.app/profile/llm4s-foundation.bsky.social' },
  { label: 'Mastodon', href: 'https://mastodon.social/@llm4s_foundation/' },
  { label: 'Instagram', href: 'https://www.instagram.com/llm4s/' },
];

const speakerLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kannupriyakalra/' },
  { label: 'X / Twitter', href: 'https://x.com/KannupriyaKalra' },
  { label: 'Bluesky', href: 'https://bsky.app/profile/kannupriyakalra.bsky.social' },
  { label: 'Functional Café', href: 'https://functional.cafe/@kannupriyakalra' },
  { label: 'Instagram', href: 'https://www.instagram.com/kannupriyakalra/' },
  { label: 'GitHub', href: 'https://github.com/kannupriyakalra' },
];

export default function OrientationEventPage() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = 'E-Cell Orientation & Pitch Please | E-Cell VIPS-TC';
    return () => { document.title = 'E-Cell VIPS'; };
  }, []);

  const shareEvent = async () => {
    const url = `${window.location.origin}${eventUrl}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: 'E-Cell Orientation & Pitch Please Competition', url });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      // The page remains usable when clipboard access is unavailable.
    }
  };

  return (
    <PageWrapper>
      <main className="orientation-page">
        <div className="orientation-shell">
          <Link className="orientation-back" to="/events"><ArrowLeft size={16} aria-hidden="true" /> Back to events</Link>

          <figure className="orientation-banner">
            <img src="/llm4s-retrospective-banner.jpg" alt="LLM4S Foundation: A Retrospective technical session banner with Kannupriya Kalra, VIPS-TC campus, 23 October 2026 at 10 AM" />
            <figcaption>Official technical session banner · E-Cell VIPS-TC</figcaption>
          </figure>

          <div className="orientation-hero">
            <div className="orientation-intro">
              <div className="orientation-eyebrow"><span className="orientation-eyebrow-line" /> E-CELL VIPS-TC <span className="orientation-eyebrow-dot">/</span> 2026</div>
              <p className="orientation-kicker">School of Engineering &amp; Technology presents</p>
              <h1>E-Cell <span>Orientation</span> &amp; Pitch Please Competition</h1>
              <p className="orientation-lede">An introduction to the Entrepreneurship Cell, with a guest session on how an open-source community can open a path into AI engineering.</p>

              <div className="orientation-facts" aria-label="Event information">
                <div className="orientation-fact"><CalendarDays size={21} aria-hidden="true" /><div><span>Date</span><strong>Friday, 23 October 2026</strong></div></div>
                <div className="orientation-fact"><Clock3 size={21} aria-hidden="true" /><div><span>Time</span><strong>10 AM onwards</strong></div></div>
                <div className="orientation-fact"><MapPin size={21} aria-hidden="true" /><div><span>Venue</span><strong>Seminar Hall, Block-C</strong></div></div>
              </div>

              <div className="orientation-actions">
                <a className="orientation-primary-action" href="#about-event">Explore the event <span aria-hidden="true">↓</span></a>
                <button className="orientation-share" type="button" onClick={shareEvent} aria-label={copied ? 'Event link copied' : 'Share event'}><Share2 size={17} aria-hidden="true" /> {copied ? 'Link copied' : 'Share event'}</button>
              </div>
            </div>
          </div>

          <div className="orientation-divider" />

          <section id="about-event" className="orientation-section orientation-about">
            <div className="orientation-section-label">01 / The event</div>
            <div className="orientation-copy">
              <h2>Where ideas meet the people who build them.</h2>
              <p>Join the Entrepreneurship Cell at Vivekananda Institute of Professional Studies – Technical Campus for its orientation and Pitch Please Competition. The event brings students together around ideas, initiative and the work of turning curiosity into something real.</p>
              <p>The guest session features <strong>Ms. Kannupriya Kalra</strong>, co-founder of LLM4S Foundation. Her retrospective traces the community from an idea in January 2025 to a global network of more than 400 Scala and AI members, with a practical focus on how developers can get involved.</p>
            </div>
          </section>

          <section className="orientation-feature" aria-labelledby="session-heading">
            <div className="orientation-feature-top"><span>Guest session</span><span>Scala / AI / Open source</span></div>
            <div className="orientation-feature-grid">
              <div>
                <p className="orientation-section-label">A conversation with Kannupriya Kalra</p>
                <h2 id="session-heading">LLM4S Foundation:<br /><em>A Retrospective</em></h2>
              </div>
              <p>From the Scala open-source ecosystem to a remote-first space for mentorship, technical talks and real contributions: the story of a community built to help Scala and JVM developers grow into AI engineering.</p>
            </div>
          </section>

          <section className="orientation-section orientation-description" aria-labelledby="description-heading">
            <div className="orientation-section-label">02 / Talk description</div>
            <div className="orientation-copy">
              <h2 id="description-heading">The first chapter of LLM4S Foundation.</h2>
              <p>This talk is a retrospective on the first chapter of LLM4S Foundation: how it grew from an idea in January 2025 into a 400+ member global Scala and AI community, and how Scala developers can now use this community to start or accelerate their journey into AI engineering.</p>
              <p>I will share how my work in the Scala open-source ecosystem since 2022—including ScalaBridge, the London Scala User Group, the Scala Center, and Google Summer of Code—helped shape LLM4S Foundation into a practical, remote-first space for learning, open-source contribution, mentorship, technical talks, networking, and global internship opportunities.</p>
              <p>The session will focus on how developers can leverage LLM4S Foundation today: joining our weekly Dev Hours every Sunday at 9:00 AM London time, meeting maintainers and principal Scala developers, learning from experienced mentors, contributing to a real Scala AI library, giving technical talks, building a public open-source track record, and developing practical AI skills without the barrier of expensive AI education.</p>
              <p>I will also explore why this matters for the wider Scala ecosystem. As AI becomes increasingly central to software engineering, Scala developers need an accessible path into AI that builds on their existing strengths in type safety, functional programming, backend engineering, distributed systems, and open source. LLM4S Foundation aims to create that path by bringing together people who want to learn, build, mentor, fund, and grow the Scala + AI ecosystem.</p>
              <p>Attendees will leave with practical ways to participate in the community, find contribution opportunities, learn from experienced mentors, explore global internship and career pathways, and develop their own AI skills while helping Scala/JVM become a serious home for production-ready AI engineering.</p>
            </div>
          </section>

          <section className="orientation-section orientation-agenda" aria-labelledby="explore-heading">
            <div className="orientation-section-label">03 / What you’ll explore</div>
            <div className="orientation-copy">
              <h2 id="explore-heading">A practical starting point.</h2>
              <div className="orientation-topics">
                <article><span>01</span><h3>The story so far</h3><p>How ScalaBridge, the London Scala User Group, the Scala Center and Google Summer of Code helped shape LLM4S Foundation.</p></article>
                <article><span>02</span><h3>Ways to participate</h3><p>Meet maintainers and mentors, attend weekly Dev Hours, contribute to the Scala AI library and build a public open-source record.</p></article>
                <article><span>03</span><h3>Why it matters</h3><p>Explore an accessible route into AI that builds on type safety, functional programming, backend engineering and distributed systems.</p></article>
                <article><span>04</span><h3>What comes next</h3><p>Leave with concrete ways to find a first issue, keep learning with the community and explore global internship and career pathways.</p></article>
              </div>
            </div>
          </section>

          <section className="orientation-contribute" aria-labelledby="contribute-heading">
            <div><div className="orientation-section-label">Start here</div><h2 id="contribute-heading">Your first open-source contribution</h2><p>Find a good first issue, discuss it with maintainers, make a focused change and submit a pull request. The LLM4S community offers a place to learn this process alongside other developers.</p></div>
            <div className="orientation-resource-links">
              <a href="https://llm4s.org/contribute/" target="_blank" rel="noopener noreferrer">Contribution guide <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a href="https://github.com/llm4s/llm4s/issues?q=label%3A%22good+first+issue%22" target="_blank" rel="noopener noreferrer">Explore good first issues <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a href="https://llm4s.org/events/" target="_blank" rel="noopener noreferrer">Community events &amp; Dev Hours <ArrowUpRight size={17} aria-hidden="true" /></a>
              <div className="orientation-follow">
                <span className="orientation-section-label">Follow LLM4S Foundation</span>
                <ul className="orientation-chips" aria-label="LLM4S Foundation on social media">
                  {foundationLinks.map((link) => (
                    <li key={link.href}><a href={link.href} target="_blank" rel="noopener noreferrer">{link.label} <ArrowUpRight size={14} aria-hidden="true" /></a></li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="orientation-section orientation-speaker" aria-labelledby="speaker-heading">
            <div className="orientation-section-label">04 / About the speaker</div>
            <div className="orientation-speaker-grid">
              <div className="orientation-copy">
                <h2 id="speaker-heading">Kannupriya Kalra</h2>
                <p className="orientation-speaker-role">Co-Founder, LLM4S Foundation · Creator of LLM4S</p>
                <p>Kannupriya Kalra is the Co-Founder of the LLM4S Foundation and creator of LLM4S, an AI-native platform for Scala. She is an engineering leader based in London.</p>
                <p>She contributes to the AI and Scala open-source ecosystem through the Scala Center and Google Open Source and has led the Google Summer of Code programs for the Scala Center in 2024 and 2025. She is also collaborating with Manning Publishing in New York City to create practical AI learning resources for developers.</p>
                <p>A global speaker, Kannupriya has presented on AI, Scala, and open source in more than ten countries. She is passionate about empowering developers through hands-on generative AI projects, meaningful open-source contributions, mentorship, and responsible AI education.</p>
                <p>Her engineering experience includes building scalable backend systems using functional Scala at Sky in London.</p>
                <p>You can learn more about her work on <a className="orientation-inline-link" href="https://www.linkedin.com/in/kannupriyakalra/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
                <ul className="orientation-chips" aria-label="Kannupriya Kalra online">
                  {speakerLinks.map((link) => (
                    <li key={link.href}><a href={link.href} target="_blank" rel="noopener noreferrer">{link.label} <ArrowUpRight size={14} aria-hidden="true" /></a></li>
                  ))}
                </ul>
              </div>
              <figure className="orientation-poster">
                <img src="/ecell-orientation-poster.jpg" alt="Official E-Cell Orientation and Pitch Please Competition poster featuring Ms. Kannupriya Kalra" loading="lazy" />
                <figcaption>Original E-Cell orientation poster · VIPS-TC</figcaption>
              </figure>
            </div>
          </section>

          <section className="orientation-bottom" aria-label="Speaker and organiser">
            <div><span>Resource person</span><strong>Ms. Kannupriya Kalra</strong><p>Co-founder, LLM4S Foundation</p></div>
            <div><span>Organised by</span><strong>Entrepreneurship Cell</strong><p>VIPS-TC · School of Engineering &amp; Technology</p></div>
          </section>
          <footer className="orientation-footer"><span>E-Cell VIPS-TC</span><Link to="/events">View all events <span aria-hidden="true">↗</span></Link></footer>
        </div>
      </main>
    </PageWrapper>
  );
}
