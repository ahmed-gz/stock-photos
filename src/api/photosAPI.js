import { useState, useEffect } from 'react';
import { PHOTOS_URL } from './config';

const usePhotosApi = (
  category,
  sorting = 'trending',
  sortingBy = 'asc',
  page = 1,
) => {
  const [photos, setPhotos] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await fetch(
          `${PHOTOS_URL}/${category}/${sorting}/${sortingBy}/${page}`,
        );
        const json = await response.json();

        setPhotos(json.results);
      } catch (e) {
        console.log('Error: ', e);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, [category, sorting, sortingBy, page]);

  return [photos, isloading, isError];
};

export default usePhotosApi;
