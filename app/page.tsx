import Link from "next/link";

const books = [
  {
    slug: "ravens-revenge",
    number: "01",
    title: "Raven’s Revenge",
    kicker: "A Ramona Gonzalez Mystery",
    image: "/images/raven.png",
    className: "raven",
    summary:
      "On a remote island in the Salish Sea, a scientist and her husband are murdered—and their deadly, raven-killing virus vanishes. Detective Ramona Gonzalez must choose her way through an ancient conflict between those who cherish the natural world and those determined to dominate it.",
    status: "Forthcoming",
  },
  {
    slug: "assisted-killing",
    number: "02",
    title: "Assisted Killing",
    kicker: "A Ramona Gonzalez Mystery",
    image: null,
    className: "assisted",
    summary:
      "A predatory nurse is found murdered in an elegant senior residence, and a valuable artwork disappears. As greed, jealousy, and revenge converge, Detective Ramona Gonzalez suspects the answer lies in a killing buried deep in the residents’ past.",
    status: "In development",
  },
  {
    slug: "chain-reaction",
    number: "03",
    title: "Chain Reaction",
    kicker: "A Jimmy Elmore Thriller",
    image: "/images/chain-reaction.png",
    className: "chain",
    summary:
      "After witnessing his journalist neighbor’s assassination, former Special Forces soldier Jimmy Elmore joins forces with her half-sister. Their pursuit of the truth leads from Seattle to Colorado—and into a conspiracy built on trafficking, political power, and classified secrets.",
    status: "In development",
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav-wrap">
        <Link className="wordmark" href="/" aria-label="Goss Clark home">
          <span>GOSS</span> CLARK
        </Link>
        <nav aria-label="Main navigation">
          <a href="#books">Books</a>
          <Link href="/about">About</Link>
          <Link href="/journal">Journal</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-sky" />
        <div className="hero-ridge ridge-back" />
        <div className="hero-ridge ridge-front" />
        <div className="hero-content">
          <p className="eyebrow">Mysteries from west of the Rockies</p>
          <h1>Where the wild world<br />meets the human heart.</h1>
          <p className="hero-copy">
            Goss Clark writes crime fiction shaped by the waters, forests,
            cities, and enduring conflicts of the Pacific Northwest.
          </p>
          <a className="text-link light" href="#books">Explore the books <span>→</span></a>
        </div>
        <div className="hero-location">THE SALISH SEA · PACIFIC NORTHWEST</div>
      </section>

      <section className="manifesto">
        <p className="section-label">THE WORK</p>
        <blockquote>
          “Mystery reveals what people will <em>protect</em>,<br />
          what they will <em>exploit</em>, and what they fear losing.”
        </blockquote>
        <p>
          Stories of justice, conscience, and the contested ground between
          reverence and dominion.
        </p>
      </section>

      <section className="books-section" id="books">
        <div className="section-heading">
          <div>
            <p className="section-label">BOOKS</p>
            <h2>Stories from the edge</h2>
          </div>
          <p>Mysteries and thrillers rooted in place, science, and moral consequence.</p>
        </div>

        <div className="book-list">
          {books.map((book) => (
            <article className="book-row" key={book.slug}>
              <div className={`book-art ${book.className}`}>
                {book.image && <img src={book.image} alt="" />}
                {book.className === "assisted" && (
                  <div className="assisted-art" aria-hidden="true">
                    <span className="window" /><span className="chair" /><span className="frame" />
                  </div>
                )}
                <div className="cover-type">
                  <small>GOSS CLARK</small>
                  <strong>{book.title}</strong>
                </div>
              </div>
              <div className="book-info">
                <div className="book-meta"><span>{book.number}</span><span>{book.kicker}</span></div>
                <h3>{book.title}</h3>
                <p>{book.summary}</p>
                <Link className="text-link" href={`/books/${book.slug}`}>
                  Read the full synopsis <span>→</span>
                </Link>
              </div>
              <div className="book-status"><span />{book.status}</div>
            </article>
          ))}
        </div>
        <div className="next-book">
          <span>04</span><p>A fourth story is taking shape.</p><Link href="/journal">Follow the journal →</Link>
        </div>
      </section>

      <section className="author-teaser">
        <div className="author-landscape" role="img" aria-label="Misty evergreen forest in the Pacific Northwest" />
        <div className="author-copy">
          <p className="section-label">ABOUT THE AUTHOR</p>
          <h2>A scientist’s eye.<br />A storyteller’s conscience.</h2>
          <p>
            After a second career as a professor and scientist at a Northwest
            medical school, Goss Clark brings decades of biomedical expertise
            to mysteries concerned with the choices that define us.
          </p>
          <Link className="text-link light" href="/about">Meet Goss <span>→</span></Link>
        </div>
      </section>


      <footer>
        <Link className="wordmark footer-mark" href="/"><span>GOSS</span> CLARK</Link>
        <p>Mystery & crime fiction from the Pacific Northwest.</p>
        <div><a href="#books">Books</a><Link href="/about">About</Link><Link href="/journal">Journal</Link></div>
        <small>© {new Date().getFullYear()} Goss Clark. All rights reserved.</small>
      </footer>
    </main>
  );
}
