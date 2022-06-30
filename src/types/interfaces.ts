interface IDough {
  name: string;
}

export interface IPizza {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
  composition: string;
  quantity: number;
  dough: IDough[];
}
