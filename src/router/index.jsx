import { Route, Routes } from "react-router-dom";
import NormalLayout from "../components/layout";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import ProtectedLayout from "../components/common/ProtecedLayout";
import Dashboard from "../modules/admin/Dashboard";
import StudentDashboard from "../modules/student/StudentDashboard";
import TeacherDashboard from "../modules/teacher/TeacherDashboard";
import Login from "../components/Login";
import PrivateRoutes from "./AuthRoute";
import PageNotFound from "../pages/404";
import PublicRoutes from "./PublicRoute";
import Logout from "../components/Logout";
import Profile from "../modules/admin/Profile";
import Setting from "../modules/admin/Setting";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <PublicRoutes>
            <NormalLayout />
          </PublicRoutes>
        }
      >
        <Route path="" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route
        element={
          <PrivateRoutes>
            <ProtectedLayout />
          </PrivateRoutes>
        }
      >
        <Route path="/admin" element={<Dashboard />} >
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Setting />} />
        </Route>
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
