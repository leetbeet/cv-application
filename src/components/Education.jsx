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

  const handleDegreeChange = (e) => {
    setDegree(e.target.value);
  };

  const handleSchoolChange = (e) => {
    setSchool(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

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
    ></EducationButton>
  ) : (
    <form onSubmit={handleSubmit}>
      <label>
        Degree
        <input type="text" value={degree} onChange={handleDegreeChange} />
      </label>
      <label>
        School
        <input type="text" value={school} onChange={handleSchoolChange} />
      </label>
      <div>
        <label>
          Start date
          <input
            type="text"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </label>
        <label>
          End date
          <input type="text" value={endDate} onChange={handleEndDateChange} />
        </label>
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
