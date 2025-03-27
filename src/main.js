import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { ProfilePage } from "./pages/ProfilePage";
import { NotFound } from "./components/NotFound";
import { RootLayout } from "./layouts/RootLayout";
import { navigate } from "./utils/navigation";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "./utils/storage";

const routes = {
  "/": HomePage,
  "/login": LoginPage,
  "/profile": ProfilePage,
};

const App = ({ user }) => {
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

const handleClick = (event) => {
  const { target } = event;

  const isLogout = target.id === "logout";
  if (isLogout) {
    removeLocalStorage("user");
    navigate("/", render);
  }

  const isLink = target.tagName === "A" && target.href;
  if (isLink) {
    event.preventDefault();
    navigate(target.href, render);
  }
};

const handleLogin = (username) => {
  setLocalStorage("user", { username, email: "", bio: "" });
  navigate("/", render);
};

const handleProfile = (username) => {
  const email = document.getElementById("email")?.value?.trim();
  const bio = document.getElementById("bio")?.value?.trim();

  setLocalStorage("user", { username, email, bio });
  alert("프로필이 업데이트 되었습니다.");
};

const handleSubmit = (event) => {
  event.preventDefault();

  const username = document.getElementById("username")?.value?.trim();
  if (!username) return;

  if (event.target.id === "login-form") {
    handleLogin(username);
  }

  if (event.target.id === "profile-form") {
    handleProfile(username);
  }
};

export const render = () => {
  const user = getLocalStorage("user");
  const currentUrl = location.pathname;
  if (!user && currentUrl === "/profile") {
    navigate("/login", render);
    return;
  }

  document.body.innerHTML = `<div id="root">${App({ user })}</div>`;
  document.body.addEventListener("click", handleClick);
  document.body.addEventListener("submit", handleSubmit);
};

window.addEventListener("popstate", render);

render();
