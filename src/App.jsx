import "./App.css";

import { useContext } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Error from "./pages/Error";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import { AuthContext } from "./context/authContext";

function RequireAuth({ children }) {
  const { user } = useContext(AuthContext);

  return user ? children : <Navigate to="/login" replace />;
}

function NotRequireAuth({ children }) {
  const { user } = useContext(AuthContext);

  return user ? <Navigate to="/" replace /> : children;
}

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <DashboardPage />
      </RequireAuth>
    ),
    errorElement: <Error />,
  },
  {
    path: "/balance",
    element: (
      <RequireAuth>
        <BalancePage />
      </RequireAuth>
    ),
  },
  {
    path: "/login",
    element: (
      <NotRequireAuth>
        <SignInPage />
      </NotRequireAuth>
    ),
  },
  {
    path: "/sign-in",
    element: (
      <NotRequireAuth>
        <SignInPage />
      </NotRequireAuth>
    ),
  },
  {
    path: "/register",
    element: (
      <NotRequireAuth>
        <SignUpPage />
      </NotRequireAuth>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <NotRequireAuth>
        <SignUpPage />
      </NotRequireAuth>
    ),
  },
]);

function App() {
  return <RouterProvider router={myRouter} />;
}

export default App;