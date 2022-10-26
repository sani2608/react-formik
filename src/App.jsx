import "./App.css";
import EnrolmentForm from "./components/EntolmentForm/EnrolmentForm";
import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { ChakraProvider, Divider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        {/* <YoutubeForm /> */}
        {/* <FormikContainer /> */}
        <LoginForm  />
        <Divider size={5} orientation='horizontal' />
        <RegistrationForm />
        <Divider size={5} orientation='horizontal' />
        <EnrolmentForm />
      </div>
    </ChakraProvider>
  );
}

export default App;
