import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bio from "./pages/Bio";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/bio",
    element: <Bio />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
