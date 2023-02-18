import React, { useEffect, useMemo, useRef } from 'react';

interface IVPSimpleHtml5Props {
  videoId: number;
}

export const VPSimpleHtml5: React.FC<IVPSimpleHtml5Props> = props => {
    const playerRef = useRef<HTMLVideoElement>(null);
    const { videoId } = props;

    const playbackRate = useMemo(() => {
      if (!playerRef.current) {
        console.log(`playbackRef not defined`)
        return;
      }
      console.log(`playbackRate: ${playerRef.current.playbackRate}`);
      return playerRef.current.playbackRate;
    }, [playerRef]);

    const handlePlayPause = () => {
        const player = playerRef.current;
        if (!player) return;
        if (player.paused)
            player.play();
        else
            player.pause();
    }

    const handleSpeedUp = () => React.useCallback(() => { 
      if (playerRef.current) {
        console.log(`changing rate to ${playerRef.current.playbackRate + 0.1}`)
        playerRef.current.playbackRate += 0.1;
      }
    }, [playerRef]);

    const handleSlowDown = () => React.useCallback(() => { 
      if (playerRef.current) {
        console.log(`changing rate to ${playerRef.current.playbackRate - 0.1}`)
        playerRef.current.playbackRate -= 0.1;
      }
    }, [playerRef]);

    useEffect(() => {
      console.log(`useEffect: ${playerRef.current?.playbackRate}`);
    }, [playerRef]);
    
  return (
    <div className='mt-2'>
    <div className='mb-2'>
      <button type="button" className='me-1' onClick={handlePlayPause}>Play/Pause</button>
      <button type="button" className='me-1' onClick={handleSpeedUp}>Zrychlit</button>
      <button type="button" onClick={handleSlowDown}>Zpomalit</button>
    </div> 
    <video ref={playerRef} height={200} controls>
      <source src={`http://localhost:5107/api/Video/${videoId}`} type="video/mp4"/>
      Your browser does not support HTML video.
    </video>
    <div className='vide-info'>
      <p>Rychlost přehrávání: {playbackRate?.toFixed(1) ?? 1}</p>
    </div>
    </div>
  );
};
