const ChatWelcomePanel = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center w-1/2 bg-gradient-to-br from-blue-100 via-purple-50 to-white p-12 shadow-inner">
      <div className="max-w-md text-center">
        {/* Sample Chat Bubbles (Decorative) */}
        <div className="flex flex-col gap-3 mb-10">
          <div className="self-start bg-white/70 text-gray-700 py-2 px-4 rounded-xl max-w-xs shadow-sm">
            👋 Hey there!
          </div>
          <div className="self-end bg-purple-200 text-gray-800 py-2 px-4 rounded-xl max-w-xs shadow-md">
            Welcome to Chat Application 🚀
          </div>
          <div className="self-start bg-white/70 text-gray-700 py-2 px-4 rounded-xl max-w-xs shadow-sm">
            Let's get you started.
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-base leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default ChatWelcomePanel;
