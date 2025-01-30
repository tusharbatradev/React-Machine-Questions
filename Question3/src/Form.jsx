import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  let [isSubmit, setIsSubmit] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log("Email", email);
  };

  const handleSubmit = () => {
    if (name === "" || email === "") {
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
    }
  };
  return (
    <div>
      <input onChange={handleNameChange} placeholder="Name" type="text" />
      <input
        onChange={handleEmailChange}
        placeholder="Email"
        style={{ marginLeft: "10px" }}
        type="email"
      />

      <button
        onClick={handleSubmit}
        style={{ backgroundColor: "black", color: "white", marginLeft: "10px" }}
      >
        Submit
      </button>

      {isSubmit && (
        <>
          <h1>{name}</h1>
          <h1>{email}</h1>
        </>
      )}
    </div>
  );
};

export default Form;
