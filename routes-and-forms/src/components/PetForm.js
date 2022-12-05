import React, { useState } from "react";

const PetForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [colour, setColour] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setAge(0);
    setName("");
    setColour("");
    setSubmitted(true);
  }

  return (
    <div>
      <h2>Register Your Pet</h2>
      <h3>Please fill in your pet's details below</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>
            Pet's Name:
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setSubmitted(false);
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Pet's Age:
            <input
              type="number"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                setSubmitted(false);
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Pet's colour:
            <input
              type="text"
              value={colour}
              onChange={(e) => {
                setColour(e.target.value);
                setSubmitted(false);
              }}
            />
          </label>
        </div>
        <input type="submit" value="Submit" id="submit-button" />
      </form>
      <div id="results">

      {
       submitted ? <div>Thank you for submitting</div> : null
      }

        <h3>Results</h3>
        Name: {name}
        Age: {age}
        Colour: {colour}
        <br />
      </div>
    </div>
  );
};

export default PetForm;
