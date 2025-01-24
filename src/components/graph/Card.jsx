/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosMore } from "react-icons/io";
import { FaAngleDoubleDown } from "react-icons/fa";
import HeroEffects from "../effects/HeroEffects";

const Card = ({ data, keyword }) => {
  // Extract and transform the data
  const graphData = data.data.children.map((child, index) => ({
    id: child.data.subreddit_name_prefixed,
    permalink: `https://www.reddit.com${child.data.permalink}`,
    user: child.data.author,
    text: child.data.selftext,
    score: child.data.score,
    index: index,
  }));

  const title = keyword;

  // Filter posts with score >= 20
  const engagingPosts = graphData.filter((post) => post.score >= 5);

  // Pagination state
  const [visiblePosts, setVisiblePosts] = useState(4);

  // Load more posts
  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 4);
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 bg-primary mt-10">
      <h1 className="text-hero font-semibold text-xl md:text-4xl py-2 mb-4 text-center">
        Top Engaging Posts
      </h1>
      <div className="cards-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {engagingPosts.length > 0 ? (
          engagingPosts
            .slice(0, visiblePosts)
            .map(({ id, permalink, user, text }, index) => (
              <div
                key={index}
                className="card bg-secondary text-primary border-primary border-b-2 p-4 rounded-md shadow-md"
              >
                <h3 className="text-sm font-bold truncate">{id}</h3>
                <p className="text-xs text-secondary">User: {user}</p>
                <p className="text-xs mt-2">
                  {text.length > 20 ? `${text.substring(0, 20)}...` : text}
                </p>
                <a
                  href={permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 mt-2 inline-block text-xs"
                >
                  View on Reddit
                </a>
              </div>
            ))
        ) : (
          <div className="text-error text-center col-span-full">
            None of the posts available right now are engaging, try a different
            keyword.
          </div>
        )}
      </div>
      {engagingPosts.length > visiblePosts && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMorePosts}
            className="flex items-center bg-primary text-primary tracking-widest px-4 py-2 rounded-md shadow hover:bg-primary-dark transition gap-2"
          >
            View More
            <FaAngleDoubleDown className="mr-2" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
