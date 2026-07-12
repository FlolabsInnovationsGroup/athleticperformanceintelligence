type Step = { label: string; text?: string; items?: string[] };

const stepGridClass: Record<number, string> = {
  4: "xl:grid-cols-4",
  5: "xl:grid-cols-5",
};

export function StepFlow({ steps }: { steps: Step[] }) {
  const xlCols = stepGridClass[steps.length] ?? "xl:grid-cols-3";

  return (
    <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${xlCols}`}>
      {steps.map((step, index) => (
        <article
          key={step.label}
          className="content-surface rounded-xl p-4"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand">
            Step {index + 1}
          </p>
          <h3 className="mb-2 text-base font-semibold leading-snug text-foreground">
            {step.label}
          </h3>
          {step.items ? (
            <ul className="list-disc space-y-1 pl-5 text-pretty text-sm leading-relaxed text-muted">
              {step.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-pretty text-sm leading-relaxed text-muted">{step.text}</p>
          )}
        </article>
      ))}
    </div>
  );
}
