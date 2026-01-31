import { useAppTheme } from "@/src/theme/useAppTheme";
import { City } from "@/src/types";
import { useWindowDimensions } from "react-native";
import MapView from "react-native-maps";
import { BottomSheet, BottomSheetProps } from "../BottomSheet";
import { Box } from "../Box";
import { IconButton } from "../IconButton";

type BottomSheetMapProps = Omit<BottomSheetProps, "children"> & {
  location: City["location"];
};

export function BottomSheetMap({
  location,
  ...bottomSheetProps
}: BottomSheetMapProps) {
  const { height } = useWindowDimensions();
  const { borderRadii, spacing } = useAppTheme();

  return (
    <BottomSheet {...bottomSheetProps}>
      <MapView
        style={{
          width: "100%",
          height: height * 0.7,
          borderRadius: borderRadii.default,
        }}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Box position="absolute" top={spacing.padding} right={spacing.padding}>
        <IconButton iconName="Close" onPress={bottomSheetProps.onPress} />
      </Box>
    </BottomSheet>
  );
}
