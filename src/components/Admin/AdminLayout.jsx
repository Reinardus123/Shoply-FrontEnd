import ProfileSidebar from "./ProfileSidebar";
import Navbar from "../HomePage/Navbar";
import ProfileHeader from "../Profile/ProfileHeader";
import ProfileStats from "../Profile/ProfileStats";
import ProfileInfo from "../Profile/ProfileInfo";
import RecentOrders from "../Profile/RecentOrders";
import { Outlet } from "react-router-dom";
function AdminLayout(){
    
    return (
        <>
        <Navbar/>
             <div className="min-h-screen bg-purple-50 p-5">
            <div className="flex gap-6">
               <ProfileSidebar/>

               
                <div className="flex-1">
                   <Outlet/>
                </div>
            </div>
        </div>
        </>
    )
}

export default AdminLayout;