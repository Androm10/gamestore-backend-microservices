import { ApplicationConfig } from './application-config.type';

export const applicationConfiguration = (): ApplicationConfig => {
  return {
    application: {
      port: parseInt(process.env.GAMESTORE_GAMES_CATALOG_PORT, 10),
      grpc: process.env.CATALOG_GRPC_CONNECTION_URL,
    },
  };
};
