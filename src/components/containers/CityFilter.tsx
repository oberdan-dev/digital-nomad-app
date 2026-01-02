import { Category } from "@/src/types";
import { ScrollView } from "react-native";
import { Box } from "../Box";
import { CategoryPill } from "../CategoryPill";
import { SearchInput } from "../SearchInput";

type CityFilterProps = {
  categories: Category[];
  cityName: string;
  onChangeCityName: (cityName: string) => void;
  selectCategoryId: string | null;
  onChangeSelectCategoryId: (id: string | null) => void;
};

export function CityFilter({
  categories,
  cityName,
  onChangeCityName,
  selectCategoryId,
  onChangeSelectCategoryId,
}: CityFilterProps) {
  return (
    <Box>
      <Box paddingHorizontal="padding">
        <SearchInput
          value={cityName}
          onChangeText={onChangeCityName}
          placeholder="Qual o seu próximo destino?"
        />
      </Box>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Box mt="s16" gap="s8" flexDirection="row" paddingHorizontal="padding">
          {categories.map((category) => (
            <CategoryPill
              key={category.id}
              active={category.id === selectCategoryId}
              category={category}
              onPress={() =>
                onChangeSelectCategoryId(
                  category.id === selectCategoryId ? null : category.id
                )
              }
            />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}
