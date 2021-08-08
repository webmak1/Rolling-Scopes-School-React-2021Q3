// import { IFormData } from 'App';
import { AxiosResponse } from 'axios';
import { IArticle, IGET200_Articles } from 'interfaces';
import React, { ChangeEvent, useState } from 'react';
import axios from '../services/api';
import { Articles } from './Articles';

export const DashBoard: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [articles, setArticles] = useState<IArticle[]>([]);

  const [errors, setErrors] = useState(
    'Fields First Name, Last Name, Birth Date are required!'
  );

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setErrors('');
    try {
      const response: AxiosResponse<IGET200_Articles> = await axios.get(
        `?q=${searchValue}`
      );
      setArticles(response.data.articles);
      console.log('articles ', articles);
    } catch (err: any) {
      setErrors(err.message);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
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
                        Search
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        value={searchValue}
                        onChange={(event) => setSearchValue(event.target.value)}
                        autoComplete="given-name"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                {errors && (
                  <div className="px-4 py-3 text-center text-white bg-red-500 sm:px-6">
                    {errors}
                  </div>
                )}

                <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {isLoading ? 'Loading...' : 'Search'}
                  </button>
                </div>
              </div>
            </form>

            <Articles articles={articles} />
          </div>
        </div>
      </div>
    </>
  );
};
