export interface GetGameParameters {
  id: number;
}

export interface AddToWishlistParameters {
  id: number;
  userId: number;
}

export interface GetGamesParameters {
  searchText?: string;

  priceLowerBoundary?: number;

  priceUpperBoundary?: number;

  releaseDate?: Date;
}

export interface AddGameParameters {
  name: string;

  releaseDate: Date;

  price: number;

  gameCatalogId: number;
}
