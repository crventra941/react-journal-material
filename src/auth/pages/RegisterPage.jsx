import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { startCreateUserWithEmail } from '../../store/auth/thunks';

const defaultForm = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo electrónico debe tener una @.'],
  password: [(value) => value.length >= 6, 'El password debe tener más de 6 letras.'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio.']
}

export const RegisterPage = () => {
  const [isSubmitedForm, setSubmitedForm] = useState(false);

  const { status, errorMessage } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const {
    email, password, displayName, formState,
    isFormValid, displayNameValid, emailValid, passwordValid,
    onInputChange
  } = useForm(
    defaultForm,
    formValidations
  );

  const isCheckingAutheticate = useMemo(
    () => status === 'checking', [status]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitedForm(true);
    if (!isFormValid) return;

    dispatch(
      startCreateUserWithEmail(formState)
    )
  }

  return (
    <AuthLayout title="Crear cuenta">
      <form
        className='animate__animated animate__fadeIn animate__faster'
        onSubmit={handleSubmit}>
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder='Nombre completo'
              fullWidth
              name='displayName'
              value={displayName}
              error={!!displayNameValid && isSubmitedForm}
              helperText={displayNameValid}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder='correo@google.com'
              fullWidth
              name='email'
              value={email}
              error={!!emailValid && isSubmitedForm}
              helperText={emailValid}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder='Contraseña'
              fullWidth
              name='password'
              error={!!passwordValid && isSubmitedForm}
              helperText={passwordValid}
              value={password}
              onChange={onInputChange}
            />
          </Grid>


          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid
              item
              display={!!errorMessage ? '' : 'none'}
              xs={12}>
              <Alert
                severity='error'
              >
                {errorMessage}
              </Alert>
            </Grid>
            <Grid item xs={12}>
              <Button
                type='submit'
                disabled={isCheckingAutheticate}
                variant='contained' fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>


          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to="/auth/login">
              ingresar
            </Link>
          </Grid>

        </Grid>


      </form>

    </AuthLayout>
  )
}
