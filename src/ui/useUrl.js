import { useSearchParams } from "react-router-dom";

const useUrl = (value) => {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleSearchParams(e) {
    searchParams.set(value, e.target.value);
    setSearchParams(searchParams);
  }
  return { searchParams, handleSearchParams };
};

export default useUrl;
