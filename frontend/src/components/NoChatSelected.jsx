import { MessageCircleDashed } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* Animated Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center shadow-lg animate-pulse">
            <MessageCircleDashed className="w-10 h-10 text-primary" />
          </div>
        </div>

        {/* Welcome Message */}
        <h2 className="text-3xl font-bold text-base-content">Welcome to <span className="text-primary">Chat Application</span>!</h2>
        <p className="text-base text-base-content/60">
          Select a conversation from the sidebar to start chatting with your contacts.
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
