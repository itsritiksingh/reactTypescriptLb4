import React from "react";
import "./App.css";
// import "antd/dist/antd.css";
// import { Projects } from "./screens/projects";
// import { Projectview } from "./screens/projectview";
import SignIn from "./components/signin/SignIn";
// import { ProtectedRoute } from "./helper/protectedRoute";
import SignUp from "./components/Login/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* <ProtectedRoute path="/" exact component={Projects}/> */}
      {/* <ProtectedRoute path="/projectview" component={Projectview}/> */}
           <Route path="/login" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;