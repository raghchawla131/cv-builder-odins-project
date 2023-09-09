import { useState } from "react";

export default function EducationInfo() {
  const[isHidden, setIsHidden] = useState(true);

  function handleClick() {
    setIsHidden(!isHidden);
  }

  return (
    <>
    <div className="header">
      <h2 className="input-info-header" onClick={handleClick}>
        <ion-icon name="book"></ion-icon>
        Educational experience
        <ion-icon name="chevron-down-outline"></ion-icon>
      </h2>
      <EducationInfoForm isHidden={isHidden} />
      </div>
    </>
  );
}

function EducationInfoForm({ isHidden }) {
  const displayForm = {
    display: isHidden ? "none" : "block"
  }

  return (
    <>
      <form id="general-form" className="form" style={displayForm} /* onSubmit={} */>
        <div className="form-group">
          <label htmlFor="degree">Degree:</label>
          <input type="text" placeholder= "Degree" id="degree" name="degree" />
        </div>
        <div className="form-group">
          <label htmlFor="school">School:</label>
          <input type="text" placeholder= "School" id="school" name="school" />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" placeholder= "City" id="city" name="city" />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input type="text" placeholder= "Country" id="country" name="country" />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
