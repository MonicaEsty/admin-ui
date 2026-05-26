import "./App.css";

import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Error from "./pages/Error";

import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

const myRouter = createBrowserRouter([
  {
    path: "/",

    element: (
      <div className="flex justify-center items-center min-h-screen">
        <Link
          to="/sign-in"
          className="p-2 m-5 bg-primary text-white"
        >
          Login
        </Link>

        |

        <Link
          to="/sign-up"
          className="p-2 m-5 bg-primary text-white"
        >
          Register
        </Link>
      </div>
    ),

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
]);

function App() {
  return (
    <RouterProvider router={myRouter} />
  );
}

export default App;