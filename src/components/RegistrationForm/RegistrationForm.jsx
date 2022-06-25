import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormikControl";

const LoginForm = () => {
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
    email: Yup.string().email("Invalid email format").required("Required email"),
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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl control="input" type="email" label="Email" name="email" />
            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
            />

            <FormikControl
              control="input"
              type="password"
              label="confirm Password"
              name="confirmPassword"
            />

            <FormikControl
              control="radio"
              label="mode of contact"
              name="modeOfContact"
              options={options}
            />

            <FormikControl
              control="input"
              type="text"
              label="Phone number"
              name="phone"
            />

            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
