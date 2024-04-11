import Select from "./Select";

import useUrl from "./useUrl";

const SortBy = ({ options }) => {
  const { searchParams, handleSearchParams } = useUrl("sortBy");

  const currentSelectedValue = searchParams.get("sortBy") || "";

  return (
    <Select
      value={currentSelectedValue}
      onChange={handleSearchParams}
      options={options}
      type="white"
    />
  );
};

export default SortBy;
