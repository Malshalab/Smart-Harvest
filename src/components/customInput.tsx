import React from 'react';
import { useState } from 'react'
import { TextField } from '@mui/material';

const CustomInput = ({...props}) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      value={props.value}
      onChange={props.onChange}
      name={props.name}
      sx={{height:'100%'}}
    />
  );
};

export default CustomInput;
