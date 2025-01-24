import { motion } from "framer-motion";
import demo1 from "../assets/demo1.png";
import demo2 from "../assets/demo2.png";
import demo3 from "../assets/demo3.png";
import { IoIosArrowForward } from "react-icons/io";

const ReportDemo = () => {
  return (
    <div className="flex flex-col items-center py-14 m-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="ml-8 md:text-center text-primary text-xl md:text-4xl w-full max-w-6xl py-10"
      >
        Discover the Power of{" "}
        <span className="text-hero">Real-Time Insights</span> - Experience
        Social Intelligence Like Never Before! 🚀
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center items-center py-20"
      >
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-3 lg:gap-20">
          {/* Card 1 */}
          <div
            className="relative w-60 h-44 md:w-80 md:h-60 transform rotate-[-10deg] scale-125 bg-gray-200 shadow-2xl rounded-lg overflow-hidden border border-[#6C28D8]"
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
            className="relative ml-2 w-60 md:w-80 md:h-auto transform rotate-[0deg] scale-125 bg-gray-200 shadow-2xl rounded-lg overflow-hidden border border-[#6C28D8]"
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
            className="relative ml-2 w-60 md:w-80 md:h-52 transform rotate-[10deg] scale-125 bg-gray-200 shadow-2xl rounded-lg overflow-hidden border border-[#6C28D8]"
            style={{ transformOrigin: "center center" }}
          >
            <img
              src={demo3}
              alt="Demo PDF 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="bg-primary md:items-center flex flex-col border-gray-300 p-4 rounded-md shadow-sm mt-4"
      >
        <h3 className="text-xl md:text-4xl font-semibold text-primary">
          <span className="text-hero">Additional Insights</span> Included:
        </h3>
        <ul className="list-disc text-left list-inside text-primary py-4 mt-2 text-xl md:text-2xl">
          <li>Influential Conversations</li>
          <li>Audience Demographics</li>
          <li>Actionable Insights</li>
          <li>Major Highlights and Trends</li>
          <li>Emerging Patterns</li>
          <li>Feedback and Suggestions</li>
        </ul>
      </motion.div> */}
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
