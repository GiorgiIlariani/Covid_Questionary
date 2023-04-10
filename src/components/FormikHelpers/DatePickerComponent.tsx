import React from "react";
import { FormikControlProps } from "../../interface/Index";
import { useField } from "formik";

const DatePickerComponent = ({
  name,
  label,
  value,
  setFieldValue,
}: FormikControlProps) => {
  const [field, meta] = useField(name);

  let hasError = meta.touched && meta.error !== undefined;
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input
        className={`${hasError ? "input-error" : undefined}`}
        type="date"
        name={name}
        id={name}
        value={value}
        onChange={(e) => {
          setFieldValue!(name, e.target.value);
        }}
        style={{
          width: "100%",
          padding: "16px 20px",
          borderRadius: "4px",
          fontSize: "18px",
          background: "transparent",
          marginTop: "30px",
        }}
      />
    </React.Fragment>
  );
};

export default DatePickerComponent;
