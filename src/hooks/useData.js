import { useEffect, useState } from 'react';

function useData (getData, results, page = 1) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const loadData = () => {
    setIsFetching(true);

    getData({ page, results })
      .then(data => setData(data.results))
      .catch(e => setError(e))
      .finally(() => setIsFetching(false));
  };
  useEffect(() => {
    loadData();
  }, [page, results]);
  return { data, isFetching, error };
}
export default useData;
