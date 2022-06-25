import { useState } from "react";
import "./App.css";
import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <YoutubeForm /> */}
      {/* <FormikContainer /> */}
      {/* <LoginForm /> */}
      <RegistrationForm />
    </div>
  );
}

export default App;
