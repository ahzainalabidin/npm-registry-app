import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/search/SearchPage";
import DetailsPage from "./pages/DetailsPage";
import { searchLoader } from "./pages/search/searchLoader";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/search',
        element: <SearchPage />,
        loader: searchLoader,
      },
      {
        path: '/packages/:name',
        element: <DetailsPage />
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
