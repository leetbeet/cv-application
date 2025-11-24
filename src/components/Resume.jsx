export default function Resume({ general, education, work }) {
  const { name, email, phoneNum } = general;

  return (
    <div className="resume">
      <header className="resume-header">
        <h1>{name}</h1>
        <div className="contact">
          <span>{email}</span>
          <span>{phoneNum}</span>
        </div>
      </header>

      <Section title="Education">
        {education.map((edu, i) => (
          <EducationEntry key={i} {...edu} />
        ))}
      </Section>

      <Section title="Professional Experience">
        {work.map((job, i) => (
          <WorkEntry key={i} {...job} />
        ))}
      </Section>
    </div>
  );
}

export function Section({ title, children }) {
  return (
    <section className="resume-section">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}
