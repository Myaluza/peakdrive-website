import type { RouteRecord } from "vite-react-ssg";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import DeleteAccount from "./pages/DeleteAccount";
import Support from "./pages/Support";
import Plus from "./pages/Plus";
import NotFound from "./pages/NotFound";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "privacy", element: <Privacy /> },
      { path: "terms", element: <Terms /> },
      { path: "delete-account", element: <DeleteAccount /> },
      { path: "support", element: <Support /> },
      { path: "plus", element: <Plus /> },
      // Static route so SSG emits dist/404.html (Netlify's custom 404).
      { path: "404", element: <NotFound /> },
      // Client-side catch-all: any unknown URL renders the same NotFound page.
      { path: "*", element: <NotFound /> },
    ],
  },
];
