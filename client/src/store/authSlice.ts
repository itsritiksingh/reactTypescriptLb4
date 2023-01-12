import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
import url from "../config";
import { useNavigate } from "react-router-dom";

export interface authState {
  id: string,
  firstname: string,
  lastname:string,
  email:string,
  loginmsg:string
  token?:string
}

const initialState = {
  id: "",
  firstname: "",
  lastname:"",
  email:"",
  token:""
} as authState

export const signup =  createAsyncThunk(
    'signup',
    async (data:authState) => {
    const request = await axios
      .post(`${url}/users/signin`, data)
    return request.data;  
  });
  
export const login =  createAsyncThunk(
    'login',
    async (data:authState) => {
    const request = await axios
      .post(`${url}/users/login`, data)
    return request.data;  
  });
  

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateFormData(state,action:PayloadAction<authState>){
      state = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, action) => {
      state = action.payload
      state.loginmsg = "Success";
      let history = useNavigate();
      history("/login");
    })
    builder.addCase(signup.rejected, (state, action) => {
      state.loginmsg = "Error Fetching";
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state = action.payload
      state.loginmsg = "Success";
      let history = useNavigate();
      history("/blog");
    })
    builder.addCase(login.rejected, (state, action) => {
      state.loginmsg = "Error Fetching";
    })
  },
})

export const { updateFormData } = authSlice.actions
export default authSlice.reducer