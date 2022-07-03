const ALL = "all";
const MEATY = "meaty";
const VEGAN = "vegan";
const SPICY = "spicy";

const labelsOfFilter = {
  [ALL]: "Все",
  [MEATY]: "Мясные",
  [VEGAN]: "Вегетарианские 🌱",
  [SPICY]: "Острые 🌶️",
};

const typesOfFilter = [
  {
    type: ALL,
    label: labelsOfFilter[ALL],
  },
  {
    type: MEATY,
    label: labelsOfFilter[MEATY],
  },
  {
    type: VEGAN,
    label: labelsOfFilter[VEGAN],
  },
  {
    type: SPICY,
    label: labelsOfFilter[SPICY],
  },
];

export { typesOfFilter };
