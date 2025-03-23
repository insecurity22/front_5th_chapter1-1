export const navigate = (newPath, render) => {
  history.pushState(null, "", newPath);
  render();
};
