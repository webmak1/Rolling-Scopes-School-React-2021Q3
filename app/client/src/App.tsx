import React, { useState } from 'react';
import { CardItem } from './components/CardItem';
import { Form } from './components/Form';

export interface IFormData {
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  country?: string;
  checkedLanguages?: {};
  checkedRadio?: string;
}

export const App: React.FC = () => {
  const [formData, setFormData] = useState<IFormData[]>([]);
  return (
    <>
      <Form setFormData={setFormData} />
      <main>
        {formData.map((item, idx) => {
          return <CardItem item={item} key={idx} />;
        })}
      </main>
    </>
  );
};
