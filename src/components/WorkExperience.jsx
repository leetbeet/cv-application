import { useState, useEffect } from 'react';

export default function WorkExperience({
  entries = [],
  onSubmit,
  onUpdate,
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
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    if (editingIndex === null) {
      setJobTitle('');
      setCompany('');
      setStartDate('');
      setEndDate('');
      setDescription('');
    } else {
      const e = entries[editingIndex] || {};
      setJobTitle(e.jobTitle || '');
      setCompany(e.company || '');
      setStartDate(e.startDate || '');
      setEndDate(e.endDate || '');
      setDescription(e.description || '');
    }
  }, [editingIndex, entries]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { jobTitle, company, startDate, endDate, description };
    if (editingIndex === null) {
      onSubmit(payload);
    } else {
      onUpdate(editingIndex, payload);
    }
    setEditingIndex(null);
    setJobTitle('');
    setCompany('');
    setStartDate('');
    setEndDate('');
    setDescription('');
  };

  const handleEditClick = (idx) => {
    setEditingIndex(idx);
  };

  return (
    <>
      <div
        className="entries-list"
        style={{ display: entries.length ? 'block' : 'none', marginBottom: 12 }}
      >
        {entries.map((entry, i) => (
          <div
            key={i}
            className="openFormBtn"
            role="button"
            aria-label={`edit work ${i}`}
            tabIndex={0}
            onClick={() => handleEditClick(i)}
            onKeyDown={(ev) => ev.key === 'Enter' && handleEditClick(i)}
            style={{ marginBottom: 10 }}
          >
            <h2>{entry.jobTitle}</h2>
            <h3>{entry.company}</h3>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Job Title
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Enter Job Title"
          />
        </label>
        <label>
          Company
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Enter Company"
          />
        </label>
        <div>
          <label style={{ flex: 1 }}>
            Start Date
            <input
              type="text"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="dd/mm/yyyy"
            />
          </label>
          <label style={{ flex: 1 }}>
            End Date
            <input
              type="text"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="dd/mm/yyyy"
            />
          </label>
        </div>
        <label>
          Description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Main tasks"
          />
        </label>
        <button type="submit">
          {editingIndex === null ? 'Save' : 'Update'}
        </button>
      </form>
    </>
  );
}
