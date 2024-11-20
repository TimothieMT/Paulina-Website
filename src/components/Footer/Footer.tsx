import React from 'react';
import {Box, Typography, Link, Divider, Stack} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {styled} from '@mui/material/styles';

const Item = styled(
    'div',
    {shouldForwardProp: (prop) => prop !== 'dark'}
)(({theme}) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box component="footer" sx={{bgcolor: 'background.paper', p: 6}}>
            <Grid container spacing={4} justifyContent="space-between" alignItems="center">
                <Item>
                    <Box display="flex" alignItems="center">
                        <img src="/vite.svg" alt="Logo" style={{height: 40, marginRight: 10}}/>
                        <Typography variant="h6">Psychotherapie Paulina Tolk</Typography>
                    </Box>
                </Item>
                <Stack
                    direction="row"
                    spacing={2}
                    divider={<Divider orientation="vertical" flexItem/>}
                    alignItems="center"
                >
                    <Link href="/ueber-mich" color="inherit" underline="none">
                        Über mich
                    </Link>
                    <Link href="/therapie" color="inherit" underline="none">
                        Therapie
                    </Link>
                    <Link href="/impressum" color="inherit" underline="none">
                        Impressum
                    </Link>
                </Stack>
            </Grid>
            <Typography variant="body2" color="textSecondary" align="center" sx={{mt: 2}}>
                © {currentYear} Psychotherapie Paulina Tolk. Alle Rechte vorbehalten.
            </Typography>
        </Box>
    );
};

export default Footer;