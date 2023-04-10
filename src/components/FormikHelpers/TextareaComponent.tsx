import React from "react";
import { FormikControlProps } from "../../interface/Index";
import Textarea from "@mui/joy/Textarea";
import { useField } from "formik";

const TextareaComponent = ({
  name,
  placeholder,
  label,
}: FormikControlProps) => {
  const [field] = useField(name);
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Textarea
        {...field}
        minRows={8}
        name={name}
        placeholder={placeholder}
        sx={{ marginTop: "15px", background: "transparent" }}
      />
    </>
  );
};

export default TextareaComponent;
