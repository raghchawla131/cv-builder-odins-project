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

  function updateGeneralInfo(newData) {
    setGeneralInfo(newData)
  }

  return (
    <div id='app'>
      <section id="input-section">
        <GeneralInfo setGeneralInfo={updateGeneralInfo} />
        <EducationInfo />
        <ProfessionalInfo />
      </section>
      <section id="cv-section">
        <CvDoc generalInfo={generalInfo} />
      </section>
    </div>
  )
}

export default App;