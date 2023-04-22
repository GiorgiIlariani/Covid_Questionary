import React, { ChangeEvent, useEffect } from "react";
import { FormikControlProps } from "../../interface/Index";
import Textarea from "@mui/joy/Textarea";
import { useField } from "formik";

const TextareaComponent = ({
  name,
  placeholder,
  label,
}: FormikControlProps) => {
  const [field, meta, helpers] = useField(name);

  useEffect(() => {
    const savedValue = sessionStorage.getItem(name);

    if (savedValue) {
      helpers.setValue(savedValue);
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    helpers.setValue(value);
    sessionStorage.setItem(name, value);
  };

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Textarea
        {...field}
        onChange={handleChange}
        minRows={8}
        name={name}
        placeholder={placeholder}
        sx={{ marginTop: "15px", background: "transparent" }}
      />
    </>
  );
};

export default TextareaComponent;
