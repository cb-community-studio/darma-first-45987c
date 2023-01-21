const users = require("./users/users.service.js");
const hardware = require("./hardware/hardware.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(hardware);
  // ~cb-add-configure-service-name~
};
