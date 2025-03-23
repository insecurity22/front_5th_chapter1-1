import { MainPage } from "./pages/MainPage";
import { LoginPage } from "./pages/LoginPage";
import { ProfilePage } from "./pages/ProfilePage";
import { NotFound } from "./components/NotFound";
import { RootLayout } from "./layouts/RootLayout";
import { navigate } from "./utils/navigation";

const state = {
  isLoggedIn: false,
};

const routes = {
  "/": MainPage,
  "/login": LoginPage,
  "/profile": ProfilePage,
};

const App = () => {
  const { isLoggedIn } = state;

  if (location.pathname === "/profile" && !isLoggedIn) {
    navigate("/login", render);
  }

  const page = routes[location.pathname] || NotFound;
  if (location.pathname !== "/login") {
    return RootLayout({ children: page, isLoggedIn });
  }

  return page;
};

export const render = () => {
  document.body.innerHTML = App();

  document.body.addEventListener("click", (e) => {
    const isLink = e.target.tagName === "A" && e.target.href;
    if (isLink) {
      e.preventDefault();
      navigate(e.target.href, render);
    }
  });
};

window.addEventListener("popstate", render);

render();
