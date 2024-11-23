import React from "react";
import { TextField } from "@mui/material";

const MultiLineFormInput = ({...props}) => {
    return(
        <TextField
            id="outlined-multiline-flexible"
            label={props.label}
            // value={props.value}
            // onChange={props.handleChange}
            multiline={true}
            maxRows={4}
            fullWidth
            variant="outlined"
            />
    );
}

export default MultiLineFormInput;