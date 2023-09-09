import { useState } from "react";

export default function ProfessionalInfo() {
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
      <ProfessionalInfoForm isHidden={isHidden} />
      </div>
    </>
  );
}

function ProfessionalInfoForm({ isHidden }) {
  const displayForm = {
    display: isHidden ? "none" : "block"
  }
  return (
    <>
      <form id="general-form" className="form" style={displayForm} /* onSubmit={} */>
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title:</label>
          <input type="text" placeholder= "Job Title" id="jobTitle" name="jobTitle" />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company:</label>
          <input type="text" placeholder= "Company Name" id="company" name="company" />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
