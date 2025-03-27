import { App } from "./App";
import { browserRouter } from "./utils/router";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "./utils/storage";

const handleClick = (event) => {
  const { target } = event;

  const isLogout = target.id === "logout";
  if (isLogout) {
    removeLocalStorage("user");
    browserRouter("/", render);
  }

  const isLink = target.tagName === "A" && target.href;
  if (isLink) {
    event.preventDefault();
    browserRouter(target.href, render);
  }
};

const handleLogin = (username) => {
  setLocalStorage("user", { username, email: "", bio: "" });
  browserRouter("/", render);
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
    browserRouter("/login", render);
    return;
  }

  if (user && currentUrl === "/login") {
    browserRouter("/", render);
    return;
  }

  document.body.innerHTML = `<div id="root">${App({ user })}</div>`;
  document.body.addEventListener("click", handleClick);
  document.body.addEventListener("submit", handleSubmit);
};

window.addEventListener("popstate", render);

render();
