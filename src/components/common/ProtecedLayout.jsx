import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";

const ProtectedLayout = () =>{
    return(
        <div className="panel">
            <div className="sidebar-panel">
                <SideBar />
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default ProtectedLayout;