import { CityPreview } from "../types";
import { cities } from "./cities";

type CityFilter = {
  name?: string;
  categoryId?: string | null;
};

export function useCities({ name, categoryId }: CityFilter): {
  cityPreviewList: CityPreview[];
} {
  let cityPreviewList = [...cities];

  if (name) {
    const lowerCaseName = name.toLowerCase();
    cityPreviewList = cityPreviewList.filter((city) =>
      city.name.toLowerCase().includes(lowerCaseName)
    );
  }

  if (categoryId) {
    cityPreviewList = cityPreviewList.filter((city) =>
      city.categories.some((category) => category.id === categoryId)
    );
  }

  return { cityPreviewList };
}
