import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/Icon';

export default function Footer() {
    return (
        <Box
        sx={{
            width: "100%",
            height: "auto",
            paddingTop: "1rem"
        }}
        >
        <Container maxWidth="lg" sx={{ marginTop: "10px", paddingBottom: "20px"}}>
            <Grid container direction="column" alignItems="center">
                <Grid item xs={12}>
                    <Typography color="#fafafa" variant="h6" sx={{ fontWeight: "600"}}>
                        John Johnson
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography color="#fafafa" variant="subtitle3">
                    {`${new Date().getFullYear()} | Tom Cruise Fan Club`}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <IconButton
                        component="a"
                        href="https://www.linkedin.com/in/eu-larissa-oliveira/" target="_blank"
                        rel="noopener noreferrer">
                        <LinkedInIcon sx={{ color: "#fafafa"}} />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://github.com/eulalaoliveira"
                        target="_blank"
                        rel="noopener noreferrer">
                        <GitHubIcon sx={{ color: "#fafafa"}} />
                    </IconButton>
                </Grid>
            </Grid>
        </Container>
        </Box>
    );
}