type TierCompareCardProps = {
  tier: string;
  title: string;
  needs: string[];
  includes: string[];
  outcome: string;
  progression: string;
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="text-pretty pl-0.5 leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function TierCompareCard({
  tier,
  title,
  needs,
  includes,
  outcome,
  progression,
}: TierCompareCardProps) {
  return (
    <article className="content-surface grid grid-rows-subgrid gap-5 rounded-xl p-5 row-span-5 md:gap-6 md:p-6">
      <header className="space-y-1.5">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">
          {tier}
        </p>
        <h3 className="font-display text-lg font-semibold leading-snug text-foreground md:text-xl min-[1400px]:text-2xl">
          {title}
        </h3>
      </header>

      <div className="text-sm">
        <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
          Needs
        </p>
        <BulletList items={needs} />
      </div>

      <div className="border-t border-card-border pt-5 text-sm">
        <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
          Includes
        </p>
        <BulletList items={includes} />
      </div>

      <p className="text-pretty text-sm leading-relaxed text-foreground">{outcome}</p>

      <p className="self-end border-t border-card-border pt-4 text-sm font-medium whitespace-nowrap text-brand">
        {progression}
      </p>
    </article>
  );
}
