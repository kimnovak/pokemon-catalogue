import { useNavigate, useSearch } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

type UseSearchQueryProps<T> = {
  dataSet: T[];
  criteria: string;
};

/**
 * Filters a dataset based on a search query and specified criteria.
 * Updates the URL search query to reflect the current filter state.
 * @param options - The options object.
 * @param options.dataset - The dataset to search through.
 * @param options.criteria - The property of the dataset to filter by.
 * @returns Object containing the filtered results, search query and a function to update the search query.
 */
export const useSearchQuery = <T extends Record<string, any>>({
  dataSet,
  criteria,
}: UseSearchQueryProps<T>) => {
  const search: Record<string, string> = useSearch({
    from: '/',
  });
  const searchQuery = search[criteria] || '';
  const navigate = useNavigate();
  const [results, setResults] = useState<T[]>(dataSet);

  useEffect(() => {
    const filteredItems = dataSet.filter(item =>
      item[criteria].toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filteredItems);
  }, [search, dataSet]);

  const updateURLSearchParams = (newQuery: string = '') => {
    navigate({
      search: (prev: T) => ({
        ...prev,
        [criteria]: newQuery,
      }),
      replace: !!searchQuery,
    });
  };

  const updateQuery = (newQuery: string = '') => {
    updateURLSearchParams(newQuery);
  };

  return { results, searchQuery, updateQuery };
};
