import React from 'react';

export const ImageCard: React.FC = () => {
  return (
    <div className="max-w-sm mt-10 overflow-hidden rounded shadow-lg">
      <img className="w-full" src="https://source.unsplash.com/random" alt="" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold text-purple-500">
          Photo by John Doe
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            4000
          </li>
          <li>
            <strong>Downloads: </strong>
            1000
          </li>
          <li>
            <strong>Likes: </strong>
            400
          </li>
        </ul>
        <div className="px-6 py-4">
          <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            #tag1
          </span>
          <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            #tag2
          </span>
          <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            #tag3
          </span>
        </div>
      </div>
    </div>
  );
};
