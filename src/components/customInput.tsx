import React from 'react';
import { useState } from 'react'
import { TextField } from '@mui/material';

const CustomInput = ({...props}) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      name={props.name}
    />
  );
};

export default CustomInput;
