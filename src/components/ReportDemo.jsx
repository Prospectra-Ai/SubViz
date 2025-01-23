import demo1 from "../assets/demo1.png";
import demo2 from "../assets/demo2.png";
import { Link } from "react-router-dom"; // Correct import for Link
import demo3 from "../assets/demo3.png";
import { IoIosArrowForward } from "react-icons/io";

const ReportDemo = () => {
  return (
    <div className="flex flex-col items-center py-30 m-4">
      <div className="ml-8 md:text-center text-primary text-xl md:text-4xl w-full max-w-6xl py-10">
        Checkout <span className="text-hero">Prospectra AI</span> : Discover the
        Power of <span className="text-hero">Real-Time Insights</span> -
        Experience Social Intelligence Like Never Before!
      </div>

      <div className="flex justify-center items-center py-20">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-3 lg:gap-20">
          {/* Card 1 */}
          <div
            className="relative w-60 md:w-80 md:h-60 transform rotate-[-10deg] scale-125 bg-gray-200 shadow-2xl rounded-lg overflow-hidden border border-[#6C28D8]"
            style={{ transformOrigin: "center center" }}
          >
            <img
              src={demo1}
              alt="Demo PDF 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card 2 */}
          <div
            className="relative ml-2 w-60 md:w-80 h-60 transform rotate-[0deg] scale-125 bg-gray-200 shadow-2xl rounded-lg overflow-hidden border border-[#6C28D8]"
            style={{ transformOrigin: "center center" }}
          >
            <img
              src={demo2}
              alt="Demo PDF 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card 3 */}
          <div
            className="relative ml-2 w-64 md:w-80 md:h-60 transform rotate-[10deg] scale-125 bg-gray-200 shadow-2xl rounded-lg overflow-hidden border border-[#6C28D8]"
            style={{ transformOrigin: "center center" }}
          >
            <img
              src={demo3}
              alt="Demo PDF 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="py-14">
        <a
          href="https://prospectraai.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="btn-primary px-4 py-2 rounded-2xl btn-primary-hover flex flex-row items-center justify-center gap-2 text-primary font-bold">
            <div className="mb-1">Checkout Prospectra</div>
            <IoIosArrowForward className="w-4 h-4 text-primary" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ReportDemo;
