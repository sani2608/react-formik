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
  const radioOptions = [
    { key: "option 1", value: "roption1" },
    { key: "option 2", value: "roption2" },
    { key: "option 3", value: "roption3" },
  ];

  const checkboxOptions = [
    { key: "option 1", value: "coption1" },
    { key: "option 2", value: "coption2" },
    { key: "option 3", value: "coption3" },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOptions: [],
    birthDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Requried Email"),
    description: Yup.string().required("Required Description !"),
    selectOption: Yup.string().required("Select one option"),
    radioOption: Yup.string().required("Select one option"),
    checkboxOptions: Yup.array().required("Checkbox required"),
    birthDate: Yup.date().required("Requried date").nullable(),
  });

  const onSubmit = (values) => {
    console.log("form submit", values);
    console.log("saved data", JSON.parse(JSON.stringify(values)));
  };

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

              <FormikControl
                control="radio"
                label="Radio Topic"
                name="radioOption"
                type="text"
                options={radioOptions}
              />

              <FormikControl
                control="checkbox"
                label="Checkbox topics"
                name="checkboxOption"
                options={checkboxOptions}
              />

              <FormikControl control="date" label="Pick a Date" name="birthDate" />

              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormikContainer;
