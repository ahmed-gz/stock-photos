import { useState, useEffect } from 'react';
import axios from 'axios';
import { PHOTOS_URL } from './config';

const usePhotosApi = (
  category,
  currentPage = 1,
  sorting = 'trending',
  sortingBy = 'asc',
) => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [nextPage, setNextPage] = useState(currentPage + 1);

  useEffect(() => {
    const fetchPhotos = async page => {
      setIsLoading(true);
      setIsError(false);

      try {
        const {
          data: { results, nextPage },
        } = await axios.get(
          `${PHOTOS_URL}/${category}/${sorting}/${sortingBy}/${page}`,
        );

        page === 1
          ? setPhotos([...results])
          : setPhotos(photos => [...photos, ...results]);

        setNextPage(nextPage);
      } catch (e) {
        console.log('Error: ', e);
        setIsError(true);
      } finally {
        setIsLoading(false);
        window.dispatchEvent(new CustomEvent('scroll'));
      }
    };

    fetchPhotos(currentPage);
  }, [category, sorting, sortingBy, currentPage]);

  return [photos, isLoading, isError, nextPage];
};

export default usePhotosApi;
