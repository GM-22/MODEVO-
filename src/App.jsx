import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./components/mainLayout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import PagesPage from "./pages/PagesPage";
import BlogPage from "./pages/BlogPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children : [
      {
        index : true,
        element : <HomePage />
      },
      {
        path:"/shop",
        element : <ShopPage />
      },
      {
        path:"/product",
        element : <ProductPage />
      },
      {
        path:"/pages",
        element : <PagesPage />
      },
      {
        path:"/blog",
        element : <BlogPage />
      },
      {
        path:"*",
        element : <NotFoundPage />
      },
    ]
  },
]);

const App = () => {
  return  <RouterProvider router={router} />
}

export default App