import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./pages/home.jsx";
import AddExpense from "./pages/addExpense.jsx";
import Balances from "./pages/balances.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* Navigation Bar */}
      <nav
        style={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #e5e7eb",
          padding: "12px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0, fontWeight: 700 }}>Splitwise - Level 1</h1>
        <div style={{ display: "flex", gap: "16px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "#2563eb" }}>
            Home{" "}
          </Link>
          <Link to="/add" style={{ textDecoration: "none", color: "#2563eb" }}>
            Add Expense{" "}
          </Link>
          <Link
            to="/balances"
            style={{ textDecoration: "none", color: "#2563eb" }}
          >
            Balances{" "}
          </Link>{" "}
        </div>{" "}
      </nav>

      {/* Page Routes */}
      <div
        style={{ maxWidth: "900px", margin: "24px auto", padding: "0 20px" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddExpense />} />
          <Route path="/balances" element={<Balances />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
