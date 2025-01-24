import React, { useState, useEffect } from "react";
import { X, TrendingUp } from "lucide-react";

const SidePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 w-72 bg-primary border border-primary text-primary shadow-2xl rounded-l-lg p-4 font-sans">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2"
      >
        <X size={20} className="cursor-pointer" />
      </button>

      <div className="flex items-center mb-3">
        <TrendingUp className="text-blue-600 mr-2" size={24} />
        <h3 className="text-lg font-semibold">Prospectra Insights</h3>
      </div>

      <p className="text-sm  mb-4">
        Turn Social Media Chaos into Actionable Insights in Seconds!
      </p>
      <p className="text-sm  mb-4 bg-secondary p-4">
        Uncover trends, audience insights, signals, and data-driven
        opportunities. No manual work, no guesswork, just instant results.{" "}
      </p>

      <a
        href="https://prospectraai.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="w-full py-2 rounded-md btn-secondary outfit-regular transition cursor-pointer btn-secondary-hover">
          Know More
        </button>
      </a>
    </div>
  );
};

export default SidePopup;
