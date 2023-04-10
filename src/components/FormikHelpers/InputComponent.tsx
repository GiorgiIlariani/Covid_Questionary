import React from "react";
import { useField, ErrorMessage } from "formik";
import { TextField } from "@mui/material";
import { FormikControlProps } from "../../interface/Index";

const InputComponent = ({ name, placeholder, label }: FormikControlProps) => {
  const [field, meta] = useField(name);

  const configTextField = {
    ...field,
    fullWidth: true,
    placeholder,
    id: name,
    name,
  };

  let hasError = meta.touched && meta.error !== undefined;

  return (
    <React.Fragment>
      <label htmlFor={label} className={`${hasError ? "error-text" : null}`}>
        {label}
      </label>
      <TextField {...configTextField} error={hasError} margin="normal" />
      {hasError ? (
        <ErrorMessage name={name} component="p" className="error-text" />
      ) : null}
    </React.Fragment>
  );
};

export default InputComponent;
