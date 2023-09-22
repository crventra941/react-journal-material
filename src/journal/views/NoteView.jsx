import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'

import { ImageGallery } from '../components'
import { useForm } from '../../hooks/useform';
import { saveActiveNotes, setActiveNote, startDeletinNote, startUploadFiles } from '../../store/journal';


export const NoteView = () => {

  const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);
  const dispatch = useDispatch();

  const { title, body, date, onInputChange, formState } = useForm(note);

  const inputFileRef = useRef();

  const newDate = useMemo(() => {
    const currDate = new Date(date)
    return currDate.toUTCString()
  }, [date]);

  useEffect(() => {
    dispatch(
      setActiveNote(formState)
    )
  }, [formState]);

  const handleSave = () => {
    dispatch(
      saveActiveNotes()
    );
  }

  const onUploadFiles = ({ target }) => {
    if (target.files.length === 0) return;

    dispatch(startUploadFiles(target.files))
    console.log(target.files)
  }

  const onDelete = () => {
    dispatch(startDeletinNote())
  }

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Nota Actualizada', messageSaved, 'success')
    }
  }, [messageSaved])

  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mb: 1 }}
      className='animate__animated animate__fadeIn animate__faster'
    >
      <Grid item>
        <Typography fontSize={39} fontWeight='light' >{newDate}</Typography>
      </Grid>
      <Grid item>

        <input
          onChange={onUploadFiles}
          multiple
          ref={inputFileRef}
          type='file'
          style={{ display: 'none' }}
        />

        <IconButton
          color='primary'
          disabled={isSaving}
          onClick={() => inputFileRef.current.click()}
        >
          <UploadOutlined />
        </IconButton>

        <Button
          color="primary"
          onClick={handleSave}
          disabled={isSaving}
          sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          name='title'
          value={title}
          onChange={onInputChange}
          sx={{ border: 'none', mb: 1 }}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió en el día de hoy?"
          name='body'
          value={body}
          onChange={onInputChange}
          minRows={5}
        />
      </Grid>

      <Grid container justifyContent="end">
        <Button
          onClick={onDelete}
          sx={{ mt: 2 }}
          disabled={isSaving}
          color='error'
        >
          <DeleteOutline />
          Borrar
        </Button>
      </Grid>

      {/* Image gallery */}
      <ImageGallery images={note.imagesUrls} />

    </Grid>
  )
}
