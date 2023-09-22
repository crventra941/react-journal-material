import { axiosInstance } from "../api"

export const getUserChurch = async (uid) => {
  try {
    return await axiosInstance.get(`churchs/${uid}`);
  } catch (error) {
    throw new Error(error)
  }
}
