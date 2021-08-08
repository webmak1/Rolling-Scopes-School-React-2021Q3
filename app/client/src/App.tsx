import React from 'react';
import { DashBoard } from './components/DashBoard';

// export interface IFormData {
//   firstName?: string;
//   lastName?: string;
//   birthDate?: string;
//   country?: string;
//   checkedLanguages?: Record<string, boolean>;
//   checkedRadio?: string;
// }

export const App: React.FC = () => {
  // const [formData, setFormData] = useState<IFormData[]>([]);
  // <Form setFormData={setFormData} />
  return (
    <>
      <DashBoard />
      {/* <main>
        {formData.map((item, idx) => {
          return <CardItem item={item} key={idx} />;
        })}
      </main> */}
    </>
  );
};
