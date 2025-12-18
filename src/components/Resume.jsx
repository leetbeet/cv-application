import '../styles/resume.css';

export default function Resume({ general, education, work }) {
  const { name, email, phoneNum } = general;

  return (
    <div className="resume">
      <header className="resume-header">
        <h1>{name}</h1>
        <div className="contact">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>email</title>
              <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
            </svg>
            {email}
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>phone</title>
              <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
            </svg>
            {phoneNum}
          </span>
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

export function EducationEntry({ degree, school, startDate, endDate }) {
  return (
    <div className="edu-entry">
      <div className="edu-dates">
        {startDate} – {endDate}
      </div>
      <div className="edu-main">
        <h3>{school}</h3>
        <p>{degree}</p>
      </div>
    </div>
  );
}

export function WorkEntry({
  jobTitle,
  company,
  startDate,
  endDate,
  description,
}) {
  return (
    <div className="work-entry">
      <div className="work-dates">
        {startDate} – {endDate}
      </div>

      <div className="work-main">
        <h3>{company}</h3>
        <h4>{jobTitle}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
