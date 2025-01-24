import React, { useState, useEffect } from "react";

function UniqueVisitors() {
  const [uniqueVisitors, setUniqueVisitors] = useState(0);

  useEffect(() => {
    // Use a library like 'localforage' to store visitor data in the browser
    const getVisitorCount = async () => {
      const storedCount = await localStorage.getItem("uniqueVisitors");
      if (storedCount) {
        setUniqueVisitors(storedCount);
      } else {
        // Increment the visitor count
        const newCount = storedCount ? storedCount + 1 : 1;
        await localStorage.setItem("uniqueVisitors", newCount);
        setUniqueVisitors(newCount);
      }
    };

    getVisitorCount();
  }, []);

  return (
    <div className="bg-primary py-4 text-secondary text-xs text-center">
      Total Page Visitors: {uniqueVisitors}
    </div>
  );
}

export default UniqueVisitors;
