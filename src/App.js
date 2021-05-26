import "./styles.css";
import { useState } from "react";

export default function App() {
  var [answer, setAnswer] = useState("");

  function onChangeHandler(event) {
    var userAnswer = event.target.value;
    var count = 0;

    for (var i = 1; i < userAnswer; i++) {
      if (userAnswer % i === 0) {
        count++;
      }
    }

    if (count === 1) {
      answer = "Your birth date is a prime number!!!";
      setAnswer(answer);
    } else {
      answer = "Nope! Definetly not a prime number!";
      setAnswer(answer);
    }
  }

  return (
    <div className="App">
      <h1>PRIME NUMBER</h1>
      <h3>Let's see if your date of birth is a prime number!</h3>
      <div style={{ marginBottom: "0.8rem" }}>Enter your date of birth</div>
      <input
        className="userInput"
        onChange={() => onChangeHandler(event)}
      ></input>
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{answer}</div>
      <footer>
        <h2>
          Do you want to check if your birth year is a leap year? If yes, <a href="https://miscellaneous3.netlify.app/">click
          here</a>.
        </h2>
      </footer>
    </div>
  );
}
