import "./App.css";

import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Error from "./pages/Error";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
    errorElement: <Error />,
  },

  {
    path: "/sign-in",
    element: <SignInPage />,
  },

  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/balance",
    element: <BalancePage />,
  }

]);

function App() {
  return <RouterProvider router={myRouter} />;
}

export default App;