import { useState } from 'react';
import DropDown from './DropDown';
import GeneralInfo from './GeneralInfo';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Resume from './Resume';
import '../styles/form.css';

export default function App() {
  const [general, setGeneral] = useState({
    name: '',
    email: '',
    phoneNum: '',
  });

  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);

  const handleGeneralSubmit = (data) => setGeneral(data);

  const handleEducationSubmit = (entry) =>
    setEducation((prev) => [...prev, entry]);

  const updateEducation = (index, newEntry) =>
    setEducation((prev) => prev.map((e, i) => (i === index ? newEntry : e)));

  const handleWorkSubmit = (entry) => setWork((prev) => [...prev, entry]);

  const updateWork = (index, newEntry) =>
    setWork((prev) => prev.map((w, i) => (i === index ? newEntry : w)));

  return (
    <>
      <div className="form">
        <DropDown
          FormComponent={<GeneralInfo onSubmit={handleGeneralSubmit} />}
          formClass="general-form"
          formName={
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <title>account</title>
                <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
              </svg>
              General Information
            </>
          }
          ariaLabel="general information dropdown"
        />

        <DropDown
          FormComponent={
            <Education
              entries={education}
              onSubmit={handleEducationSubmit}
              onUpdate={updateEducation}
            />
          }
          formClass="education-form"
          formName={
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <title>school</title>
                <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
              </svg>
              Education
            </>
          }
          ariaLabel="education dropdown"
        />

        <DropDown
          FormComponent={
            <WorkExperience
              entries={work}
              onSubmit={handleWorkSubmit}
              onUpdate={updateWork}
            />
          }
          formClass="work-form"
          formName={
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <title>briefcase</title>
                <path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z" />
              </svg>
              Work Experience
            </>
          }
          ariaLabel="work experience dropdown"
        />
      </div>

      <Resume general={general} education={education} work={work} />
    </>
  );
}
