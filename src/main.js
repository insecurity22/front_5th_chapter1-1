import { MainPage } from "./pages/MainPage";
import { LoginPage } from "./pages/LoginPage";
import { ProfilePage } from "./pages/ProfilePage";
import { NotFound } from "./components/NotFound";
import { RootLayout } from "./layouts/RootLayout";
import { navigate } from "./utils/navigation";
import { getLocalStorage, setLocalStorage } from "./utils/storage";

const routes = {
  "/": MainPage,
  "/login": LoginPage,
  "/profile": ProfilePage,
};

const App = () => {
  const user = getLocalStorage("user");

  if (location.pathname === "/profile" && !user) {
    navigate("/login", render);
  }

  const pageComponent = routes[location.pathname];
  const page = pageComponent ? pageComponent({ user }) : NotFound;
  if (location.pathname !== "/login") {
    return RootLayout({ children: page, isLoggedIn: !!user });
  }

  return page;
};

const handleClick = (event) => {
  const { target } = event;

  const isLogout = target.id === "logout";
  if (isLogout) {
    localStorage.removeItem("user");
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
  document.body.innerHTML = App();
  document.body.addEventListener("click", handleClick);
  document.body.addEventListener("submit", handleSubmit);
};

window.addEventListener("popstate", render);

render();
