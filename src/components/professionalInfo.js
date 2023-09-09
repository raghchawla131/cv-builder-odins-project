import { useState } from "react";

export default function ProfessionalInfo({ setProfessionalInfo }) {
  const[isHidden, setIsHidden] = useState(true);

  function handleClick() {
    setIsHidden(!isHidden);
  }

  return (
    <>
    <div className="header">
      <h2 className="input-info-header" onClick={handleClick}>
        <ion-icon name="laptop"></ion-icon>
        Professional experience
        <ion-icon name="chevron-down-outline"></ion-icon>
      </h2>
      <ProfessionalInfoForm 
        isHidden={isHidden} 
        setProfessionalInfo={setProfessionalInfo}
      />
      </div>
    </>
  );
}

function ProfessionalInfoForm({ isHidden, setProfessionalInfo }) {
  const[jobTitle, setJobTitle] = useState('');
  const[company, setCompany] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newData = {
      jobTitle,
      company,
    };

    setProfessionalInfo(newData);
  }

  const displayForm = {
    display: isHidden ? "none" : "block"
  }
  return (
    <>
      <form id="general-form" className="form" style={displayForm} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title:</label>
          <input type="text" placeholder= "Job Title" id="jobTitle" name="jobTitle" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company:</label>
          <input type="text" placeholder= "Company Name" id="company" name="company" value={company} onChange={(e) => setCompany(e.target.value)}/>
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
