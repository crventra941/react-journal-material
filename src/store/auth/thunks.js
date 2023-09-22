import { logOutFirebase, loginWithEmailAndPassword, registerUserWithEmail, signInWithGoogle } from "../../firebase/providers";
import { clearJournal } from "../journal";
import { checkingCredentials, logout, login } from "./authSlice"

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();

    if (!result.ok) {
      dispatch(logout(result.errorMessage))
      return;
    }

    dispatch(login(result));
  }
}

export const startCreateUserWithEmail = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(
      checkingCredentials()
    )

    const {
      ok,
      uid,
      photoURL,
      errorMessage
    } = await registerUserWithEmail({ email, password, displayName });

    if (!ok) {
      dispatch(
        logout({ errorMessage })
      );
      return;
    }

    dispatch(
      login({
        uid, photoURL, email, displayName
      })
    );
  }
}

export const startLoginWithEmailAndPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const {
      ok,
      uid,
      photoURL,
      errorMessage,
      displayName
    } = await loginWithEmailAndPassword({ email, password });

    if (!ok) {
      dispatch(
        logout({
          errorMessage
        })
      )
      return;
    }

    dispatch(login({
      uid,
      photoURL,
      email,
      displayName
    }));
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    await logOutFirebase();
    dispatch(logout());
    dispatch(clearJournal())
  }
}
