export interface CardObj {
  title: string;
  image: string;
  tag: string;
  id: number;
}

export interface ICardsState {
  data: CardObj[];
  loading: boolean;
  error: null | string;
}
