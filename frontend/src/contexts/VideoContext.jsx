// VideoContext.js
import React, { createContext, useContext, useState } from 'react';

const VideoContext = createContext();

export const useVideoContext = () => {
  return useContext(VideoContext);
};

export const VideoProvider = ({ children }) => {
  const [videoData, setVideoData] = useState([]);
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <VideoContext.Provider value={{ videoData, setVideoData, videoEnded, handleVideoEnd }}>
      {children}
    </VideoContext.Provider>
  );
};
