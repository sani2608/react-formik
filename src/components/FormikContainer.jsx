import { Form, Formik } from "formik";
import * as Yup from "yup";
import "./FormikContainer.css";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "option 1", value: "option1" },
    { key: "option 2", value: "option2" },
    { key: "option 3", value: "option3" },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Requried Email"),
    description: Yup.string().required("Required Description !"),
    selectOption: Yup.string().required("Select one option"),
  });

  const onSubmit = (values) => console.log("form submit", values);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          console.log(formik);
          return (
            <Form>
              <FormikControl control="input" type="email" label="email" name="email" />

              <FormikControl
                control="textarea"
                type="text"
                label="Description"
                name="description"
              />

              <FormikControl
                control="select"
                label="select a topic"
                name="selectOption"
                type="text"
                options={dropdownOptions}
              />

              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormikContainer;
