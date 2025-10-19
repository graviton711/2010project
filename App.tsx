import React, { useState, useRef, useCallback } from 'react';
import Envelope from './components/Envelope';
import Letter from './components/Letter';
import FlyingHearts from './components/FlyingHearts';
import BackgroundMusic from './components/BackgroundMusic';

const App: React.FC = () => {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpenLetter = useCallback(() => {
    setIsFadingOut(true);
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Audio playback failed:", error);
      });
    }
    // Đợi animation của phong bì hoàn tất rồi mới hiển thị thư
    setTimeout(() => {
        setIsLetterOpen(true);
    }, 600); // Thời gian này nên khớp với duration của transition trong Envelope.tsx
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-red-100 via-pink-100 to-rose-100 p-4">
      <BackgroundMusic ref={audioRef} src="https://levi-kalin.com/wp-content/uploads/2023/11/Co-Con-Day-Ma-Rhymastic.mp3" />
      
      {isLetterOpen && <FlyingHearts />}
      
      <div className="z-10 flex flex-col items-center">
        {!isLetterOpen ? (
          <Envelope onOpen={handleOpenLetter} isFadingOut={isFadingOut} />
        ) : (
          <Letter />
        )}
      </div>
    </div>
  );
};

export default App;