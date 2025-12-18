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
          formName="General Information"
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
          formName="Education"
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
          formName="Work Experience"
        />
      </div>

      <Resume general={general} education={education} work={work} />
    </>
  );
}
