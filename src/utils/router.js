export const browserRouter = (newPath, render) => {
  history.pushState(null, "", newPath);
  render();
};
