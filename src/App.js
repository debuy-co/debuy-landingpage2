import Main from "./Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //package imported to create our routes and use them

const router = createBrowserRouter([
  {
    path: "/", //this is the generic path , the one tha corrispond to the domain
    element: <Main />,
  } /*this routed object takes a couple of property to configure the route: the path and the component that shall be loaded when that path is reached*/,
]); //this function is an array of routes objects

function App() {
  return <RouterProvider router={router} />;
}

export default App;
