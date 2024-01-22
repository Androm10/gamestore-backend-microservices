import { applicationConfiguration } from './application';
import { databaseConfiguration } from './database';
import { grpcConfiguration } from './grpc';

export const configuration = [
  applicationConfiguration,
  databaseConfiguration,
  grpcConfiguration,
];
