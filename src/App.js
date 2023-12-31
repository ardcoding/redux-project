import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom"

import Project from "./pages/Project"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import SingleTask from "./pages/SingleTask"

function App() {
  const Layout = () => {
    return (
      <div className='flex'>
        <Sidebar />
        <div className='flex-1'>
          <Navbar />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/project",
          element: <Project />,
          children: [
            {
              path: "/project/:id",
              element: <SingleTask />,
            },
          ],
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
