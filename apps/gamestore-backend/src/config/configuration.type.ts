import { ApplicationConfig } from './application';
import { DatabaseConfig } from './database';

export interface Config extends ApplicationConfig, DatabaseConfig {}
