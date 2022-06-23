import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; //object schema validation
import TextError from "./TextError";
import "./YoutubeForm.css";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
};

const onSubmit = (values) => console.log(values);

const validationSchema = Yup.object({
  name: Yup.string().required("Required!!"),
  email: Yup.string().email("Invalid email format1").required("Required"),
  channel: Yup.string().required("Requried"),
});
const YoutubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
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
          <ErrorMessage name="email">{(errorMsg) => <div className="error">{errorMsg}</div>}</ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" />
        </div>

        <div className="form-control">
          <label htmlFor="comments">comments</label>
          <Field type="text" id="comments" name="comments" as="textarea" />
        </div>

        <div className="form-control">
          <label htmlFor="addreshh">Address</label>
          <Field name="address">
            {(props) => {
              // console.log(props);
              const { field, form, meta } = props;
              return (
                <div>
                  <input type="text" id="addess" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
