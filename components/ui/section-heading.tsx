import { ReactNode } from "react";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  action?: ReactNode;
}) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <Reveal className={`flex flex-col gap-3 ${alignment}`}>
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className={`flex flex-col gap-3 ${alignment}`}>
          {eyebrow ? (
            <span className="inline-flex w-fit items-center rounded-full bg-blush px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-coral-dark">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="max-w-xl text-base text-ink-soft sm:text-lg">{description}</p>
          ) : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </Reveal>
  );
}
