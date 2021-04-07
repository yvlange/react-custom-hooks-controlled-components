import "./App.css";
import { useState } from "react";

function App() {
  // Add states and eventHandlers here
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  function handleFirstName(event) {
    const { value } = event.target;
    setFirstName(value);
  }

  function handleLastName(event) {
    const { value } = event.target;
    setLastName(value);
  }

  function handleAge(event) {
    const { value } = event.target;
    setAge(value);
  }

  function handleEmail(event) {
    const { value } = event.target;
    setEmail(value);
  }

  function handleCheckbox(event) {
    const { checked } = event.target;
    setIsChecked(checked);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const fullForm = {
      firstName,
      lastName,
      age,
      email,
      isChecked,
    };
    console.log(fullForm);
    console.log("submitted");
  }
  return (
    <div className="App">
      <h1>More USERS!</h1>
      <h2>Enter user credentials below:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Name:</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleFirstName}
        />
        <label htmlFor="lastName">Surname:</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleLastName}
        />
        <label htmlFor="age">Age:</label>
        <input type="number" name="age" value={age} onChange={handleAge} />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />
        <div className="newsletter">
          <input
            type="checkbox"
            name="newsletter"
            checked={isChecked}
            onChange={handleCheckbox}
          />
          <label htmlFor="newsletter">
            Yes, I would like many more emails!
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
