
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import "../sample-post/sample-post.css";
import Image from "next/image";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { PortableTextComponents } from "@portabletext/react";


const portableTextComponents: PortableTextComponents = {
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) return null;

            return (
                <figure className="journal-inline-image">
                    <Image
                        src={imageBuilder
                            .image(value)
                            .width(1200)
                            .url()}
                        alt={value.alt || "Journal article image"}
                        width={1200}
                        height={800}
                        sizes="(max-width: 768px) 100vw, 800px"
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                    />

                    {value.caption && (
                        <figcaption>{value.caption}</figcaption>
                    )}
                </figure>
            );
        },
    },
};

export const dynamic = "force-dynamic";


const imageBuilder = createImageUrlBuilder(client);

type Article = {
    title: string;
    publishedAt: string | null;
    body: any[];
    category: string | null;
    mainImage?: {
        asset: {
            _ref: string;
        };
        alt?: string;
    };
};
const query = `
  *[
    _type == "post" &&
    slug.current == $slug &&
    !(_id in path("drafts.**"))
  ][0] {
    title,
    publishedAt,
    body,
    mainImage,
    "category": categories[0]->title
  }
`;
export default async function JournalArticle({
                                                 params,
                                             }: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const article = await client.fetch<Article | null>(
        query,
        { slug }
    );

    if (!article) {
        notFound();
    }

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

        <section className="sample-article-hero">
    <div className="sample-article-hero-inner">
    <Link
        href="/journal"
    className="sample-article-back"
        >
            ← Back to Journal
    </Link>

    <p className="section-label">
        {article.category ?? "THE JOURNAL"}
        </p>

        <h1>{article.title}</h1>

    {article.publishedAt && (
        <p className="sample-article-meta">
            {new Date(
                    article.publishedAt
                ).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </p>
    )}
    </div>
    </section>

            <article className="sample-article-body">
                <div>
                    {article.mainImage?.asset?._ref && (
                        <div className="journal-featured-image">
                            <Image
                                src={imageBuilder
                                    .image(article.mainImage)
                                    .width(1200)
                                    .url()}
                                alt={article.mainImage.alt || article.title}
                                width={1200}
                                height={675}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    )}

                    <PortableText
                        value={article.body ?? []}
                        components={portableTextComponents}
                    />                </div>
            </article>

    <footer>
    <Link className="wordmark footer-mark" href="/">
        <span>GOSS</span> CLARK
        </Link>
        <p>
        Mystery &amp; crime fiction from the
    Pacific Northwest.
    </p>
    </footer>
    </main>
);
}
