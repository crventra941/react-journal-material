import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes, fileUpload } from "../../utils";
import {
  addNewEmptyNote,
  deleteNote,
  savingNote,
  setActiveNote,
  setImagesToActiveNote,
  setNotes,
  setSaving,
  updatedNote
} from "./journalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    // Create new note
    dispatch(
      savingNote()
    );

    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      imagesUrl: [],
      date: new Date().getTime()
    }

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;
    dispatch(
      addNewEmptyNote(newNote)
    );
    dispatch(
      setActiveNote(newNote)
    );
  }
}

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const notes = await loadNotes(uid);
    dispatch(setNotes(notes))
    // console.log(uid)
  }
}

export const saveActiveNotes = () => {
  return async (dispatch, getState) => {
    dispatch(
      setSaving()
    );

    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(docRef, noteToFirestore, { merge: true })

    dispatch(
      updatedNote(note)
    );
  }
}


export const startUploadFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving())

    const filesToCloudinary = [];

    for (const file of files) {
      filesToCloudinary.push(fileUpload(file))
    }

    const urlsImage = await Promise.all(filesToCloudinary);

    dispatch(
      setImagesToActiveNote(urlsImage)
    );
  }
}

export const startDeletinNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving())
    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await deleteDoc(docRef);

    dispatch(deleteNote(note.id));
  }
}
