import React, { useState, useEffect } from "react";

function UniqueVisitors() {
  const [uniqueVisitors, setUniqueVisitors] = useState(0);

  // Load visitor count from localStorage and update state
  useEffect(() => {
    const storedVisits = Number(localStorage.getItem("uniqueVisitors")) || 0;
    setUniqueVisitors(storedVisits + 1);
  }, []);

  // Save updated visitor count to localStorage
  useEffect(() => {
    if (uniqueVisitors > 0) {
      localStorage.setItem("uniqueVisitors", uniqueVisitors);
    }
  }, [uniqueVisitors]);

  return (
    <div className="bg-primary py-4 text-secondary font-light text-xs text-center">
      Total Page Visitors: {uniqueVisitors}
      <div>
        ok{" "}
        <a href="https://www.hitwebcounter.com" target="_blank">
          <img
            src="https://hitwebcounter.com/counter/counter.php?page=18631951&style=0001&nbdigits=5&type=ip&initCount=0"
            title="Counter Widget"
            alt="Visit counter For Websites"
            border="0"
          />
        </a>
      </div>
    </div>
  );
}

export default UniqueVisitors;
