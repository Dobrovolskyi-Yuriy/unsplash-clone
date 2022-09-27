import { FC } from "react";
import { FallingLines } from "react-loader-spinner";
import { useTheme } from "@mui/material";

const Loader: FC = () => {
  const theme = useTheme();

  return (
    <FallingLines
      color={theme.palette.primary.main}
      width="100"
      visible={true}
    />
  );
};

export default Loader;
