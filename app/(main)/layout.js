// import React from "react";

// const MainLayout = ({ children }) => {
//   return <div className="container mx-auto my-32">{children}</div>;
// };

// export default MainLayout;

'use client'
import React, { useState, useEffect } from "react";

const MainLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto my-32">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default MainLayout;
