import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-72 bg-base-100 border-r border-base-300 flex flex-col transition-all duration-300 shadow-md">
      {/* Header */}
      <div className="border-b border-base-300 px-4 py-5">
        <div className="flex items-center gap-3">
          <Users className="text-primary size-6" />
          <span className="font-semibold text-lg hidden lg:block">Contacts</span>
        </div>

        {/* Toggle Online Users */}
        <div className="mt-4 hidden lg:flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="toggle toggle-sm toggle-primary"
            />
            Show online only
          </label>
          <span className="text-xs text-zinc-500">({onlineUsers.length - 1} online)</span>
        </div>
      </div>

      {/* User List */}
      <div className="flex-1 overflow-y-auto py-4 px-2 space-y-2">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
              w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all
              ${selectedUser?._id === user._id ? "bg-primary/10 ring-2 ring-primary" : "hover:bg-base-200"}
            `}
          >
            {/* Avatar */}
            <div className="relative">
              <img
                src={user.profilePic || "/avatar.png"}
                alt={user.name}
                className="size-10 object-cover rounded-full border border-base-300"
              />
              {onlineUsers.includes(user._id) && (
                <span className="absolute bottom-0 right-0 size-2.5 bg-green-500 rounded-full ring-2 ring-base-100" />
              )}
            </div>

            {/* Name & Status */}
            <div className="hidden lg:flex flex-col truncate min-w-0 text-left">
              <span className="font-medium truncate">{user.fullName}</span>
              <span className="text-xs text-zinc-400">
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </span>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center text-zinc-500 py-6 text-sm">
            No users {showOnlineOnly ? "online" : "found"}
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
