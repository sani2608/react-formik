import {
  ErrorMessage,
  FastField,
  Field,
  FieldArray,
  Form,
  Formik,
} from "formik";
import { useState } from "react";
import * as Yup from "yup"; //object schema validation
import TextError from "./TextError";
import "./YoutubeForm.css";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const savedValues = {
  name: "sani",
  email: "sani@gmail.com",
  channel: "saniYou",
  comments: "welcome to comments",
  address: "unvired jayanagar",
  social: {
    facebook: "sani",
    twitter: "sanikumarsahani",
  },
  phoneNumbers: ["9585757575", ""],
  phNumbers: [""],
};

const onSubmit = (values, onSubmitProps) => {
  // console.log(values);
  console.log("on submit props", onSubmitProps);
  onSubmitProps.setSubmitting(false);
};

const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Requreid comments";
  }
  return error;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!!"),
  email: Yup.string().email("Invalid email format1").required("Required"),
  channel: Yup.string().required("Requried"),
  // comments: Yup.string().required("REquried comments"),
  social: Yup.object({
    facebook: Yup.string().required("This is required man"),
  }),
});

const YoutubeForm = () => {
  const [formValues, setFormValues] = useState(null);
  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      // validateOnChange={false}
      // validateOnBlur={false}
      // validateOnMount
      enableReinitialize
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="email">E-mail</label>
              <Field type="email" id="email" name="email" />
              {/* Render props pattern */}
              <ErrorMessage name="email">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field type="text" id="channel" name="channel" />
              <ErrorMessage name="channel" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="comments">comments</label>
              <Field
                type="text"
                id="comments"
                name="comments"
                as="textarea"
                placeholder="enter comments"
                validate={validateComments}
              />
              <ErrorMessage name="comments" component={TextError} />
            </div>
            {/* FastField component */}
            <div className="form-control">
              <label htmlFor="address">Address</label>
              <FastField name="address">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <div>
                      <input type="text" id="addess" {...field} />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
            </div>
            <div className="form-control">
              <label htmlFor="facebook">Facebook profile</label>
              <Field type="text" id="facebook" name="social.facebook" />
              <ErrorMessage name="social.facebook" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="twitter">Twitter</label>
              <Field type="text" id="twitter" name="social.twitter" />
            </div>
            <div className="form-control">
              <label htmlFor="primaryPh">Primary phone number</label>
              <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
            </div>
            <div className="form-control">
              <label htmlFor="secondaryPh">Secondary phone number</label>
              <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
            </div>
            <div className="form-control">
              <label htmlFor="phNumbers">List of phone numbers</label>
              <FieldArray name="phNumbers">
                {(fieldArrayProps) => {
                  // console.log(fieldArrayProps);
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  // console.log("form erors", form.errors);
                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index} className="form-control">
                          <Field name={`phNumbers[${index}]`} type="text" />
                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              -
                            </button>
                          )}
                          <button type="button" onClick={() => push("")}>
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>

            {/* <button
              type="button"
              onClick={() => formik.validateField("comments")}
            >
              Validate comments
            </button>

            <button type="button" onClick={() => formik.validateForm()}>
              Validate Entire form
            </button>

            <button
              type="button"
              onClick={() => formik.setFieldTouched("comments")}
            >
              visit comments only
            </button>

            <button
              type="button"
              onClick={() =>
                formik.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comments: true,
                })
              }
            >
              visit all fields
            </button> */}

            <div className="button_class"></div>
            <button
              style={{ backgroundColor: "rgb(40, 208, 223)", marginRight: "10px" }}
              type="button"
              onClick={() => setFormValues(savedValues)}
            >
              Load saved data
            </button>

            <button
              type="submit"
              style={{ backgroundColor: "rgb(40, 208, 223)" }}
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default YoutubeForm;
