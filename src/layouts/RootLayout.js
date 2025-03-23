import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const RootLayout = ({ children, isLoggedIn }) => {
  return `
    <div id="root">
      <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
          ${Header({ isLoggedIn })}
          ${children}
          ${Footer()}
        </div>
      </div>
    </div>
  `;
};
