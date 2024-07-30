import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./assets/components/about/About";
import Contact from "./assets/components/contact/Contact";
import Home from "./assets/components/home/Home";
import Portfolio from "./assets/components/portfolio/Portfolio";
import Layout from "./assets/components/layout/layout";

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
