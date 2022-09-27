import { AutocompleteProps } from "@mui/material";

export type SearchInputProps = Omit<
  AutocompleteProps<string, false, true, true, "div">,
  "freeSolo" | "disableClearable" | "options" | "renderInput"
> & {
  label: string;
  autocompleteItems?: string[];
};
