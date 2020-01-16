import { useState, useEffect } from 'react';
import { PHOTOS_URL } from './config';

const usePhotosApi = (
  category,
  page = 1,
  sorting = 'trending',
  sortingBy = 'asc',
) => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [nextPage, setNextPage] = useState(page + 1);

  useEffect(() => {
    const fetchPhotos = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch(
          `${PHOTOS_URL}/${category}/${sorting}/${sortingBy}/${page}`,
        );
        const json = await response.json();

        setNextPage(json.nextPage);
        page === 1
          ? setPhotos([...json.results])
          : setPhotos([...photos, ...json.results]);
      } catch (e) {
        console.log('Error: ', e);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, [category, sorting, sortingBy, page]);

  return [photos, isLoading, isError, nextPage];
};

export default usePhotosApi;
