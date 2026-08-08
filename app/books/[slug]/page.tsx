import Link from "next/link";
import { notFound } from "next/navigation";

const books: Record<string, {title:string; subtitle:string; theme:string; summary:string; synopsis:string[]; image?:string}> = {
  "ravens-revenge": {
    title: "Raven’s Revenge", subtitle: "A Ramona Gonzalez Mystery", theme: "Nature · Science · Justice", image: "/images/raven.png",
    summary: "A scientist and her husband are murdered on a remote island in the Salish Sea. Their creation—a virus engineered to kill ravens—has disappeared.",
    synopsis: [
      "The conflict between those who cherish nature and those who seek dominion over it has shaped the Pacific Northwest since the arrival of the New People. In Raven’s Revenge, that conflict becomes murder.",
      "When a woman scientist and her husband are found dead on a remote island in the Salish Sea, Detective Ramona Gonzalez discovers that the pair created a terrifying biological weapon: a virus engineered to kill ravens. The scientist’s reasons are unclear, the virus is missing, and the trail draws Ramona into two worlds that view the land—and humanity’s place within it—in radically different ways.",
      "Steilacoom and other tribal elders warn of consequences reaching far beyond a single crime. A raven clan elder is determined to protect the birds at the center of his people’s traditions. Opposing him is the righteous leader of a shadowy, pseudo-religious group convinced that mankind holds a God-given right to dominate the earth and all its creatures.",
      "As the danger of the virus grows, Ramona is torn between her duty to expose a killer and her sympathy for those defending the natural world. To prevent a wider catastrophe, she must learn why such a monstrous weapon was created, who was desperate enough to stop it—and whether justice can be separated from conscience."
    ]
  },
  "assisted-killing": {
    title: "Assisted Killing", subtitle: "A Ramona Gonzalez Mystery", theme: "Elders · Art · Reckoning",
    summary: "A nurse with a history of exploiting vulnerable elders is found dead in an elegant senior residence. Then a valuable artwork disappears—and another body follows.",
    synopsis: [
      "Even the wealthiest elders can be shunted away to senior living facilities, places that range from the opulent to the bedraggled. They are keepers of wisdom and memory, but they are also increasingly vulnerable targets for abuse.",
      "Detective Mort Walters has just finished dinner and a movie with his wealthy mother at her new home, Seaview Plaza Residences in University Place. When they return to her apartment, they find nurse Matty McDoughall dead on the living room floor. Walters immediately recuses himself and calls his partner, Detective Ramona Gonzalez, to lead the investigation.",
      "McDoughall was known for cultivating relationships with residents and acquiring their valuable artworks for far less than they were worth. When a prized piece disappears from her apartment and her apparent partner in the scheme is also murdered, Ramona confronts a residence alive with old loyalties, rivalries, guarded memories, and long-held grievances.",
      "Was the motive greed, jealousy, or revenge? Each resident offers a fragment of the truth, but age has made some memories uncertain and others dangerously precise. Ramona becomes convinced that the present killings are connected to a murder committed in the distant past—perhaps by one of Seaview Plaza’s own elderly residents. To solve the case, she must decide whose history can be trusted before another secret is permanently silenced."
    ]
  },
  "chain-reaction": {
    title: "Chain Reaction", subtitle: "A Jimmy Elmore Thriller", theme: "Corruption · Trafficking · Pursuit", image: "/images/chain-reaction.png",
    summary: "A former Special Forces soldier witnesses his journalist neighbor’s assassination—and is drawn into a conspiracy that reaches from Seattle to the highest levels of power.",
    synopsis: [
      "Jimmy Elmore has seen more than his share of killing. Now he lives quietly in Seattle’s Madison Valley, tending his garden and keeping the past at a distance. One early morning, he witnesses the assassination of his journalist neighbor, Jordan, by a killer working for corrupt senior police officials.",
      "Elmore joins forces with Jordan’s half-sister, Camille Cunningham, to uncover what she died trying to expose. The trail leads to a rogue offshoot of MS-13 that traffics young women under the command of a mysterious figure known only as El Gallo. As the killers close in, Elmore’s former CIA contact uncovers a disturbing lead: El Gallo is operating in Colorado, dangerously close to the school attended by Camille’s daughter.",
      "El Gallo’s reach extends far beyond organized crime. He trades sexual access to vulnerable women for classified information, political protection, and money, binding powerful officials to his operation through secrecy and fear.",
      "The events accelerate like a chain reaction, each revelation triggering new danger. Elmore’s pragmatic experience and fearlessness are matched by Camille’s caution and insight, but neither can succeed alone. Pursued across states and forced to trust one another, they must find El Gallo, expose the officials shielding him, and bring the network to justice before the conspiracy claims someone they love."
    ]
  }
};

export default async function BookPage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params; const book=books[slug]; if(!book) notFound();
  return <main className="detail-page">
    <header className="nav-wrap nav-dark"><Link className="wordmark" href="/"><span>GOSS</span> CLARK</Link><nav><Link href="/#books">Books</Link><Link href="/about">About</Link><Link href="/journal">Journal</Link></nav></header>
    <section className="detail-hero">
      <div className={`detail-art ${slug}`}>{book.image && <img src={book.image} alt=""/>}<div><small>GOSS CLARK</small><strong>{book.title}</strong></div></div>
      <div className="detail-intro"><p className="section-label">{book.subtitle}</p><h1>{book.title}</h1><p className="theme-line">{book.theme}</p><p className="lead">{book.summary}</p><div className="availability">Publication details coming soon</div></div>
    </section>
    <section className="synopsis"><div><p className="section-label">FULL SYNOPSIS</p><h2>A story of consequence</h2></div><div>{book.synopsis.map((p,i)=><p key={i}>{p}</p>)}</div></section>
    <div className="back-row"><Link className="text-link" href="/#books">← Back to all books</Link></div>
    <footer><Link className="wordmark footer-mark" href="/"><span>GOSS</span> CLARK</Link><p>Mystery & crime fiction from the Pacific Northwest.</p></footer>
  </main>
}
