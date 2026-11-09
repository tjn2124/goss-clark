
import Link from "next/link";
import { client } from "../../sanity/lib/client";

export const dynamic = "force-dynamic";

type JournalPost = {
    _id: string;
    title: string;
    slug: string;
    publishedAt: string | null;
    excerpt: string | null;
    category: string | null;
};

const query = `
  *[
    _type == "post" &&
    defined(slug.current) &&
    !(_id in path("drafts.**"))
  ] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    "excerpt": pt::text(body),
    "category": categories[0]->title
  }
`;

const notes = [
    {
        tag: "CRAFT",
        title: "Why mystery is the right form for moral conflict",
        date: "A note from Goss",
        text: "A mystery begins with a rupture, but its deeper question is rarely only who committed the crime. I’m interested in what the investigation reveals about a community: what people protect, what they conceal, and which compromises they can live with. This journal will be a place to share more about those choices and the craft behind them.",
    },
    {
        tag: "PLACE",
        title: "Listening to the Salish Sea",
        date: "From the writing desk",
        text: "In Raven’s Revenge, water separates communities and connects them. Islands preserve secrets, weather changes plans, and ravens watch from the shoreline. The Pacific Northwest does more than furnish a backdrop; its natural world presses on every decision the characters make.",
    },
    {
        tag: "WORK IN PROGRESS",
        title: "Three books, three kinds of consequence",
        date: "Looking ahead",
        text: "Raven’s Revenge considers dominion over nature. Assisted Killing turns toward the dignity and vulnerability of elders. Chain Reaction follows the machinery of exploitation and political corruption. Each story asks a different question, but all are concerned with what human beings owe one another.",
    },
];

export default async function Journal() {
    const posts = await client.fetch<JournalPost[]>(query);

    return (
        <main className="interior-page">
            <header className="nav-wrap nav-dark">
                <Link className="wordmark" href="/">
                    <span>GOSS</span> CLARK
                </Link>
                <nav>
                    <Link href="/#books">Books</Link>
                    <Link href="/about">About</Link>
                    <Link href="/journal">Journal</Link>
                </nav>
            </header>

            <section className="page-banner journal-banner">
                <p className="section-label">THE JOURNAL</p>
                <h1>Notes from the writing desk</h1>
                <p>On craft, science, place, research, and work in progress.</p>
            </section>

            <section className="notes-list">
                {posts.map((post, i) => (
                    <article key={post._id}>
                        <div>
                            <span>{String(i + 1).padStart(2, "0")}</span>
                            <small>{post.category ?? "JOURNAL"}</small>
                        </div>
                        <div>
                            <p className="note-date">
                                {post.publishedAt
                                    ? new Date(post.publishedAt).toLocaleDateString(
                                        "en-US",
                                        { year: "numeric", month: "long", day: "numeric" }
                                    )
                                    : "From the writing desk"}
                            </p>

                            <h2>{post.title}</h2>

                            {post.excerpt && (
                                <p>{post.excerpt.slice(0, 350)}</p>
                            )}

                            <Link
                                className="coming"
                                href={`/journal/${post.slug}`}
                            >
                                Read essay →
                            </Link>
                        </div>
                    </article>
                ))}

                {notes.map((note, i) => (
                    <article key={note.title}>
                        <div>
              <span>
                {String(posts.length + i + 1).padStart(2, "0")}
              </span>
                            <small>{note.tag}</small>
                        </div>
                        <div>
                            <p className="note-date">{note.date}</p>
                            <h2>{note.title}</h2>
                            <p>{note.text}</p>
                            <span className="coming">
                Full essay coming soon
              </span>
                        </div>
                    </article>
                ))}
            </section>

            <section className="newsletter">
                <p className="section-label">STAY IN THE STORY</p>
                <h2>
                    Publication news, new writing, and notes from Goss.
                </h2>
                <p>
                    An email signup can be connected here when
                    the mailing list is ready.
                </p>
            </section>

            <footer>
                <Link className="wordmark footer-mark" href="/">
                    <span>GOSS</span> CLARK
                </Link>
                <p>Mystery &amp; crime fiction from the Pacific Northwest.</p>
            </footer>
        </main>
    );
}
