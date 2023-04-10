import React from "react";
import { FormikControlProps } from "../../interface/Index";
import InputComponent from "./InputComponent";
import RadioGroupComponent from "./RadioGroupComponent";
import DatePickerComponent from "./DatePickerComponent";
import TextareaComponent from "./TextareaComponent";

const FormControl = ({
  control,
  name,
  placeholder,
  label,
  array,
  value,
  setFieldValue,
}: FormikControlProps) => {
  if (control === "input") {
    return (
      <InputComponent name={name} placeholder={placeholder} label={label} />
    );
  }

  if (control === "radio") {
    return (
      <RadioGroupComponent
        name={name}
        placeholder={placeholder}
        label={label}
        array={array}
        value={value}
        setFieldValue={setFieldValue}
      />
    );
  }

  if (control === "datePicker") {
    return (
      <DatePickerComponent
        name={name}
        label={label}
        setFieldValue={setFieldValue}
        value={value}
      />
    );
  }

  if (control === "textarea") {
    return (
      <TextareaComponent
        name={name}
        label={label}
        setFieldValue={setFieldValue}
        value={value}
      />
    );
  }

  return null;
};

export default FormControl;
