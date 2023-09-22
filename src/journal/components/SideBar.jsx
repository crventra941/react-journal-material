import { Box, Drawer, Grid, Link, List, ListItem, Toolbar, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import { Book, SupervisedUserCircle, FileCopy, Search } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import './css/Sidebar.css';

export const SideBar = ({ drawerWidth }) => {
  const { displayName } = useSelector(state => state.auth);

  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant='permanent' // temporary
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Toolbar style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem',
          marginBottom: '2rem'
        }}>
          <Link underline='none' component={RouterLink} to='/' >
            <Grid item display="flex" flexDirection="column" alignItems="center">
              <SupervisedUserCircle sx={{ fontSize: 80 }} />
              <Typography variant='h6' noWrap component='div'>
                {displayName}
              </Typography>
            </Grid>
          </Link>
        </Toolbar>

        <List>

          <ListItem disablePadding className='linkItem'>
            <Link className='link' underline='none' component={RouterLink} to='/books' >
              <Book />
              &nbsp;&nbsp;&nbsp;Libros
            </Link>
          </ListItem>

          <ListItem disablePadding className='linkItem'>
            <Link className='link' underline='none' component={RouterLink} to="/external-documents" >
              <FileCopy />
              &nbsp;&nbsp;&nbsp;Documentos Externos
            </Link>
          </ListItem>

          <ListItem disablePadding className='linkItem'>
            <Link className='link' underline='none' component={RouterLink} to="/queries">
              <Search />
              &nbsp;&nbsp;&nbsp;Consultas
            </Link>
          </ListItem>
        </List>

      </Drawer>

    </Box>
  )
}
