import { ErrorMessage, Field } from "formik";
import TextError from "../TextError";

const TextArea = ({ label, name, ...rest }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} as="textarea" />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default TextArea;
