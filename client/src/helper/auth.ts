import axios from "axios";
import { authState } from "../store/authSlice";

// export const authenticate = (data) => {
//   if (typeof window !== "undefined") {
//     localStorage.setItem("jwt", JSON.stringify(data));
//   }
// };

export const isAuthenticated = (state:authState) => {
  if(!!state.token) return state.token;
  else return false; 
};
