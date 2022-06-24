import { Form, Formik } from "formik";
import * as Yup from "yup";
import "./FormikContainer.css";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Requried Email"),
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
              <FormikControl
                control="input"
                type="email"
                label="email"
                name="email"
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
