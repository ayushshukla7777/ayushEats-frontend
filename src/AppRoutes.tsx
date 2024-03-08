import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "@/layouts/layout";
import HomePage from "@/pages/HomePage";
import AuthCallBackPage from "./pages/AuthCallBackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoutes from "./pages/ProtectedRoutes";


function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path='/auth-callback' element={<AuthCallBackPage />} />

      <Route element={<ProtectedRoutes />}>
        <Route path='/user-profile' element={<Layout ><UserProfilePage /></Layout>} />

      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRoutes