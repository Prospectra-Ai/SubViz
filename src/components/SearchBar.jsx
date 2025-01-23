/* eslint-disable react/prop-types */
import {
  Settings,
  Download,
  Share2,
  Sparkles,
  ChevronDown,
  Search,
  Filter,
} from "lucide-react";

const SearchBar = ({ keyword, setKeyword, onSearch, loading }) => {
  return (
    <div className="w-full btn-secondary rounded-xl flex items-center justify-center gap-2 p-2">
      {/* Search Input */}
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Enter a Keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full h-9 pl-9 pr-4 
          btn-secondary border-none 
          text-sm text-primary 
          placeholder:!text-xs 
          placeholder:text-secondary 
          rounded-lg focus:outline-none"
        />
        <Search className="w-4 h-4 text-secondary absolute left-3 top-1/2 -translate-y-1/2" />
      </div>

      {/* Filter Button */}
      {/* <button className="h-9 px-3 rounded-lg flex items-center gap-2 text-sm">
        <Filter className="w-4 h-4 text-secondary" />
        <span className="text-secondary">Filters</span>
        <ChevronDown className="w-4 h-4 text-secondary" />
      </button> */}

      {/* Action Buttons */}
      {/* <div className="flex items-center gap-1">
        <button className="h-9 w-9 flex items-center justify-center rounded-lg">
          <Settings className="w-4 h-4 text-secondary" />
        </button>
        <button className="h-9 w-9 flex items-center justify-center rounded-lg">
          <Download className="w-4 h-4 text-secondary" />
        </button>
        <button className="h-9 w-9 flex items-center justify-center rounded-lg">
          <Share2 className="w-4 h-4 text-secondary" />
        </button>
      </div> */}

      {/* Primary Action */}
      <button
        onClick={onSearch}
        disabled={loading}
        className={`h-9 px-4 flex items-center gap-2 rounded-lg
          ${
            loading
              ? "bg-[#2b384d] border-none cursor-not-allowed"
              : "btn-primary btn-primary-hover"
          }
          transition-colors`}
      >
        <Sparkles className="w-4 h-4 text-primary" />
        <span className="text-sm text-primary font-bold">
          {loading ? "Generating..." : "Generate"}
        </span>
      </button>
    </div>
  );
};

export default SearchBar;
