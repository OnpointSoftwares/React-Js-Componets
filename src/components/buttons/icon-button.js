import React from 'react';
import {Button} from '@mui/material';

export default function IconButton(props){
    return (
        <Button 
        style={{
            textTransform: 'none',
            background: props.background,
            border: '1px solid #fff',
            color: '#fff'
        }}
        variant="contained" 
        color={props.color}
        startIcon={props.icon}
        >
        {props.name}
        </Button>
    )
}