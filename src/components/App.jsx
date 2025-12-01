import { useState } from 'react';
import DropDown from './DropDown';
import GeneralInfo from './GeneralInfo';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Resume from './Resume';

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

  const handleWorkSubmit = (entry) => setWork((prev) => [...prev, entry]);

  return (
    <div className="app">
      <DropDown
        FormComponent={<GeneralInfo onSubmit={handleGeneralSubmit} />}
        formClass="general-form"
        formName="General Information"
      />

      <DropDown
        FormComponent={<Education onSubmit={handleEducationSubmit} />}
        formClass="education-form"
        formName="Education"
      />

      <DropDown
        FormComponent={<WorkExperience onSubmit={handleWorkSubmit} />}
        formClass="work-form"
        formName="Work Experience"
      />

      <Resume general={general} education={education} work={work} />
    </div>
  );
}
