import React from 'react';
import {Box, Button} from '@mui/material';

export default function ElevatedButton(props){
    return (
        <Box sx={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}>
        <Button 
        style={{
            textTransform: 'none',
            background: 'transparent',
            color: '#fff',
            boxShadow: ''
        }}
        variant="borderless" 
        color={props.color}
        startIcon={props.icon}
        
        >
        {props.name}
        </Button>
        </Box>
    )
}