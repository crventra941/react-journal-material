import { getUserChurch } from "../../services";
import { setChurch } from "./churchSlice";

export const setChurchUserInfo = () => {
  return async (dispatch, getState) => {
    const { auth } = getState();

    const { data } = await getUserChurch(auth.uid)
    dispatch(setChurch(data))
    console.log(data);
  }
}