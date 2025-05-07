import React from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
  // Prevent scrolling on the body when the modal is open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-1 sm:p-4"
      onClick={onClose} // For backdrop click
    >
      {/* This inner div now stops propagation. Clicks on image/button area won't close via backdrop. */}
      <div 
        className="relative bg-transparent p-0 m-0 flex items-center justify-center" // Simplified, ensure it doesn't expand unnecessarily
        style={{ maxWidth: '100%', maxHeight: '100%' }} // Ensure it doesn't overflow its parent for sizing
        onClick={(e: React.MouseEvent) => e.stopPropagation()} 
      >
        <button 
          onClick={onClose} // This click is direct and will work; stopPropagation on parent div handles backdrop interaction
          className="absolute top-2 right-2 md:top-4 md:right-4 text-white bg-black bg-opacity-50 rounded-full p-2 text-2xl leading-none hover:bg-opacity-75 z-20"
          aria-label="Close image modal"
        >
          &times;
        </button>
        
        <TransformWrapper
          initialScale={1}
          minScale={0.5} // Minimum zoom out
          maxScale={8}   // Maximum zoom in
          limitToBounds={true} // Prevents panning outside the image bounds too much
          doubleClick={{ disabled: false, step: 1.5 }} // Enable double tap/click to zoom
          wheel={{ step: 0.2 }} // Adjust wheel zoom sensitivity
          pinch={{ step: 0.5 }} // Adjust pinch zoom sensitivity if needed
        >
          {({ zoomIn, zoomOut, resetTransform, centerView, ...rest }) => (
            <React.Fragment>
              {/* Optional: Custom zoom controls if needed */}
              {/* 
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                <button onClick={() => zoomIn(0.5)} className="bg-black bg-opacity-50 text-white p-2 rounded">Zoom In</button>
                <button onClick={() => zoomOut(0.5)} className="bg-black bg-opacity-50 text-white p-2 rounded">Zoom Out</button>
                <button onClick={() => resetTransform()} className="bg-black bg-opacity-50 text-white p-2 rounded">Reset</button>
                <button onClick={() => centerView()} className="bg-black bg-opacity-50 text-white p-2 rounded">Center</button>
              </div>
              */}
              <TransformComponent
                wrapperStyle={{ width: '100%', height: '100%' }} // Wrapper takes full modal space
                contentStyle={{ width: 'auto', height: 'auto' }} // Content (image) sizes itself
              >
                <img 
                  src={src} 
                  alt={alt} 
                  className="block object-contain select-none"
                  style={{ maxWidth: '95vw', maxHeight: '95vh' }} // Image fits initially within viewport bounds
                  // The library handles touch events on the TransformComponent
                />
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>
      </div>
    </div>
  );
}; 