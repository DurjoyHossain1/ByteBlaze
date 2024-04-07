import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Blogs from "../Pages/Blogs";
import Bookmark from "../Pages/Bookmark";
import Content from "../Components/Content";
import Author from "../Components/Author";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/blog",
          element: <Blog/>,
          loader: () => fetch('https://dev.to/api/articles?par_page=20&top=7')
        },
        {
          path: "/blog/:id",
          element: <Blogs/>,
          loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          children:[
            {
                index:true,
                element:<Content/>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path:'author',
                element:<Author/>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            },
          ]
        },
        {
          path: "/bookmark",
          element: <Bookmark/>,
        },
      ],
    },
  ]);