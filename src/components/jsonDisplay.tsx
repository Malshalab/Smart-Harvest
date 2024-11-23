import React from 'react';
import { Box, Typography } from '@mui/material';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


interface JsonDisplayProps {
  jsonData: object;
}

const JsonDisplay = ({ jsonData }:any) => {
  const jsonString = JSON.stringify(jsonData, null, 2)

  return (
    <Box
        sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        height:'100%',
        padding: '16px',
        border: '1px solid #d3d3d3',
        borderRadius: '8px',
        backgroundColor: '#fafafa',
        boxSizing: 'border-box',
        userSelect: 'text',
        }}
    >
      <Typography variant="h6" sx={{ marginBottom: '8px' }}>
          Result:
      </Typography>

      <Box
      sx={{
          width: '100%',
          height:'100vh',
          flex:1,
          overflowX: 'auto',
          overflowY: 'auto',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
      }}>
        <SyntaxHighlighter language="json" style={docco}>
        {jsonString}
        </SyntaxHighlighter>
      </Box>
    </Box>
  );
};

export default JsonDisplay;
