import React from "react";

const ProfileCard = ({ user }) => {
    if (!user) return <p>Loading...</p>;

    return (
        <div className="main border-1 border-blue h-60 p-5 flex items-center space-x-4 bg-white shadow-lg rounded-lg">
            {/* Profile Image */}
            <div className="w-35 h-35 border-1 border-black">
                <img src={user.picture.large} alt="Profile" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="flex flex-col justify-center">
                <div className="flex space-x-5 items-center ml-5 mb-10">
                    <span className="font-semibold ">{user.name.first}</span>
                    <span className="font-semibold">{user.name.last}</span>
                </div>

                <p className="mt-1">Gender: {user.gender}</p>
                <p className="mt-1">Phone: {user.phone}</p>
            </div>
        </div>
    );
};

export default ProfileCard;
