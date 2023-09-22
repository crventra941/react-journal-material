import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';


export const NavBar = ({ drawerWidth = 240 }) => {

    const dispatch = useDispatch();
    const { _id } = useSelector(state => state.church);

    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge="start"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant='h6' noWrap component='div'> Santuario </Typography>

                    <Typography fontSize={14} fontWeight='light' color='#fff' component='div'> N-cuenta: {_id}</Typography>

                    <IconButton
                        onClick={() => dispatch(startLogout())}
                        color='error'>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>

            </Toolbar>
        </AppBar>
    )
}
