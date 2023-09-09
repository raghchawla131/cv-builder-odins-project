import { useState } from 'react';
import './styles/App.css';
import GeneralInfo from './components/GeneralInfo';
import EducationInfo from './components/EducationInfo';
import ProfessionalInfo from './components/professionalInfo';
import CvDoc from './components/cv';

function App() {
  const[generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  })

  const[educationInfo, setEducationInfo] = useState({
    degree: "",
    school: "",
    city: "",
    country: "",
  })

  const[professionalInfo, setProfessionalInfo] = useState({
    jobTitle: "",
    company: "",
  })

  function updateGeneralInfo(newData) {
    setGeneralInfo(newData)
  }

  function updateEducationInfo(newData) {
    setEducationInfo(newData)
  }

  function updateProfessionalInfo(newData) {
    setProfessionalInfo(newData)
  }

  return (
    <div id='app'>
      <section id="input-section">
        <GeneralInfo setGeneralInfo={updateGeneralInfo} />
        <EducationInfo setEducationInfo={updateEducationInfo}/>
        <ProfessionalInfo setProfessionalInfo={updateProfessionalInfo}/>
      </section>
      <section id="cv-section">
        <CvDoc generalInfo={generalInfo} educationInfo={educationInfo} professionalInfo={professionalInfo} />
      </section>
    </div>
  )
}

export default App;