import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { startLoadingNotes } from "../store/journal";
import { setChurchUserInfo } from "../store/churches";

export const useCheckAuth = () => {
  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {

      if (!user) {
        dispatch(logout())
        return;
      }

      const { uid, displayName, email, photoURL } = user;
      dispatch(
        login({ uid, displayName, email, photoURL })
      );
      dispatch(setChurchUserInfo())
    })
  }, []);

  return {
    status
  }
}
