import { FC } from "react";
import { Autocomplete, TextField } from "@mui/material";

import { SearchInputProps } from "components";

const SearchInput: FC<SearchInputProps> = ({
  label,
  autocompleteItems = [],
  ...props
}) => (
  <Autocomplete
    freeSolo
    disableClearable
    options={autocompleteItems}
    renderInput={(params) => (
      <TextField
        {...params}
        label={label}
        InputProps={{
          ...params.InputProps,
          type: "search",
        }}
      />
    )}
    {...props}
  />
);

export default SearchInput;
