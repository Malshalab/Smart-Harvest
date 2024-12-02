import React from 'react';
import { useState } from 'react'
import { Box, Typography }from '@mui/material';

const TitleBar = ({ ...props }) => {
  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '2px solid #d3d3d3', 
      borderRadius: '4px',       
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
      marginBottom: 'min(10vh, 8px)', 
    }}
    >
      <Typography variant="h6" color="black">
        {props.title}
      </Typography>
    </Box>
  );
};



export default TitleBar;
