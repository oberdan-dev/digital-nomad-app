import { PropsWithChildren } from "react";
import { Box, BoxProps } from "./Box";

export function Screen({
  children,
  ...boxProps
}: {
  children: PropsWithChildren & BoxProps & React.ReactNode;
}) {
  return (
    <Box
      flex={1}
      backgroundColor="background"
      paddingHorizontal="padding"
      {...boxProps}
    >
      {children}
    </Box>
  );
}
