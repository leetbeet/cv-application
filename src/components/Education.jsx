import { useState } from 'react';

export default function Education({
  degreeInit = '',
  schoolInit = '',
  startDateInit = '',
  endDateInit = '',
}) {
  const [degree, setDegree] = useState(degreeInit);
  const [school, setSchool] = useState(schoolInit);
  const [startDate, setStartDate] = useState(startDateInit);
  const [endDate, setEndDate] = useState(endDateInit);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // code to send data to resume
  };

  return submitted ? (
    <EducationButton
      degree={degree}
      school={school}
      startDate={startDate}
      endDate={endDate}
      onEdit={() => setSubmitted(false)}
    />
  ) : (
    <form onSubmit={handleSubmit}>
      <label>
        Degree
        <input
          type="text"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        />
      </label>
      <label>
        School
        <input
          type="text"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
      </label>
      <div>
        <label>
          Start date
          <input
            type="text"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          End date
          <input
            type="text"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

function EducationButton({ degree, school, onEdit }) {
  return (
    <div
      className="openFormBtn"
      role="button"
      aria-label="change education information"
      tabIndex={0}
      onClick={onEdit}
    >
      <h2>{school}</h2>
      <h3>{degree}</h3>
    </div>
  );
}
