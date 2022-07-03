const POPULARITY_UP = "popularity_up";
const POPULARITY_DOWN = "popularity_down";
const ALPHABETICALLY_UP = "alphabetically_up";
const ALPHABETICALLY_DOWN = "alphabetically_down";
const PRICE_UP = "price_up";
const PRICE_DOWN = "price_down";

const labelsOfSorting = {
  [POPULARITY_UP]: "популярности ↓",
  [POPULARITY_DOWN]: "популярности ↑",
  [ALPHABETICALLY_UP]: "алфавиту от А до Я",
  [ALPHABETICALLY_DOWN]: "алфавиту от Я до А",
  [PRICE_UP]: "цена по возрастанию",
  [PRICE_DOWN]: "цене по убыванию",
};

const typesOfSorting = [
  {
    type: POPULARITY_UP,
    label: labelsOfSorting[POPULARITY_UP],
  },
  {
    type: POPULARITY_DOWN,
    label: labelsOfSorting[POPULARITY_DOWN],
  },
  {
    type: ALPHABETICALLY_UP,
    label: labelsOfSorting[ALPHABETICALLY_UP],
  },
  {
    type: ALPHABETICALLY_DOWN,
    label: labelsOfSorting[ALPHABETICALLY_DOWN],
  },
  {
    type: PRICE_UP,
    label: labelsOfSorting[PRICE_UP],
  },
  {
    type: PRICE_DOWN,
    label: labelsOfSorting[PRICE_DOWN],
  },
];

export { typesOfSorting };
