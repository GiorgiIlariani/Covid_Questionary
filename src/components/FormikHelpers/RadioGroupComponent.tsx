import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FormikControlProps } from "../../interface/Index";
import { useField } from "formik";

const RadioGroupComponent = ({
  name,
  label,
  array,
  value,
  setFieldValue,
}: FormikControlProps) => {
  const [field, meta] = useField(name);

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
        value={value}
        onChange={(e) => {
          setFieldValue!(name, e.target.value);
        }}>
        {array!.map((item) => {
          return (
            <FormControlLabel
              key={item.id}
              control={<Radio />}
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
