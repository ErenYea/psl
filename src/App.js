import { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Welcome from "./Components/Welcome";
import Signup from "./Components/Signup";

function App() {
  const [user, setUser] = useState(null);
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <>
            <Login setUser={setUser} />
          </>
        }
      />
      <Route
        path="/signup"
        element={
          <>
            <Signup setUser={setUser} />
          </>
        }
      />
      <Route
        path="/welcome"
        element={
          <>
            <Welcome user={user} setUser={setUser} />
          </>
        }
      />
      <Route
        path="*"
        element={
          <>
            <Navigate to="/login" replace={true} />
          </>
        }
      />
    </Routes>
  );
}

export default App;
