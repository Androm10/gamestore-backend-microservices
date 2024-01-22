import { GrpcConfig } from './grpc-config.type';

export const grpcConfiguration = (): GrpcConfig => {
  return {
    grpc: {
      coreUrl: process.env.GRPC_CONNECTION_URL,
    },
  };
};
