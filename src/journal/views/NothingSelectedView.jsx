import { useMemo } from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import { StarOutline } from '@mui/icons-material';
import { useSelector } from 'react-redux';


export const NothingSelectedView = () => {

  const {
    name,
    location,
    phoneNumber,
    email,
    status,
  } = useSelector(state => state.church);

  const newDate = useMemo(() => {
    const currDate = new Date();

    return currDate.toDateString();
  }, []);

  return (
    <Grid
      container
      direction='row'
      sx={{
        minHeight: 'calc(100vh - 110px)',
        backgroundColor: 'primary.main',
        borderRadius: 3,
        padding: 3
      }}
    >
      <Grid item xs={12} sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <Typography fontSize={14} fontWeight='light' color='#fff' >
          {newDate}
        </Typography>
      </Grid>

      <Grid container>
        <Grid item xs={4}>
          <Typography
            fontSize={20}
            fontWeight='light'
            color='#fff' >{name}
          </Typography>

          <Typography
            fontSize={20}
            fontWeight='light'
            color='#fff' >{location}
          </Typography>
        </Grid>
      </Grid>


      <Typography
        fontSize={30}
        fontWeight='light'
        color='#fff' >Datos de contacto
      </Typography>
      <Grid container>
        <Grid item xs={4}>
          <Typography
            fontSize={20}
            fontWeight='light'
            color='#fff' >
            Tel: {phoneNumber}
          </Typography>

          <Typography
            fontSize={20}
            fontWeight='light'
            color='#fff' >
            <address>
              <a href={`mailto:${email}`}>{email}</a>
            </address>
          </Typography>
        </Grid>
      </Grid>

    </Grid>
  )
}