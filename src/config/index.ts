import { merge } from 'lodash';

import dev from './dev';
import prod from './prod';
import test from './test';
import uat from './uat';

const defaultConfig = {};
const env = process.env.NODE_ENV || process.env.npm_package_config_environment;

console.log(`=> process.env.NODE_ENV: ${process.env.NODE_ENV}
=> process.env.npm_package_config_environment: ${process.env.npm_package_config_environment}
=> env: ${env}
So picking the ${env} config.`);

let config: any = {};
switch (env) {
  case 'dev':
  config = merge({}, defaultConfig, dev);
  break;

  case 'uat':
  config = merge({}, defaultConfig, uat);
  break;

  case 'prod':
  config = merge({}, defaultConfig, prod);
  break;

  case 'test':
  config = merge({}, defaultConfig, test);
  break;

  default:
  config = defaultConfig;
}

export default config;
