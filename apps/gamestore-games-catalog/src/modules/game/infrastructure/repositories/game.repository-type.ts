export interface GetGameParameters {
  id: number;
}

export interface GetGamesParameters {
  searchText?: string;

  priceLowerBoundary?: number;

  priceUpperBoundary?: number;

  releaseDate?: Date;
}
