import { IFormData } from 'App';
import React, { SetStateAction, useState } from 'react';

interface IFormProps {
  setFormData: React.Dispatch<SetStateAction<IFormData[]>>;
}

export const Form: React.FC<IFormProps> = ({ setFormData }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const [errors, setErrors] = useState({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setFormData((state) => [...state, { lastName, firstName }]);

    // setFormValues(() => [{ firstName, lastName }]);
    // setFormData((state) => [...state, { firstName, lastName }]);
    // if (Object.keys(errors).length === 0) {
    //   setFormValues((state) => [...state, { firstName, lastName }]);
    //   reset();
    // }
  };

  const reset = () => {
    setFirstName('');
  };

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
            <form onSubmit={handleSubmit}>
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
                        type="text"
                        name="first-name"
                        id="first-name"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
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
                        type="text"
                        name="last-name"
                        id="last-name"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
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
                        type="date"
                        name="last-name"
                        id="last-name"
                        value={birthDate}
                        onChange={(event) => setLastName(event.target.value)}
                        autoComplete="family-name"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country / Region
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country"
                        className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Russia</option>
                        <option>Ukraine</option>
                        <option>Belarus</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <legend className="text-base font-medium text-gray-900">
                        Languages
                      </legend>
                      <p className="text-sm text-gray-500">
                        You can select multiple choices
                      </p>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="comments"
                              name="comments"
                              type="checkbox"
                              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="comments"
                              className="font-medium text-gray-700"
                            >
                              React
                            </label>
                            <p className="text-gray-500">
                              Get notified when someones posts a comment on a
                              posting.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="candidates"
                              name="candidates"
                              type="checkbox"
                              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="candidates"
                              className="font-medium text-gray-700"
                            >
                              Angular
                            </label>
                            <p className="text-gray-500">
                              Get notified when a candidate applies for a job.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="offers"
                              name="offers"
                              type="checkbox"
                              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Vue
                            </label>
                            <p className="text-gray-500">
                              Get notified when a candidate accepts or rejects
                              an offer.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-6">
                      <div>
                        <legend className="text-base font-medium text-gray-900">
                          Availability to Relocate
                        </legend>
                        <p className="text-sm text-gray-500">
                          Pease select one.
                        </p>
                      </div>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="push-everything"
                            name="push-notifications"
                            type="radio"
                            className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="push-everything"
                            className="block ml-3 text-sm font-medium text-gray-700"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push-email"
                            name="push-notifications"
                            type="radio"
                            className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="push-email"
                            className="block ml-3 text-sm font-medium text-gray-700"
                          >
                            No
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push-nothing"
                            name="push-notifications"
                            type="radio"
                            className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="push-nothing"
                            className="block ml-3 text-sm font-medium text-gray-700"
                          >
                            May be later
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
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
