import Header from "./components/Header";
import Home from "./pages/Home";
import Insights from "./pages/Insights";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //package imported to create our routes and use them

const router = createBrowserRouter([
  //this route is the main one, it acts as a parent route
  {
    path: "/",
    element: <Header />, //here we add the element that shall wrap around the other paths
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/Insights",
        element: <Insights />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
