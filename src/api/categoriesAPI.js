import { useState, useEffect } from 'react';
import axios from 'axios';
import { CATEGORIES_URL } from './config';

const useCategoriesApi = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchCategories = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const {
        data: { categories },
      } = await axios.get(CATEGORIES_URL);

      setCategories(categories);
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

  return [categories, isLoading, isError];
};

export default useCategoriesApi;
