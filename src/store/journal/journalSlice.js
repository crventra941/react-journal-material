import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null
  },
  reducers: {
    savingNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = '';
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = '';
    },
    updatedNote: (state, action) => {
      state.isSaving = false;

      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {

          return action.payload;
        }
        return note
      });
      // TODO Message
      state.messageSaved = `${action.payload.title}, actualizada correctamente`
    },
    setImagesToActiveNote: (state, action) => {
      state.isSaving = false;
      state.active.imagesUrls = [
        ...state.active.imagesUrls,
        ...action.payload
      ]
    },
    clearJournal: (state) => {
      state.isSaving = false;
      state.messageSaved = '';
      state.notes = [];
      state.active = null;
    },
    deleteNote: (state, action) => {
      state.isSaving = false;
      state.active = null;
      state.notes = state.notes.filter(
        (note) => note.id !== action.payload
      );
    }
  },
});
// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  setActiveNote,
  savingNote,
  setNotes,
  setSaving,
  updatedNote,
  setImagesToActiveNote,
  clearJournal,
  deleteNote
} = journalSlice.actions;

