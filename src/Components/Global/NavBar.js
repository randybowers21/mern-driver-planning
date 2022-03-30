import * as React from 'react'
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ marginBottom: '5px' }} position="sticky">
                <Toolbar>
                    <Typography variant="h4">Cox Trucking</Typography>
                    <Button
                        sx={{ marginLeft: '5%' }}
                        component={Link}
                        to={'/'}
                        color="inherit">
                        <Typography>Week Summary</Typography>
                    </Button>
                    <Button component={Link} to={'/planning'} color="inherit">
                        <Typography>Planning</Typography>
                    </Button>
                    <Button component={Link} to={'/drivers'} color="inherit">
                        <Typography>Drivers</Typography>
                    </Button>
                    <Button component={Link} to={'/tractors'} color="inherit">
                        <Typography>Tractors</Typography>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
