import { useState, useEffect } from 'react';

export const useInfiniteScroll = threshold => {
  const [bottomIsReached, setBottomIsReached] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setBottomIsReached(
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - threshold,
      );

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return [bottomIsReached];
};
