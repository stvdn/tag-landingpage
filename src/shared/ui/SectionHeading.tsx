type Props = { number: string; eyebrow: string; title: string; description?: string };

export function SectionHeading({ number, eyebrow, title, description }: Props) {
  return <div className="section-heading" data-reveal>
    <p className="eyebrow"><span>{number}</span> {eyebrow}</p>
    <h2>{title}</h2>
    {description && <p className="section-description">{description}</p>}
  </div>;
}
