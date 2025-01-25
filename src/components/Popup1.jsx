import React, { useState, useEffect } from "react";
import { X, TrendingUp } from "lucide-react";

const SidePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed right-0 top-18 transform -translate-y-1/2 z-50 w-56 sm:w-64 bg-primary border border-primary text-primary shadow-xl rounded-l-lg p-3 font-sans">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2"
      >
        <X
          size={16}
          className="cursor-pointer  border border-primary rounded-md"
        />
      </button>

      <div className="flex items-center mb-2">
        <TrendingUp className="text-blue-600 mr-2" size={20} />
        <h3 className="text-sm font-semibold text-yellow-400">
          Get detailed Insights
        </h3>
      </div>

      <p className="text-xs mb-3">
        Turn social media chaos into actionable insights in seconds with
        one-click!
      </p>

      <a
        href="https://prospectraai.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="w-full py-2 text-xs font-bold rounded-md btn-primary transition cursor-pointer btn-primary-hover">
          Know More
        </button>
      </a>
    </div>
  );
};

export default SidePopup;
