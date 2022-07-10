export interface IDough {
  name: string;
  coeficient: number;
}

export interface ISize {
  name: string;
  coeficient: number;
}

export interface IPizza {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: ISize[];
  types: number[];
  rating: number;
  composition: string;
  quantity: number;
  doughes: IDough[];
  category: number[];
}
