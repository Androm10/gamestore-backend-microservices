export interface CoreService {
  addGame(data: GameDto): Promise<GameData>;
}

export interface GameDto {
  id: number;
  name: string;
  releaseDate: string;
  price: number;
}

export interface GameData {
  id: number;
  name: string;
  releaseDate: Date;
  price: number;
  gameCatalogId: number;
}
