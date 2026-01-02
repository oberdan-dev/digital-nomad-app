import { City } from "@/src/types";
import { router } from "expo-router";
import { ImageBackground, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BlackOpacity } from "../BlackOpacity";
import { Box } from "../Box";
import { CategoryPill } from "../CategoryPill";
import { Icon } from "../Icon";
import { IconButton } from "../IconButton";
import { PILL_HEIGHT } from "../Pill";

type CityDetailsHeaderProps = Pick<City, "id" | "coverImage" | "categories">;

export function CityDetailsHeader({
  id,
  coverImage,
  categories,
}: CityDetailsHeaderProps) {
  const { top } = useSafeAreaInsets();

  return (
    <Box>
      <ImageBackground
        source={coverImage}
        style={{ width: "100%", height: 250 }}
        imageStyle={{ borderBottomRightRadius: 40 }}
      >
        <BlackOpacity />
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          padding="padding"
          style={{ paddingTop: top }}
        >
          <IconButton iconName="Chevron-left" onPress={router.back} />
          <Icon name="Favorite-outline" size={30} color="pureWhite" />
        </Box>
      </ImageBackground>
      <ScrollView
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: -PILL_HEIGHT / 2 }}
      >
        <Box gap="s8" flexDirection="row" paddingHorizontal="padding">
          {categories.map((category) => (
            <CategoryPill active={true} key={category.id} category={category} />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}
