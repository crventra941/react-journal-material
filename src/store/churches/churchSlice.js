import { createSlice } from "@reduxjs/toolkit";

export const churchSlice = createSlice({
  name: 'church',
  initialState: {
    _id: null,
    name: null,
    location: null,
    phoneNumber: null,
    email: null,
    status: false,
    errorMessage: null
  },
  reducers: {
    setChurch: (state, { payload }) => {
      console.log(payload);
      state._id = payload._id;
      state.name = payload.name;
      state.location = payload.location;
      state.phoneNumber = payload.phoneNumber;
      state.email = payload.email;
      state.status = payload.status;
      state.errorMessage = null;
    }
  }
});

export const { setChurch } = churchSlice.actions;