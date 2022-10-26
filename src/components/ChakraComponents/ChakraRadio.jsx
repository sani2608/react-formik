import React from "react";
import {
  Radio,
  FormControl,
  FormLabel,
  FormErrorMessage,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { Field } from "formik";

const ChakraRadio = ({ label, name, options, ...rest }) => {
  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
          <FormControl isInvalid={form.errors[name] && form.touched[name]}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <RadioGroup {...rest} id={name}>
              <Stack direction="row" spacing={5}>
                {options.map((option) => (
                  <Radio
                    key={option.key}
                    checked={field.value === option.value}
                  >
                    {option.key}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default ChakraRadio;
