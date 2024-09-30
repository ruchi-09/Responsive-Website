import React, { useRef, useEffect } from 'react';
import './VideoPlayer.css';
import video from '../../assets/college-video.mp4';

const VideoPlayer = ({ playState, setPlayState }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close video player if clicked outside
      if (playerRef.current && !playerRef.current.contains(event.target)) {
        setPlayState(false);  // This should trigger a re-render
      }
    };

    if (playState) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [playState, setPlayState]);

  return (
    <>
      {playState && (
        <div className="video-player-overlay"> {/* Optional: Dark overlay */}
          <div className="video-player" ref={playerRef}>
            <video src={video} autoPlay muted controls />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
