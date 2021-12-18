import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async () => {
      const response = await fetch("http://localhost:5000/user")
      .then(res => res.json())
      return response;
    }
  )

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: []
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
          // Add user to the state array
          state.user = action.payload;
        });
    }
});

export default userSlice.reducer;