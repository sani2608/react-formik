import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";

const Input = ({ label, name, ...rest }) => {
  console.log("label", label);
  console.log("name", name);
  console.log("...rest", rest);
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
