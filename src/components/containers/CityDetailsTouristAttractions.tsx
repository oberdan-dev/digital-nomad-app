import { City } from "@/src/types";
import { Accordion } from "../Accordion";
import { Box } from "../Box";
import { Text } from "../Text";

type CityDetailsTouristAttractionsProps = Pick<City, "touristAttractions">;

export function CityDetailsTouristAttractions({
  touristAttractions,
}: CityDetailsTouristAttractionsProps) {
  return (
    <Box padding="padding">
      <Text variant="title22" mb="s8">
        Pontos turísticos
      </Text>
      <Box gap="s8">
        {touristAttractions.map((attraction) => (
          <Accordion
            key={attraction.id}
            title={attraction.name}
            description={attraction.description}
          />
        ))}
      </Box>
    </Box>
  );
}
