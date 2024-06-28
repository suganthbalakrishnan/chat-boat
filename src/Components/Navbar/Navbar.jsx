import { Typography, Stack, IconButton, useMediaQuery } from '@mui/material';
import { Link, useOutletContext } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeContext } from '../Theme/ThemeContext';
import { useContext } from 'react';

const Navbar = () => {
    const outletContext = useOutletContext();
    const { handleMobileMenu } = outletContext || {}; // Provide fallback
    const isMobile = useMediaQuery('(max-width:800px)');
    const { setMode, mode } = useContext(ThemeContext);

    return (
        <Stack
            component={'header'}
            p={{ xs: 2, md: 3 }}
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            <Stack
                direction={'row'}
                alignItems={'center'}
                spacing={2}
            >
                {isMobile && handleMobileMenu && (
                    <MenuIcon
                        onClick={() => handleMobileMenu(prev => !prev)}
                    />
                )}

                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <Typography
                        variant='h1'
                        component={'h1'}
                    >
                        Bot AI
                    </Typography>
                </Link>
            </Stack>

            <Stack
                direction={'row'}
                spacing={0.2}
                alignItems={'center'}
            >
                <Typography
                    textTransform={'capitalize'}
                    fontSize={10}
                >
                    {mode}
                </Typography>
                <IconButton
                    onClick={() =>
                        setMode(prev => (prev === 'light' ? 'dark' : 'light'))
                    }
                >
                    {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
                </IconButton>
            </Stack>
        </Stack>
    );
};

export default Navbar;