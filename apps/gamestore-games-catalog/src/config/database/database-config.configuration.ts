import { DatabaseConfig } from './database-config.type';

export const databaseConfiguration = (): DatabaseConfig => {
  return {
    database: {
      url: process.env.GAMESTORE_DATABASE_URL,
      dialect: process.env.GAMESTORE_DATABASE_DIALECT,
    },
  };
};
