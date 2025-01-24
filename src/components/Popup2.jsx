import React, { useState, useEffect } from "react";
import { X, PieChart } from "lucide-react";

const LeftSideInsightsPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 24000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed left-0 top-96 mt-20 transform z-50 w-76 bg-primary border border-primary text-primary shadow-xl rounded-r-2xl p-5 font-sans">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2"
      >
        <X size={20} className="cursor-pointer" />
      </button>

      <div className="flex place-items-start mb-4">
        {/* <PieChart className="text-green-600 mr-2" size={24} /> */}
        <h3 className="text-lg font-semibold text-yellow-400">
          Want detailed insights from{" "}
          <span className="underline">X, Linkedin, Reddit</span> ?
        </h3>
      </div>

      <p className="text-sm  mb-4">
        Comprehensive user touchpoint analysis across{" "}
        <strong>X, Linkedin, Reddit</strong>
      </p>

      <div className="space-y-3">
        <div className="bg-secondary p-3 rounded-md">
          <h4 className="font-semibold text-green-800 mb-2">
            What you'll get ?
          </h4>
          <ul className="text-sm space-y-1">
            <li>• Sentimental Analysis</li>
            <li>• Competitive Analysis</li>
            <li>• Trends and Key Discussions</li>
            <li>• List of Prospects</li>
            <li>• Feedback and Suggestions</li>
            <li>• and many more..</li>
          </ul>
        </div>
      </div>

      <a
        href="https://prospectraai.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="w-full font-bold mt-4 py-2 rounded-md btn-primary transition cursor-pointer btn-primary-hover">
          Get Insights
        </button>
      </a>
    </div>
  );
};

export default LeftSideInsightsPopup;
