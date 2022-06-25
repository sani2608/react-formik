import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormikControl";
import { Button } from "@chakra-ui/react";
const EnrolmentForm = () => {
  const dropdownOptions = [
    { key: "Select your course", value: "" },
    { key: "React", value: "react" },
    { key: "Angular", value: "angular" },
    { key: "Vue", value: "vue" },
  ];

  const checkboxOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "JavaScript", value: "javascript" },
  ];

  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skills: [],
    courseDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email Required").email("invalid email format"),
    bio: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    courseDate: Yup.date().required("Date requried").nullable(),
  });

  const onSubmit = (values) => {
    console.log("form data", values);
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
            <FormikControl control="textarea" type="text" label="Bio" name="bio" />
            <FormikControl
              control="select"
              label="Course"
              name="course"
              options={dropdownOptions}
            />

            <FormikControl
              control="checkbox"
              label="Your Skillset"
              name="skills"
              options={checkboxOptions}
            />
            <FormikControl control="date" label="Course Date" name="courseDate" />
            <Button colorScheme="blue" type="submit" disabled={!formik.isValid}>
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default EnrolmentForm;
