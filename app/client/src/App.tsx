import React from 'react';
import { ImageCard } from './components/ImageCard';
import { ImageSearch } from './components/ImageSearch';

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const App = () => {
  return (
    <>
      <ImageSearch />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {images.map(() => (
            <ImageCard />
          ))}
        </div>
      </div>
    </>
  );
};
