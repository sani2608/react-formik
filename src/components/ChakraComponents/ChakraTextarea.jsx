import React from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/react";
import { Field } from "formik";

const ChakraTextarea = ({ label, name, ...rest }) => {
  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
          <FormControl isInvalid={form.errors[name] && form.touched[name]}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            {/* <Input id={name} {...rest} {...field} /> */}
            <Textarea id={name} {...rest} {...field} size="sm" />
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default ChakraTextarea;
