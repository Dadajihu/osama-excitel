import React, { useState } from 'react';
import { SlideId } from '../types';
import StartSlide from './slides/StartSlide';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import EndSlide from './slides/EndSlide';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SlideDeck: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<SlideId>(SlideId.SLIDE_START);

  const nextSlide = () => {
    if (currentSlide < SlideId.SLIDE_END) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > SlideId.SLIDE_START) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const renderSlide = () => {
    switch (currentSlide) {
      case SlideId.SLIDE_START:
        return <StartSlide />;
      case SlideId.SLIDE_1:
        return <Slide1 />;
      case SlideId.SLIDE_2:
        return <Slide2 />;
      case SlideId.SLIDE_3:
        return <Slide3 />;
      case SlideId.SLIDE_END:
        return <EndSlide />;
      default:
        return <StartSlide />;
    }
  };

  // Helper to check if we are on the first or last slide for button disabling
  const isFirst = currentSlide === SlideId.SLIDE_START;
  const isLast = currentSlide === SlideId.SLIDE_END;

  // List of all slides for the indicator
  const allSlides = [
    SlideId.SLIDE_START,
    SlideId.SLIDE_1,
    SlideId.SLIDE_2,
    SlideId.SLIDE_3,
    SlideId.SLIDE_END
  ];

  return (
    <div className="h-screen w-screen flex flex-col bg-white overflow-hidden font-sans">
      {/* Main Slide Content */}
      <main className="flex-grow w-full h-full relative overflow-hidden">
        {renderSlide()}
      </main>

      {/* Minimal Footer */}
      <footer className="h-14 flex-shrink-0 flex items-center justify-between px-6 md:px-10 bg-white border-t border-gray-100 z-10">
        <div className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">
            OSAMA CONSULTANTS
        </div>
        
        <div className="flex items-center space-x-6">
          <button
            onClick={prevSlide}
            disabled={isFirst}
            className={`transition-opacity ${
              isFirst
                ? 'opacity-0 cursor-default'
                : 'opacity-50 hover:opacity-100 text-black'
            }`}
          >
            <ChevronLeft size={24} strokeWidth={2} />
          </button>

          <div className="flex space-x-2">
            {allSlides.map((id) => (
                <div
                key={id}
                className={`h-1 transition-all duration-500 rounded-full ${
                    currentSlide === id ? 'bg-black w-6' : 'bg-gray-200 w-2'
                }`}
                />
            ))}
            </div>

          <button
            onClick={nextSlide}
            disabled={isLast}
            className={`transition-opacity ${
              isLast
                ? 'opacity-0 cursor-default'
                : 'opacity-50 hover:opacity-100 text-black'
            }`}
          >
            <ChevronRight size={24} strokeWidth={2} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default SlideDeck;