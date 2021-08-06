import { IFormData } from 'App';
import React from 'react';

interface IItemProps {
  item: IFormData;
  key: number;
}

export const CardItem: React.FC<IItemProps> = ({ item, key }) => {
  return (
    <div>
      <h1>{item.firstName}</h1>
    </div>
  );
};
