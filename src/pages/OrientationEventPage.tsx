import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock3, MapPin, Share2 } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import './OrientationEventPage.css';

const eventUrl = '/events/ecell-orientation-2026';

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
            <figure className="orientation-poster">
              <img src="/ecell-orientation-poster.jpg" alt="Official E-Cell Orientation and Pitch Please Competition poster featuring Ms. Kannupriya Kalra" />
              <figcaption>Official event poster · E-Cell VIPS-TC</figcaption>
            </figure>
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

          <section className="orientation-section orientation-agenda" aria-labelledby="explore-heading">
            <div className="orientation-section-label">02 / What you’ll explore</div>
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
