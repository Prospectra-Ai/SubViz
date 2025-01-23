import React, { useState } from "react";
import SearchBar from "../SearchBar";
import RedditGraph from "./RedditGraph";

import { motion } from "framer-motion";
import { FaLinkedin, FaReddit, FaXTwitter } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import Card from "./Card";
import axios from "axios";

const REDDIT_API_URL = "https://www.reddit.com/search.json";

const fetchRedditData = async (keyword) => {
  const headers = {
    "User-Agent": "Mozilla/5.0",
    Accept: "application/json",
  };

  const params = new URLSearchParams({
    q: keyword,
    sort: "new",
    limit: "25",
    t: "week",
  });

  try {
    const response = await fetch(`${REDDIT_API_URL}?${params.toString()}`, {
      headers,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Reddit data: ${response.statusText}`);
    }

    try {
      console.log("inside");
      const res = await axios.post(
        "http://127.0.0.1:8000/subreddit-navigator-search",
        null,
        {
          params: { keyword },
        }
      );
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }

    const jsonData = await response.json();
    console.log("Fetched Reddit data:", jsonData);
    return jsonData;
  } catch (error) {
    console.error("Error fetching Reddit data:", error);
    return { error: `Failed to fetch Reddit data: ${error.message}` };
  }
};

const GraphComponent = () => {
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [redditData, setRedditData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!keyword.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const data = await fetchRedditData(keyword);
      if (data.error) {
        setError(data.error);
        setRedditData(null);
      } else if (data.data && Array.isArray(data.data.children)) {
        setRedditData(data);
      } else {
        setError("Invalid data structure received from Reddit");
        setRedditData(null);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const heroText = "Subreddit Navigator".split(" ");

  return (
    <div className="relative overflow-hidden">
      <section className="relative z-20 text-center py-12 px-4 sm:px-8 md:px-16 mb-10 mt-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary tracking-wide mt-8 md:mt-16 poppins-bold">
            {heroText.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: i * 0.24 }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </h2>

          <div className="mt-8 md:mt-10 max-w-4xl w-full flex items-center justify-center">
            <SearchBar
              keyword={keyword}
              setKeyword={setKeyword}
              onSearch={handleSearch}
              loading={loading}
            />
          </div>

          {error && <p className="text-red-500 mt-4">Error: {error}</p>}

          {redditData?.data?.children?.length ? (
            <div className="flex flex-col items-center w-full px-4">
              <RedditGraph data={redditData} />
              <Card keyword={keyword} data={redditData} />
            </div>
          ) : (
            !error && (
              <p className="text-secondary mt-4 text-error text-sm sm:text-base">
                No data to display. Enter a proper keyword to search.
              </p>
            )
          )}

          {redditData && (
            <div className="mt-10 py-8 px-4 flex flex-col items-center text-primary">
              <div className="text-center max-w-3xl px-4">
                <p className="text-base sm:text-lg md:text-xl font-medium">
                  Unlock <span className="text-hero">Actionable Insights</span>{" "}
                  with <span className="text-hero">One Click</span> . Sign up
                  for our exclusive BETA Program.
                </p>
                <div className="flex justify-center space-x-6 mt-10">
                  <FaReddit className="text-2xl sm:text-4xl text-orange-600" />
                  <FaXTwitter className="text-2xl sm:text-4xl text-white" />
                  <FaLinkedin className="text-2xl sm:text-4xl text-blue-600" />
                </div>
                <p className="text-base sm:text-lg md:text-xl font-medium mt-10">
                  Our AI-powered solution gathers and analyzes{" "}
                  <span className="text-hero">real-time</span> buzz from{" "}
                  <span className="font-bold underline">
                    TWITTER, REDDIT, and LINKEDIN
                  </span>{" "}
                  under 5 minutes, delivering comprehensive PDF reports.
                </p>
              </div>

              <div className="max-w-4xl text-center leading-relaxed space-y-4 px-4">
                <p className="text-base text-hero sm:text-lg md:text-3xl py-4 mt-4">
                  <strong>One Click</strong> Market Research and Prospecting
                  Tool
                </p>
                <h2 className="text-xl sm:text-2xl font-bold py-4">
                  What You'll Get Inside the Report
                </h2>
                <ul className="list-disc text-left mx-auto px-4">
                  <li>Sentiment analysis, highlights, and trends</li>
                  <li>Feedback and suggestions</li>
                  <li>Emerging patterns and influential conversations</li>
                  <li>List of prospects around your keyword</li>
                  <li>Actionable insights and competitive analysis</li>
                  <li>Audience demographics</li>
                  <li>Detailed suggestions powered by Prospectra</li>
                </ul>
              </div>

              <div className="mt-8">
                <a
                  className="btn-primary py-3 px-6 sm:px-10 rounded-full tracking-widest font-bold flex items-center gap-2"
                  href="https://forms.gle/bFCuahtkoZHeh9Wc7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Beta <IoIosArrowForward />
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default GraphComponent;
