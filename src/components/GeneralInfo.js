import { useState } from "react";

export default function GeneralInfo({ setGeneralInfo }) {
  const[isHidden, setIsHidden] = useState(true);

  function handleClick() {
    setIsHidden(!isHidden);
  }

  return (
    <>
    <div className="header">
      <h2 className="input-info-header" onClick={handleClick}>
        <ion-icon name="person" ></ion-icon>
        General information
        <ion-icon name="chevron-down-outline"></ion-icon>
      </h2>
      <GeneralInfoForm 
        isHidden={isHidden}
        setGeneralInfo={setGeneralInfo}
      />
      </div>
    </>
  );
}

function GeneralInfoForm({ isHidden, setGeneralInfo }) {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[phone, setPhone] = useState('');
  const[city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newData = {
      name,
      email,
      phone,
      city,
    };

    setGeneralInfo(newData);
  };

  const displayForm = {
    display: isHidden ? "none" : "block",
  }

  return (
    <>
      <form id="general-form" className="form" style={displayForm} onSubmit={handleSubmit} >
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" placeholder= "Name" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" placeholder= "Email ID" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" placeholder= "Phone Number" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" placeholder= "City" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
