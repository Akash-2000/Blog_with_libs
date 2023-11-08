import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'

export default function Header1() {
  return (
    <Box sx={{bgcolor: '#333133'}}>
        <Container>
        <Box sx={{ display:"flex",justifyContent:"space-between",alignItems:'center'}}>
            <Box sx={{display:'flex'}}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Box>
                <Typography variant='h6' component="h2">LOGO</Typography>
                <Typography variant='span' component="p">Here</Typography>
                </Box>
            </Box>
            <Box>
                <Stack spacing={2} direction="row">
                <Button variant="outlined">Sign Up</Button>
                <Button variant="contained">Contact Us</Button>
                </Stack>
            </Box>
        </Box>
        </Container>
    </Box>
  )
}
