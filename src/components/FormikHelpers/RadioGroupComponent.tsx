import { ChangeEvent, useState, useEffect } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FormikControlProps } from "../../interface/Index";
import { useField } from "formik";

const RadioGroupComponent = ({ name, label, array }: FormikControlProps) => {
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
    <FormControl>
      <FormLabel
        id={name}
        error={hasError}
        sx={{
          fontSize: "22px",
          fontWeight: 700,
          color: "#232323",
          marginBottom: "15px",
        }}>
        {label}
      </FormLabel>
      <RadioGroup
        name={name}
        aria-labelledby={name}
        value={field.value}
        onChange={handleChange}>
        {array!.map((item) => {
          return (
            <FormControlLabel
              key={item.id}
              control={
                <Radio
                  sx={{ color: "black", "&.Mui-checked": { color: "black" } }}
                />
              }
              label={<p style={{ fontSize: "20px" }}>{item.label}</p>}
              value={item.value}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupComponent;
