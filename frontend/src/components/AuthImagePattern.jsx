import { MessageCircleDashed } from "lucide-react";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200">
      <div className="max-w-md text-center space-y-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-base-content">{title}</h2>

        {/* Subtitle */}
        <p className="text-base-content/70">{subtitle}</p>

        {/* Decorative Chat Bubbles */}
        <div className="flex flex-col gap-3 mt-6">
          <div className="self-start bg-primary text-primary-content py-2 px-4 rounded-xl shadow-md">
            <MessageCircleDashed className="w-5 h-5 inline-block mr-2" />
            Hey there!
          </div>
          <div className="self-end bg-base-100 text-base-content py-2 px-4 rounded-xl shadow-md">
            <MessageCircleDashed className="w-5 h-5 inline-block mr-2" />
            Welcome to Chat Application 🚀
          </div>
          <div className="self-start bg-primary text-primary-content py-2 px-4 rounded-xl shadow-md">
            <MessageCircleDashed className="w-5 h-5 inline-block mr-2" />
            Let's get you started.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthImagePattern;
