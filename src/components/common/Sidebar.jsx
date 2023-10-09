import { Link } from "react-router-dom";

const SideBar = () => {
  const role = localStorage.getItem("role");
  return (
    <div
      className={
        role === "admin"
          ? "admin-sidebar"
          : role === "student"
          ? "student-sidebar"
          : "teacher-sidebar"
      }
    >
      <ul>
        {role === "admin" && (
          <>
            <li>
              <Link to="/admin/profile">Profile</Link>
            </li>
            <li>
              <Link to="/admin/settings">Settings</Link>
            </li>
            <li>
              <a href="">option 1</a>
            </li>
          </>
        )}
        {role === "student" && (
          <>
            <li>
              <a href="">option 1</a>
            </li>
            <li>
              <a href="">option 1</a>
            </li>
            <li>
              <a href="">option 1</a>
            </li>
          </>
        )}
        {role === "teacher" && (
          <>
            <li>
              <a href="">option 1</a>
            </li>
            <li>
              <a href="">option 1</a>
            </li>
            <li>
              <a href="">option 1</a>
            </li>
          </>
        )}

        <li>
          <Link to="/logout">logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
