import React, { useEffect, ChangeEvent } from "react";
import { FormikControlProps } from "../../interface/Index";
import { useField } from "formik";

const DatePickerComponent = ({ name, label }: FormikControlProps) => {
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
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input
        className={`${hasError ? "input-error" : undefined}`}
        type="date"
        name={name}
        id={name}
        value={field.value}
        onChange={handleChange}
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
