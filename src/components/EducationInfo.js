import { useState } from "react";

export default function EducationInfo({ setEducationInfo }) {
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
      <EducationInfoForm 
        isHidden={isHidden} 
        setEducationInfo={setEducationInfo}
      />
      </div>
    </>
  );
}

function EducationInfoForm({ isHidden, setEducationInfo }) {
  const[degree, setDegree] = useState('');
  const[school, setSchool] = useState('');
  const[city, setCity] = useState('');
  const[country, setCountry] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();

    const newData = {
      degree,
      school,
      city,
      country,
    };

    setEducationInfo(newData);
  }

  const displayForm = {
    display: isHidden ? "none" : "block"
  }

  return (
    <>
      <form id="general-form" className="form" style={displayForm} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="degree">Degree:</label>
          <input type="text" placeholder= "Degree" id="degree" name="degree" value={degree} onChange={(e) => setDegree(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="school">School:</label>
          <input type="text" placeholder= "School" id="school" name="school" value={school} onChange={(e) => setSchool(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" placeholder= "City" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input type="text" placeholder= "Country" id="country" name="country" value={country} onChange={(e) => setCountry(e.target.value)}/>
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
