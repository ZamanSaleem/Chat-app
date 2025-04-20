
import { useThemeStore } from "../store/useThemeStore";
import { Send } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
];

const SettingsPage = () => {
  const { theme, toggleTheme} = useThemeStore();

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 bg-base-100">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Theme Selection */}
        {/* <section className="space-y-3">
          <h2 className="text-2xl font-bold text-base-content">Customize Your Theme</h2>
          <p className="text-sm text-base-content/70">
            Choose a look for your chat experience.
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mt-4">
            {THEMES.map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={`group flex flex-col items-center gap-2 p-3 rounded-xl border transition-all shadow-sm
                  ${theme === t ? "border-primary bg-base-200" : "border-base-300 hover:bg-base-200/50"}`}
              >
                <div className="relative h-8 w-full rounded-md overflow-hidden ring-1 ring-base-300" data-theme={t}>
                  <div className="absolute inset-0 grid grid-cols-4 gap-0.5 p-1">
                    <div className="rounded bg-primary"></div>
                    <div className="rounded bg-secondary"></div>
                    <div className="rounded bg-accent"></div>
                    <div className="rounded bg-neutral"></div>
                  </div>
                </div>
                <span className="text-xs font-medium truncate w-full text-center">
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </span>
              </button>
            ))}
          </div>
        </section> */}
         <section className="space-y-3">
          <h2 className="text-2xl font-bold text-base-content">Theme Settings</h2>
          <p className="text-sm text-base-content/70">
            Switch between light and dark mode.
          </p>
          <button
            onClick={toggleTheme}
            className="btn btn-primary"
          >
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </section>

        {/* Chat Preview */}
        <section>
          <h3 className="text-xl font-semibold mb-3">Preview</h3>
          <div className="rounded-2xl border border-base-300 overflow-hidden bg-base-100 shadow-lg">
            <div className="bg-base-200 px-4 py-6">
              <div className="max-w-lg mx-auto space-y-4">
                {/* Chat Card */}
                <div className="bg-base-100 rounded-xl border border-base-300 shadow-sm overflow-hidden">
                  {/* Header */}
                  <div className="px-4 py-3 bg-base-100 border-b border-base-300 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-content font-bold">
                      J
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">John Doe</h4>
                      <p className="text-xs text-base-content/60">Online</p>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="p-4 space-y-4 h-[220px] overflow-y-auto bg-base-100">
                    {PREVIEW_MESSAGES.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm shadow-sm ${
                            message.isSent
                              ? "bg-primary text-primary-content rounded-br-none"
                              : "bg-base-200 text-base-content rounded-bl-none"
                          }`}
                        >
                          <p>{message.content}</p>
                          <p
                            className={`text-[10px] mt-1 ${
                              message.isSent ? "text-primary-content/60" : "text-base-content/60"
                            }`}
                          >
                            12:00 PM
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input */}
                  <div className="p-4 border-t border-base-300 bg-base-100">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        className="input input-bordered flex-1 h-10 text-sm"
                        placeholder="Type a message..."
                        value="This is a preview"
                        readOnly
                      />
                      <button className="btn btn-primary h-10 min-h-0 px-3">
                        <Send size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SettingsPage;
