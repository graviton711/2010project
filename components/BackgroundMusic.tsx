
import React, { forwardRef } from 'react';

interface BackgroundMusicProps {
  src: string;
}

const BackgroundMusic = forwardRef<HTMLAudioElement, BackgroundMusicProps>(({ src }, ref) => {
  return (
    <audio ref={ref} loop>
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
});

BackgroundMusic.displayName = 'BackgroundMusic';

export default BackgroundMusic;
