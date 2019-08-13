//Pull in dependencies
//===================================================
let orm = require("../config/orm");
//===================================================

var story = {
  all: function(cb) {
    orm.selectAll().then(dataObject => {
      cb(dataObject);
    });
  },

  create: function(data, cb) {
    orm.insert(data).then(newEntry => {
      if (newEntry.status === 500) {
        return cb(newEntry);
      }
      orm.selectAll().then(dataObject => {
        cb(dataObject);
      });
    });
  },

  update: function(data, cb) {
    orm.update(data[0], data[1]).then(toggleVal => {
      if (toggleVal.status === 500) {
        return cb(toggleVal);
      }
      orm.selectAll().then(dataObject => {
        cb(dataObject);
      });
    });
  }
};

module.exports = story;
