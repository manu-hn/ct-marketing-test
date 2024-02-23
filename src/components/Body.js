import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./Home.js";
import History from './nav/History.js';
import Team from './nav/Team.js';

const Body = () => {

  const rootRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      

    },{
      path: "/history",
      element: <History />
    },
    {
      path: "/team",
      element: <Team />
    }

  ])

  return (
    <div>
      <RouterProvider router={rootRouter} />
    </div>
  )
}

export default Body