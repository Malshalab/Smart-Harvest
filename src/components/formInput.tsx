import React from "react";
import { TextField } from "@mui/material";

const FormInput = ({...props}) => {
    return(
        <TextField
            label={props.label}
            // value={props.value}
            // onChange={props.handleChange}
            maxRows={1}
            fullWidth
            variant="outlined"
            />
    );
}

export default FormInput;