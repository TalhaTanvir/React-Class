import React, { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";

function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      {loading ? (
        <HashLoader color="#57a3d3" size={200} />
      ) : (
        <h1 className="text-3xl font-bold text-red-700">
          Welcome to Home Screen
        </h1>
      )}
    </div>
  );
}

export default LoadingScreen;
