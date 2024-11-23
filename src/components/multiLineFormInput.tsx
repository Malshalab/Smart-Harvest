import React, {ChangeEvent} from "react";
import { TextField, TextFieldProps } from "@mui/material";

type FormInputProps = TextFieldProps & {
    label: string;
    value: string | number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  };

const MultiLineFormInput:React.FC<FormInputProps> = ({label, value, onChange, ...props}) => {
    return(
        <TextField
            id="outlined-multiline-flexible"
            label={label}
            value={value}
            onChange={onChange}
            multiline={true}
            maxRows={4}
            fullWidth
            variant="outlined"
        />      
    );
}

export default MultiLineFormInput;