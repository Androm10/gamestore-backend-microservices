import { ApplicationConfig } from './application-config.type';

export const applicationConfiguration = (): ApplicationConfig => {
  return {
    application: {
      port: parseInt(process.env.GAMESTORE_GAME_CATALOG_PORT, 10),
    },
  };
};
