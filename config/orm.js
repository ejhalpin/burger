//pull in the connection
//==========================================
let connection = require("./connection");
//==========================================

module.exports = {
  selectAll: function() {
    return new Promise(resolve => {
      connection.query("SELECT * FROM story", (err, data) => {
        if (err) {
          return resolve({
            status: 500,
            reason: "error fetching all from story: " + err.code
          });
        }
        resolve({
          status: 200,
          reason: "success",
          data: data
        });
      });
    });
  },

  insert: function(storyObject) {
    return new Promise(resolve => {
      connection.query("INSERT INTO story SET ?", storyObject, (err, data) => {
        if (err) {
          console.log(err);
          return resolve({
            status: 500,
            reason: "error adding to story: " + err.code
          });
        }
        resolve({
          status: 200,
          reason: "success",
          data: data
        });
      });
    });
  },

  update: function(setItem, colValPair) {
    return new Promise(resolve => {
      connection.query("UPDATE story SET ? WHERE ?", [setItem, colValPair], (err, data) => {
        if (err) {
          return resolve({
            status: 500,
            reason: "error updating entry: " + err.code
          });
        }
        resolve({
          status: 200,
          reason: "success",
          data: data
        });
      });
    });
  }
};
