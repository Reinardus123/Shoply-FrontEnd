import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileSidebar from "../components/Admin/ProfileSidebar";
import ProfileStats from "../components/Profile/ProfileStats";
import RecentOrders from "../components/Profile/RecentOrders";
import ProfileInfo from "../components/Profile/ProfileInfo";
import Navbar from "../components/HomePage/Navbar";
import Footer from "../components/HomePage/Footer";
import ProfileContent from "./ProfileContent";
import React from "react";

function Profile(){
    return (
        <div>
            <Navbar/>

            <div className="min-h-screen bg-purple-50 p-4">
                 <ProfileContent/>
            </div>
           
            <Footer/>
    </div>
    );
}

export default Profile;