import { useAppTheme } from "@/src/theme/useAppTheme";
import { City } from "@/src/types";
import MapView from "react-native-maps";
import { Box } from "../Box";
import { Text } from "../Text";

type CityDetailsMapProps = Pick<City, "location">;

export function CityDetailsMap({ location }: CityDetailsMapProps) {
  const { borderRadii } = useAppTheme();
  return (
    <Box padding="padding">
      <Text variant="title22" mb="s16">
        Mapa
      </Text>
      <Box
        style={{
          overflow: "hidden",
          borderRadius: borderRadii.default,
          height: 200,
        }}
      >
        <MapView
          style={{ width: "100%", height: "100%" }}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </Box>
    </Box>
  );
}
