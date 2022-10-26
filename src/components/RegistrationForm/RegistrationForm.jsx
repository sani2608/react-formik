import { Button, FormControl, Heading } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormikControl";

const RegistrationForm = () => {
  const options = [
    {
      key: "Email",
      value: "emailmoc",
    },
    {
      key: "Telephone",
      value: "telephonemoc",
    },
  ];

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Required email"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Required"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephonemoc",
      then: Yup.string().required("Required"),
    }),
  });

  const onSubmit = (values) => {
    console.log("form value", values);
  };

  return (
    <div className="RegistrationForm">
      <Heading size="xl">Registration Form</Heading>
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

              <FormikControl
                control="chakrainput"
                type="password"
                label="confirm Password"
                name="confirmPassword"
              />

              <FormikControl
                control="radio"
                label="Mode of contact"
                name="modeOfContact"
                options={options}
              />

              <FormikControl
                control="chakrainput"
                type="text"
                label="Phone number"
                name="phone"
              />

              <Button
                style={{ marginTop: "10px", marginBottom: "10px" }}
                type="submit"
                disabled={!formik.isValid}
              >
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
