import React, { useState } from "react";
import SearchBar from "../SearchBar";
import RedditGraph from "./RedditGraph";
import ReportDemo from "../ReportDemo";

import { motion } from "framer-motion";
import { FaLinkedin, FaReddit, FaXTwitter } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import Card from "./Card";

const SERVER = `https://subviz-backend.onrender.com/`;
const fetchRedditData = async (keyword) => {
  try {
    const response = await fetch(
      `${SERVER}api/search?q=${encodeURIComponent(keyword)}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch Reddit data: ${response.statusText}`);
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
  const heroText = "SubViz - SubReddit Navigator".split(" ");

  return (
    <div className="relative overflow-hidden bg-primary">
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
                Enter a proper keyword to search.
              </p>
            )
          )}

          {redditData?.data?.children?.length ? <ReportDemo /> : <></>}
        </div>
      </section>
    </div>
  );
};

export default GraphComponent;
