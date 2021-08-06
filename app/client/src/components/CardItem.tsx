import { IFormData } from 'App';
import React from 'react';

interface IItemProps {
  item: IFormData;
  key: number;
}

export const CardItem: React.FC<IItemProps> = ({ item, key }) => {
  const checkedLanguages = item.checkedLanguages;
  const checkedRadio = item.checkedRadio;

  return (
    <>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 ml-20 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      readOnly
                      type="text"
                      name="first-name"
                      id="first-name"
                      value={item.firstName}
                      autoComplete="given-name"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <input
                      readOnly
                      type="text"
                      name="last-name"
                      id="last-name"
                      value={item.lastName}
                      autoComplete="family-name"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Birth Date
                    </label>
                    <input
                      readOnly
                      type="date"
                      name="last-name"
                      id="last-name"
                      value={item.birthDate}
                      autoComplete="family-name"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country / Region
                    </label>
                    <input
                      readOnly
                      type="text"
                      name="country"
                      id="country"
                      value={item.country}
                      autoComplete="family-name"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <legend className="text-base font-medium text-gray-900">
                      Languages:
                      <ul>
                        {checkedLanguages?.react && <li>* React</li>}
                        {checkedLanguages?.angular && <li>* Angular</li>}
                        {checkedLanguages?.vue && <li>* Vue</li>}
                      </ul>
                    </legend>
                  </div>

                  <div className="col-span-6">
                    <legend className="text-base font-medium text-gray-900">
                      Availability to Relocate: {checkedRadio}
                    </legend>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  );
};
