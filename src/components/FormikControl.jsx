import Input from "./FormikControls/ Input";
import Radio from "./FormikControls/Radio";
import Select from "./FormikControls/Select";
import TextArea from "./FormikControls/TextArea";
import Checkbox from "./FormikControls/Checkbox";
import DatePicker from "./FormikControls/DatePicker";
import ChakraInput from "./ChakraComponents/ChakraInput";
import ChakraRadio from "./ChakraComponents/ChakraRadio";
import ChakraTextarea from "./ChakraComponents/ChakraTextarea";

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    case "chakrainput":
      return <ChakraInput {...rest} />;
    case "chakraradio":
      return <ChakraRadio {...rest} />;
    case "chakratextarea":
      return <ChakraTextarea {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
