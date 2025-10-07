import React, { useContext } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/home.jsx";
import AddExpense from "./pages/addExpense.jsx";
import Balances from "./pages/balances.jsx";
import Login from "./pages/logIn.jsx";
import Signup from "./pages/signUp.jsx";
import { AuthContext } from "./context/authContext.jsx";

function ProtectedRoute({ children }) {
  const { token } = useContext(AuthContext);
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  const { token, logout } = useContext(AuthContext);
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const currentUserId = user?._id || "";

  return (
    <div className="app">
      {" "}
      <nav className="nav">
        {" "}
        <h1 className="brand">Splitwise - Level 2</h1>{" "}
        <div className="links">
          {!token ? (
            <>
              {" "}
              <Link to="/login">Login</Link> <Link to="/signup">Signup</Link>
            </>
          ) : (
            <>
              {" "}
              <Link to="/">Home</Link> <Link to="/add">Add Expense</Link>{" "}
              <Link to="/balances">Balances</Link>
              <button
                onClick={logout}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#ef4444",
                  cursor: "pointer",
                  marginLeft: "10px",
                }}
              >
                Logout{" "}
              </button>
            </>
          )}{" "}
        </div>{" "}
      </nav>
      <main className="container">
        <Routes>
          {/* Public routes */}
          <Route
            path="/login"
            element={!token ? <Login /> : <Navigate to="/" replace />}
          />
          <Route
            path="/signup"
            element={!token ? <Signup /> : <Navigate to="/" replace />}
          />

          {/* Protected routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add"
            // from login response

            element={
              <ProtectedRoute>
                <AddExpense token={token} currentUserId={currentUserId} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/balances"
            element={
              <ProtectedRoute>
                <Balances />
              </ProtectedRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to={token ? "/" : "/login"} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
