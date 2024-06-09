import { useEffect, useState } from 'react';

/**
 * Provides helpers for data fetching to keep track of loading and error states
 * @param queryFn - funtion to fetch data
 */
export const useDataFetcher = <T>(queryFn: () => Promise<T>) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState<T>();

  const fetchData = async () => {
    setHasError(false);
    setIsLoading(true);
    try {
      const result = await queryFn();
      setData(result);
    } catch (e) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, hasError, refetch: fetchData };
};
