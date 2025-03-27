import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { ProfilePage } from "./pages/ProfilePage";
import { NotFound } from "./components/NotFound";
import { RootLayout } from "./layouts/RootLayout";

const routes = {
  "/": HomePage,
  "/login": LoginPage,
  "/profile": ProfilePage,
};

export const App = ({ user }) => {
  const currentUrl = location.pathname;
  const pageComponent = routes[currentUrl];
  if (!pageComponent) {
    return NotFound();
  }

  const page = pageComponent({ user });
  if (currentUrl !== "/login") {
    return RootLayout({ children: page, user });
  }

  return page;
};
