const { Hardware } = require('./hardware.class');
const createModel = require('../../models/hardware.model');
const hooks = require('./hardware.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/hardware', new Hardware(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('hardware');

  service.hooks(hooks);
};