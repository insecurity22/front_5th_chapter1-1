import { Router } from "./utils/router";
import { removeLocalStorage, setLocalStorage } from "./utils/storage";

const handleClick = (event) => {
  const { target } = event;
  const { id, tagName, href } = target;

  const isLogoutButtonClicked = id === "logout";
  if (isLogoutButtonClicked) {
    event.preventDefault();
    removeLocalStorage("user");
  }

  const isLinkClicked = tagName === "A" && href;
  if (isLinkClicked) {
    Router.navigate(href);
  }
};

const handleProfileUpdate = (username) => {
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
    setLocalStorage("user", { username, email: "", bio: "" });
    Router.navigate("/");
  }

  if (event.target.id === "profile-form") {
    handleProfileUpdate(username);
  }
};

Router.init({
  onClick: handleClick,
  onSubmit: handleSubmit,
});
