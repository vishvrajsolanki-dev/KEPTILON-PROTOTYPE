import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { homeProof } from "@/data/content";

export function OperatorsTeaser() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="media-frame relative aspect-[16/11] order-2 lg:order-1">
            <Image
              src="/images/visual-operators-guides.jpg"
              alt="Operators on the floor and guides in calm counsel"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow">Operators &amp; Guides</p>
            <h2 className="display mt-4 max-w-[16ch] text-[clamp(2rem,3.6vw,3rem)]">
              We don&apos;t stop at advice.
            </h2>
            <p className="lede mt-5">
              Insight → Action. Keptilon is built for people who want the work
              after the diagnosis — systems installed, decisions made, guidance
              that stays.
            </p>
            <ul className="mt-8 space-y-5">
              {homeProof.map((item) => (
                <li key={item.title} className="border-l-2 border-[var(--green)] pl-4">
                  <h3 className="font-bold text-[var(--ink)]">{item.title}</h3>
                  <p className="mt-1 text-sm text-[var(--ink-2)]">{item.body}</p>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button href="/how-we-work" variant="ghost">
                See how we work →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
