import { ApplicationConfig } from './application';
import { DatabaseConfig } from './database';
import { GrpcConfig } from './grpc';

export interface Config extends ApplicationConfig, DatabaseConfig, GrpcConfig {}
