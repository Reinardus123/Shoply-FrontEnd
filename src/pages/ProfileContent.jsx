import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileSidebar from "../components/Admin/ProfileSidebar";
import ProfileStats from "../components/Profile/ProfileStats";
import RecentOrders from "../components/Profile/RecentOrders";
import ProfileInfo from "../components/Profile/ProfileInfo";
import Navbar from "../components/HomePage/Navbar";
import api from "../api/api";
import { useState, useEffect } from "react";


function ProfileContent(){

    const [isEdit, setIsEdit] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchProfile();
    },[]);

    async function fetchProfile(){
         
        try{
            const response = await api.get("/profile");
            
            setUser(response.data);

        } catch(error){
            console.log(error);
        }
    }

    return (
        
            <div className="flex gap-6">

                <div className="flex-1 space-y-6">
                    <ProfileHeader
                        user={user}
                        onEdit={() => setIsEdit(true)}
                    />
                    <ProfileStats/>

                    <div className="grid grid-cols-2 gap-6">
                        <ProfileInfo
                            user={user}
                            setUser={setUser}
                            isEdit={isEdit}
                            setIsEdit={setIsEdit}
                        />
                        <RecentOrders/>
                    </div>
                </div>
            </div>
        
    );
}

export default ProfileContent