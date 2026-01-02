import { CityDetailsHeader } from "@/src/components/containers/CityDetailsHeader";
import { CityDetailsInfo } from "@/src/components/containers/CityDetailsInfo";
import { CityDetailsMap } from "@/src/components/containers/CityDetailsMap";
import { CityDetailsRelatedCities } from "@/src/components/containers/CityDetailsRelatedCities";
import { CityDetailsTouristAttractions } from "@/src/components/containers/CityDetailsTouristAttractions";
import { Divider } from "@/src/components/Divider";
import { Screen } from "@/src/components/Screen";
import { Text } from "@/src/components/Text";
import { useCityDetails } from "@/src/data/useCityDetails";
import { useLocalSearchParams } from "expo-router";

export default function CityDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const city = useCityDetails(id);

  if (!city) {
    return (
      <Screen alignItems="center" justifyContent="center">
        <Text>City not found</Text>
      </Screen>
    );
  }

  return (
    <Screen paddingHorizontal={0} scrollable>
      <CityDetailsHeader
        id={city.id}
        coverImage={city.coverImage}
        categories={city.categories}
      />
      <CityDetailsInfo
        name={city.name}
        country={city.country}
        description={city.description}
      />
      <Divider paddingHorizontal="padding" />
      <CityDetailsTouristAttractions
        touristAttractions={city.touristAttractions}
      />
      <Divider paddingHorizontal="padding" />
      <CityDetailsMap />
      <Divider paddingHorizontal="padding" />
      <CityDetailsRelatedCities />
    </Screen>
  );
}
