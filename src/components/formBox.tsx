import React, { Children } from 'react'
import { Box } from '@mui/material'

const FormBox = ({ children}:any) =>{
    return (
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'row',     
            height: '50vh',              
            width: '100%',
            border: '2px solid #d3d3d3',   
            borderRadius: '12px',
            // padding: '16px',
            boxSizing: 'border-box',
        }}
        >
            {children}
        </Box>
    );
}

export default FormBox;
