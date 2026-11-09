
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
