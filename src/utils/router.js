import { NotFound } from "../components/NotFound";
import { RootLayout } from "../layouts/RootLayout";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/ProfilePage";
import { getLocalStorage } from "./storage";

export const Router = {
  routes: {
    "/": HomePage,
    "/login": LoginPage,
    "/profile": ProfilePage,
  },

  init({ onClick, onSubmit }) {
    addEventListener("load", this.render.bind(this));
    addEventListener("click", onClick);
    addEventListener("submit", onSubmit);
    addEventListener("popstate", this.render.bind(this));
    addEventListener("hashchange", this.render.bind(this));

    const isRouteGuardPassed = this.routeGuard();
    if (isRouteGuardPassed) {
      this.render();
    }
  },

  navigate(path, useHash = location.hash) {
    if (useHash) {
      location.hash = path;
    } else {
      history.pushState(null, "", path);
    }
    this.render();
  },

  routeGuard() {
    const auth = this.getAuth();
    const currentPath = this.getCurrentPath();

    const isUnAuthorized = !auth && currentPath.includes("/profile");
    if (isUnAuthorized) {
      return this.navigate("/login");
    }

    const isAlreadyLoggedIn = auth && currentPath.includes("/login");
    if (isAlreadyLoggedIn) {
      return this.navigate("/");
    }

    return true;
  },

  render() {
    const currentPath = this.getCurrentPath();
    const currentComponent = this.routes[currentPath];

    console.log(currentPath, currentComponent);

    let page = null;
    if (!currentComponent) {
      page = NotFound();
    } else if (currentPath.includes("login")) {
      page = LoginPage();
    } else {
      page = RootLayout({ children: currentComponent() });
    }

    document.body.innerHTML = `<div id="root">${page}</div>`;
  },

  getAuth() {
    return getLocalStorage("user");
  },

  getBasePath() {
    return import.meta.env.VITE_BASE_URL;
  },

  getCurrentPath() {
    const isHashRouter = location.hash;
    if (isHashRouter) {
      return location.hash.slice(1)?.replace(this.getBasePath(), "/");
    }

    return location.pathname?.replace(this.getBasePath(), "/");
  },
};
