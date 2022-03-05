import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, SignUp } from "./pages/auth/auth";
import Navbar from "./comps/Navbar/Navbar";
import Dashboard from "./pages/dashboard/dashboard";
import { PrivateRoute } from "./comps/PrivateRoute/PrivateRoute";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<SignUp />} />
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
