import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="min-h-screen pt-24 px-4 bg-base-100">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-base-content">My Profile</h1>
          <p className="text-sm text-base-content/60">
            Manage your account details and avatar
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-base-200 rounded-2xl p-6 shadow-md space-y-10">
          {/* Avatar Upload Section */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative group transition-transform duration-200">
              <img
                src={selectedImg || authUser?.profilePic || "/avatar.png"}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 shadow-lg"
              />
              <label
                htmlFor="avatar-upload"
                className={`
                  absolute bottom-0 right-0 bg-primary p-2 rounded-full
                  cursor-pointer transition hover:scale-105
                  ${isUpdatingProfile ? "animate-pulse pointer-events-none opacity-70" : ""}
                `}
              >
                <Camera className="w-5 h-5 text-white" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="text-xs text-base-content/60">
              {isUpdatingProfile ? "Uploading..." : "Click the camera to update your photo"}
            </p>
          </div>

          {/* Info Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center text-sm text-base-content/60 gap-2 mb-1">
                <User className="w-4 h-4" />
                Full Name
              </div>
              <div className="bg-base-100 border border-base-300 rounded-lg px-4 py-2 text-base-content">
                {authUser?.fullName}
              </div>
            </div>

            <div>
              <div className="flex items-center text-sm text-base-content/60 gap-2 mb-1">
                <Mail className="w-4 h-4" />
                Email Address
              </div>
              <div className="bg-base-100 border border-base-300 rounded-lg px-4 py-2 text-base-content">
                {authUser?.email}
              </div>
            </div>
          </div>
        </div>

        {/* Account Info */}
        <div className="bg-base-200 rounded-2xl p-6 shadow-md space-y-4">
          <h2 className="text-lg font-semibold text-base-content">Account Info</h2>
          <div className="grid gap-4 text-sm text-base-content">
            <div className="flex items-center justify-between border-b border-base-300 pb-2">
              <span>Member Since</span>
              <span>{authUser?.createdAt?.split("T")[0]}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Account Status</span>
              <span className="text-green-500 font-medium">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;