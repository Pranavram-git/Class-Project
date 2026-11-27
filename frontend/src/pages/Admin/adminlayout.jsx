import { Link, Outlet } from "react-router-dom";

function Admin() {
    return ( 
        <div>
            <h1> I'm Shadow Monarch</h1>
            <nav>
                <Link to = {"/admin/dashboard"}>Dashboard</Link>
                <Link to = {"/admin/settings"}>Settings</Link>
                <Link to = {"/admin/details"}>User Details</Link>
            </nav>
            <Outlet/>
                Wake Up TO Reality
                No Curse is Better Than A Love 
                      -Once A Wise Man Said
        </div>
     );
}

export default Admin;