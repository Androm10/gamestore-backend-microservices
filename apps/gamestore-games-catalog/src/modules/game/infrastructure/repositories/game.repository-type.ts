export interface GetGameParameters {
  id: number;
}

export interface GetGamesParameters {
  searchText?: string;

  priceLowerBoundary?: number;

  priceUpperBoundary?: number;

  releaseDate?: Date;
}

export interface AddGameParameters {
  name: string;

  description: string;

  releaseDate: Date;

  price: number;
}
