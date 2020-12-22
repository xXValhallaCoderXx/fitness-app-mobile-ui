import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, AppDispatch } from "config/store";
import { api } from "shared/utils/api";
import { ROUTES } from "shared/constants/api-routes";

interface IUser {
  username: string;
  email: string;
}

interface IState {
  loading: boolean;
  error: boolean;
  erroMsg: string;
  user: null | IUser;
}

const initialState: IState = {
  error: false,
  loading: false,
  erroMsg: "",
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserRequest(state, action: PayloadAction<null>) {
      state.loading = true;
    },
    fetchUserSuccess(state, action: PayloadAction<IUser>) {
      state.loading = false;
      state.user = action.payload;
    },
    fetchUserFailure(state, action: PayloadAction<null>) {
      state.loading = false;
      state.error = true;
      state.erroMsg = "Error";
    },
    addUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
  },
});

export const selectUser = (state: any) => state.user;

// ACTIONS
export const { addUser } = userSlice.actions;

// ASYNC ACTIONS

export const fetchUser = (id: string): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    console.log("LETS TRY");
    dispatch(userSlice.actions.fetchUserRequest(null));
    const response: any = await api({ url: `${ROUTES.FETCH_USER}${id}` });
    const { email, username } = response;
    console.log("RESPONSE: ", response);
    dispatch(userSlice.actions.fetchUserSuccess({ email, username }));
  } catch (err) {
    console.log("ERROR: ", err);
    dispatch(userSlice.actions.fetchUserFailure(null));
  }
};

export default userSlice.reducer;
