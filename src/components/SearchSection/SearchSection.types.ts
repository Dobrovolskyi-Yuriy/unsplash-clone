import { SyntheticEvent } from "react";
import { SearchInputProps } from "components";

export type SearchSectionProps = Pick<
  SearchInputProps,
  "label" | "autocompleteItems"
> & {
  defaultValue: string;
  btnTitle: string;
  onSearch: (searchValue: string) => (e: SyntheticEvent) => void;
};
