import React from 'react';
import {AppBar, Box, Typography} from '@mui/material';

export default function TransparentNav(){
    return (
        <AppBar position="static" sx={{background: 'transparent'}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Typography variant="h6">Login</Typography>
                <Typography variant="h6">Signup</Typography>
                <Typography variant="h6">Home</Typography>
                <Typography variant="h6">About</Typography>
                <Typography variant="h6">Contact</Typography>
            </Box>
        </AppBar>
    )
}