import { ApplicationConfig } from './application-config.type';

export const applicationConfiguration = (): ApplicationConfig => {
  return {
    application: {
      port: parseInt(process.env.GAMESTORE_PORT, 10),
      grpc: process.env.GRPC_CONNECTION_URL,
    },
  };
};
