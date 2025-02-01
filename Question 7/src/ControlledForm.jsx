import React, { useEffect, useState } from "react";

const ControlledForm = () => {
  const [number, setNumber] = useState();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setNumber(e.target.value);
  };

  const submitForm = () => {
    let chunkedEmail = email.split("@");
    console.log(chunkedEmail);
    if (!chunkedEmail[1]?.includes(".") || chunkedEmail.length !== 2) {
      setError("Wrong Email");
    } else if(number.length !== 10){
        setError("Phone Number must be of 10 digits")
    } else {
      setError("Everything is fine");
    }
  };

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <input onChange={handlePhoneChange} placeholder="number" type="number" />
      <input onChange={handleEmailChange} placeholder="email" type="text" />
      <button onClick={submitForm}>Click</button>
      {error && <p style={{color : error.includes("Everything is fine")  ? "green" : "red"}}>
        {error}
        </p>}
    </div>
  );
};

export default ControlledForm;
