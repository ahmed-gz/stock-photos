import { useState, useEffect } from 'react';
import { CATEGORIES_URL } from './config';

const useCategoriesApi = () => {
  const [categories, setCategories] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchCategories = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await fetch(CATEGORIES_URL);
      const json = await response.json();

      setCategories(json.categories);
    } catch (e) {
      console.log('Error: ', e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return [categories, isloading, isError];
};

export default useCategoriesApi;
