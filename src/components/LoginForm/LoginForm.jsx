import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormikControl";
import { Button } from "@chakra-ui/react";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required email"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("form value", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="chakrainput"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="chakrainput"
              type="password"
              label="Password"
              name="password"
            />

            <Button colorScheme="blue" type="submit" disabled={!formik.isValid} style={{marginTop: '10px'}}>
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
