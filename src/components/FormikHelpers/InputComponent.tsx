import React, { useState, useEffect, ChangeEvent } from "react";
import { useField, ErrorMessage } from "formik";
import { TextField } from "@mui/material";
import { FormikControlProps } from "../../interface/Index";

const InputComponent = ({ name, placeholder, label }: FormikControlProps) => {
  const [field, meta, helpers] = useField(name);

  useEffect(() => {
    const savedValue = sessionStorage.getItem(name);

    if (savedValue) {
      helpers.setValue(savedValue);
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    helpers.setValue(value);
    sessionStorage.setItem(name, value);
  };

  let hasError = meta.touched && meta.error !== undefined;

  const configTextField = {
    fullWidth: true,
    placeholder,
    id: name,
    name,
    error: hasError,
  };

  return (
    <React.Fragment>
      <label htmlFor={label} className={`${hasError ? "error-text" : null}`}>
        {label}
      </label>
      <TextField
        {...configTextField}
        {...field}
        onChange={handleChange}
        margin="normal"
      />
      {hasError ? (
        <ErrorMessage name={name} component="p" className="error-text" />
      ) : null}
    </React.Fragment>
  );
};

export default InputComponent;
