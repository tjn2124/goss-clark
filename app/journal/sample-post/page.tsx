import type { Metadata } from "next";
import Link from "next/link";
import "./sample-post.css";

export const metadata: Metadata = {
  title: "Sample Journal Post | Goss Clark",
  description: "A temporary design preview of the Goss Clark Journal article layout.",
  robots: { index: false, follow: false },
};

export default function SampleJournalPost() {
  return (
    <main className="interior-page sample-article">
      <header className="nav-wrap nav-dark">
        <Link className="wordmark" href="/public"><span>GOSS</span> CLARK</Link>
        <nav><Link href="/public#books">Books</Link><Link href="/about">About</Link><Link href="/journal">Journal</Link></nav>
      </header>

      <section className="sample-article-hero">
        <div className="sample-article-hero-inner">
          <Link href="/journal" className="sample-article-back">← All journal entries</Link>
          <p className="section-label">THE JOURNAL / CRAFT</p>
          <h1>Why mystery is the right form for moral conflict</h1>
          <p className="sample-article-deck">The most compelling question in a mystery is not always who did it, but what a community is willing to hide.</p>
          <div className="sample-article-meta"><span>By Goss Clark</span><span>Sample article · Draft preview</span><span>5 min read</span></div>
        </div>
      </section>

      <article className="sample-article-body">
        <p className="sample-article-notice">DESIGN SAMPLE — Placeholder editorial text, not a published essay by Goss Clark.</p>
        <p className="sample-article-lead">A mystery begins with a rupture: something has happened that cannot be easily explained. But the questions that linger are rarely confined to the crime itself.</p>
        <p>What interests me about the form is the way an investigation unsettles the stories people tell about themselves. A familiar place becomes strange. Ordinary conversations take on new meaning. A detail that once seemed unimportant begins to demand attention.</p>
        <h2>What a community protects</h2>
        <p>In fiction, a secret rarely belongs to just one person. Families, institutions, and entire towns can become invested in preserving a version of events. The investigator’s work is to test those stories against what actually happened.</p>
        <blockquote>“The mystery may begin with a crime. The deeper story begins with the choices people make afterward.”</blockquote>
        <p>That tension creates room for questions of loyalty, responsibility, and compromise. How much truth can a community tolerate? When does protecting someone become an act of harm?</p>
        <h2>Place as more than a backdrop</h2>
        <p>The Pacific Northwest offers an especially evocative setting for these questions. Water connects and divides. Weather changes plans. Distance can offer privacy, but it can also make people dependent on one another.</p>
        <p>These are the kinds of tensions I want the Journal to explore: the relationship between setting and story, the research behind a novel, and the moral questions that make a mystery worth following to its end.</p>
        <div className="sample-article-endmark">✦</div>
      </article>

      <section className="sample-article-footer"><p className="section-label">CONTINUE READING</p><h2>More from the writing desk</h2><Link className="sample-article-back" href="/journal">← Return to the Journal</Link></section>
      <footer><Link className="wordmark footer-mark" href="/public"><span>GOSS</span> CLARK</Link><p>Mystery & crime fiction from the Pacific Northwest.</p></footer>
    </main>
  );
}
