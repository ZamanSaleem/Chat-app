import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, Settings, User, MessageCircleDashed } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-90 transition-all"
          >
            <div className="size-9 rounded-xl bg-primary/10 flex items-center justify-center shadow-sm">
              <MessageCircleDashed className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-xl font-semibold tracking-tight text-primary">
              ChatApplication
            </h1>
          </Link>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2 text-sm">
            <Link
              to="/settings"
              className="btn btn-sm btn-ghost gap-2 px-3 hover:bg-base-200"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link
                  to="/profile"
                  className="btn btn-sm btn-ghost gap-2 px-3 hover:bg-base-200"
                >
                  <User className="w-5 h-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button
                  onClick={logout}
                  className="btn btn-sm btn-ghost gap-2 px-3 hover:bg-red-100 text-red-500"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
