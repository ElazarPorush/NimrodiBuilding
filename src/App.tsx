import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Reception from "./pages/Reception/Reception";
// import Floor from "./pages/Floor/Floor";
import PrivateRoute from "./utils/PrivateRoute";
import Layout from "./components/Layout/Layout";
import Forbidden from "./pages/Forbidden/Forbidden";
import Floor from "./pages/Floor/Floor";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />
  },
  {
    path: "/floor/:index",
    element: <PrivateRoute />
  },
  {
    path: "/forbidden",
    element: <Forbidden />
  }
]);

function App() {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
