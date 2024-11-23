import React, { ChangeEvent } from "react";
import { TextField, TextFieldProps } from "@mui/material";

type FormInputProps = TextFieldProps & {
  label: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
const FormInput: React.FC<FormInputProps> = ({ label, value, onChange, ...props }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      maxRows={1}
      fullWidth
      variant="outlined"
      {...props} // Spread other props to support additional configuration
    />
  );
};

export default FormInput;