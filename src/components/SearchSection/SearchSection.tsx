import { FC, SyntheticEvent, useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { Search } from "@mui/icons-material";

import { SearchInput, SearchSectionProps } from "components";

import { useStyles } from "components/SearchSection/SearchSection.styles";

const SearchSection: FC<SearchSectionProps> = ({
  defaultValue,
  label,
  btnTitle,
  autocompleteItems = [],
  onSearch,
}) => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => setSearchValue(defaultValue), [defaultValue]);

  const handleChangeSearchValue = (e: SyntheticEvent, value: string) => {
    setSearchValue(value);
  };

  const { container, searchInput } = useStyles();

  return (
    <Box className={container}>
      <SearchInput
        value={searchValue}
        label={label}
        autocompleteItems={autocompleteItems}
        className={searchInput}
        onInputChange={handleChangeSearchValue}
      />
      <Button
        variant="contained"
        startIcon={<Search />}
        onClick={onSearch(searchValue)}
      >
        {btnTitle}
      </Button>
    </Box>
  );
};

export default SearchSection;
