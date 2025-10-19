import React from 'react';

interface EnvelopeProps {
  onOpen: () => void;
  isFadingOut: boolean;
}

const Envelope: React.FC<EnvelopeProps> = ({ onOpen, isFadingOut }) => {
  return (
    <div className={`text-center flex flex-col items-center justify-center h-full text-rose-800 transition-all duration-500 ease-in-out ${isFadingOut ? 'opacity-0 transform scale-90 -translate-y-10' : 'opacity-100'}`}>
        <h1 className="font-dancing-script text-5xl md:text-7xl mb-4 text-rose-500 animate-pulse">Mẹ ơi, có thư cho mẹ này!</h1>
        <p className="text-lg md:text-xl mb-8">Một món quà nhỏ từ đứa con yêu của mẹ.</p>
        <button onClick={onOpen} className="transition-transform duration-300 hover:scale-110 disabled:opacity-50" disabled={isFadingOut}>
            <svg className="w-40 h-40 md:w-56 md:h-56 text-rose-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
             <span className="mt-4 block text-xl font-semibold text-rose-600 animate-bounce">Nhấn vào để mở</span>
        </button>
    </div>
  );
};

export default Envelope;