import { IFormData } from 'App';
import React from 'react';

interface IItemProps {
  item: IFormData;
  key: number;
}

export const CardItem: React.FC<IItemProps> = ({ item, key }) => {
  const checkedLanguages = item.checkedLanguages;

  return (
    <div>
      <h1>First Name: {item.firstName}</h1>
      <h1>Last Name: {item.lastName}</h1>
      <h1>Birth Name: {item.birthDate}</h1>
      <h1>Country: {item.country}</h1>

      {checkedLanguages && <h1>Languages:</h1>}

      {checkedLanguages?.react && <h1>React</h1>}
      {checkedLanguages?.angular && <h1>Angular</h1>}
      {checkedLanguages?.vue && <h1>Vue</h1>}
    </div>
  );
};
