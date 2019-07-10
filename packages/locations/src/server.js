import sourceMap from 'source-map-support';
import { defaultDbBehaviors } from '6nomads-dbal';

import {
  config, asyncReduceAndMerge, deps, debug, server, scope, actions
} from '6nomads-utils';

import { name as packageName } from '../package.json';
import helpers from './models/helpers';
import schema from './models/schema';
// import models from './models';
import routes from './routes';
import controllers from './controllers';

sourceMap.install();

asyncReduceAndMerge(
  server,
  routes,
  controllers,
  // models,
  actions,
  debug,
  scope,
  config
)({
  packageName, defaultDbBehaviors, schema, helpers, deps, name: packageName
});
