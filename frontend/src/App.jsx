import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import StaffPage from "./pages/StaffPage";
import AuthInitializer from "./components/AuthInitializer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/staff-page",
        element: <StaffPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <AuthInitializer>
      <RouterProvider router={router} />
    </AuthInitializer>
  );
};

export default App;
