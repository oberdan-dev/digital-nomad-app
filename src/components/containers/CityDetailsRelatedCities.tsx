import { useRelatedCities } from "@/src/data/useRelatedCities";
import { useAppTheme } from "@/src/theme/useAppTheme";
import { City } from "@/src/types";
import { ScrollView, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box } from "../Box";
import { CityCard } from "../CityCard";
import { Text } from "../Text";

type Props = Pick<City, "relatedCitiesIds">;

export function CityDetailsRelatedCities({ relatedCitiesIds }: Props) {
  const cities = useRelatedCities(relatedCitiesIds);
  const { spacing } = useAppTheme();
  const { bottom } = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const cardWidth = width * 0.7;
  const cardHeight = cardWidth * 0.9;

  return (
    <Box style={{ paddingBottom: bottom }}>
      <Text variant="title22" mb="s16" paddingHorizontal="padding">
        Veja também
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: spacing.padding,
          paddingHorizontal: spacing.padding,
        }}
      >
        {cities.map((city) => (
          <CityCard
            key={city.id}
            cityPreview={city}
            style={{ width: cardWidth, height: cardHeight }}
          />
        ))}
      </ScrollView>
    </Box>
  );
}
