import Input from "./FormikControls/ Input";
import Radio from "./FormikControls/Radio";
import Select from "./FormikControls/Select";
import TextArea from "./FormikControls/TextArea";

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
    case "date":
    default:
      return null;
  }
};

export default FormikControl;
