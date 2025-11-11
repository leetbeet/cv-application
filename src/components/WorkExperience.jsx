import { useState } from 'react';

export default function WorkExperience({
  jobTitleInit = '',
  companyInit = '',
  startDateInit = '',
  endDateInit = '',
  descriptionInit = '',
}) {
  const [jobTitle, setJobTitle] = useState(jobTitleInit);
  const [company, setCompany] = useState(companyInit);
  const [startDate, setStartDate] = useState(startDateInit);
  const [endDate, setEndDate] = useState(endDateInit);
  const [description, setDescription] = useState(descriptionInit);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // code to send data to resume
  };

  return submitted ? (
    <ExperienceButton
      jobTitle={jobTitle}
      company={company}
      startDate={startDate}
      endDate={endDate}
      description={description}
      onEdit={() => setSubmitted(false)}
    />
  ) : (
    <form onSubmit={handleSubmit}>
      <label>
        Job Title
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </label>
      <label>
        Company
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </label>
      <div>
        <label>
          Start Date
          <input
            type="text"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          End Date
          <input
            type="text"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
      </div>
      <label>
        Description
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}
