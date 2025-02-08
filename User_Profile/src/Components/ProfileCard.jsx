import React from "react";

const ProfileCard = ({ user }) => {
    if (!user) return <p>Loading...</p>;

    return (
        <div className="main border-1 border-blue h-50 p-5 flex items-center space-x-4 bg-gradient-to-r from-yellow-50 to-yellow-100 shadow-lg rounded-lg">
            <div className="w-30 h-30 border-1 border-black hover:scale-110 hover:shadow-xl transition-transform duration-300">
                <img src={user.picture.large} alt="Profile" className="w-full h-full object-cover rounded-md" />
            </div>

            <div className="flex flex-col justify-center">
                <div className="flex space-x-2 items-center ml-3 mb-3">
                    <span className="font-semibold text-[20px]">{user.name.first}</span>
                    <span className="font-semibold text-[20px]">{user.name.last}</span>
                </div>
                <p className="ml-3 text-[18px] mb-2 ">Gender: {user.gender}</p>
                <p className="ml-3 text-[18px] ">Phone: {user.phone}</p>
            </div>
        </div>
    );
};

export default ProfileCard;
