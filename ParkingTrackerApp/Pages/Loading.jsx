import React, { useState, useEffect } from 'react';
import ProgressBar from './AppBar'; // Ensure this path is correct
import MainPage from './MainPage'; // Ensure this path is correct

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Set the loading screen duration to 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <ProgressBar /> : <MainPage />;
};

export default LoadingScreen;
