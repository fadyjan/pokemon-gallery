import ReactDOM from "react-dom/client";
import "./App.css";
import { PokemonProvider } from "./context/PokemonProvider";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SearchAppBar from "./components/SearchAppBar/SearchAppBar";
import HomePage from "./pages/HomePage";
import PokemonProfilePage from "./pages/PokemonProfilePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "pokemon/:id",
    element: <PokemonProfilePage></PokemonProfilePage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <PokemonProvider>
      <SearchAppBar></SearchAppBar>
      <RouterProvider router={router} />
    </PokemonProvider>
  </>
);
