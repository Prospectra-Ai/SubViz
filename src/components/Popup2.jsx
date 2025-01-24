import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const LeftSideInsightsPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 28000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 w-64 sm:w-72 bg-primary border border-primary text-primary shadow-xl rounded-r-xl p-4 font-sans">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2"
      >
        <X size={16} className="cursor-pointer" />
      </button>

      <div className="flex items-start mb-2">
        <h3 className="text-sm font-semibold text-yellow-400">
          Want insights from{" "}
          <span className="underline">X, LinkedIn, Reddit</span>?
        </h3>
      </div>

      <p className="text-xs mb-3">
        User touchpoint analysis across <strong>X, LinkedIn, Reddit</strong>
      </p>

      <div className="space-y-2">
        <div className="bg-secondary p-2 rounded-md">
          <h4 className="font-semibold text-green-800 mb-1 text-sm">
            What you'll get:
          </h4>
          <ul className="text-xs space-y-1">
            <li>• Sentimental Analysis</li>
            <li>• Competitive Analysis</li>
            <li>• Trends and Discussions</li>
            <li>• List of Prospects</li>
            <li>• Feedback and Suggestions</li>
          </ul>
        </div>
      </div>

      <a
        href="https://prospectraai.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="w-full font-bold mt-3 py-2 rounded-md btn-primary text-xs transition cursor-pointer btn-primary-hover">
          Get Insights
        </button>
      </a>
    </div>
  );
};

export default LeftSideInsightsPopup;
