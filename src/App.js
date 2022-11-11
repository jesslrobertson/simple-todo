import React, { useContext } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import TodoList from "./pages/TodoList";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserContext } from "./UserProvider";

function App() {
  const { token, logout } = useContext(UserContext);

  console.log(token);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/todolist" /> : <Auth />}
        />
        <Route
          path="/todolist"
          element={
            <ProtectedRoute token={token} redirectTo={"/"}>
              <TodoList />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
