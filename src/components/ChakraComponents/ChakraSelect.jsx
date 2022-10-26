import { Select } from "@chakra-ui/react";
import { ErrorMessage, Field } from "formik";
import TextError from "../TextError";

const ChakraSelect = ({ label, name, options, ...rest }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} as="select">
        {options.map((option) => {
          return (
            // <option key={option.value} value={option.value}>
            //   {option.key}
            //   </option>
            // <Select placeholder="Select option">
            //   <option key={option.value} value={option.value}>
            //     {option.key}
            //   </option>
            //   </Select>
              <Select
              {...field}
              id={name}
              isDisabled={isSubmitting}
              ref={ref}
              {...selectProps}
            >
              {children}
            </Select>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default ChakraSelect;
