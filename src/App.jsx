import "./App.css";
import EnrolmentForm from "./components/EntolmentForm/EnrolmentForm";
import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        {/* <YoutubeForm /> */}
        {/* <FormikContainer /> */}
        <LoginForm />
        {/* <RegistrationForm /> */}
        {/* <EnrolmentForm /> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
