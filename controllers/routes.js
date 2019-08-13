//Pull in dependencies
//===================================================
let story = require("../models/story");
//===================================================

//set up the express router to handle the requests
//===================================================
var express = require("express");

var router = express.Router();

//serve up the page
router.get("/", (req, res) => {
  //this endpoint will serve up the storyboard populated with all entries
  story.all(function(dataObject) {
    if (dataObject.status === 500) {
      //serve up a server error page
    }
    res.render("index", dataObject);
  });
});

router.post("/api/new", (req, res) => {
  //this endpoint will add a new post to the database and re-render index
  req.body.deleted = req.body.deleted === "true" || req.body.deleted == "1";
  story.create(req.body, function(dataObject) {
    if (dataObject.status === 500) {
      //serve up a server error page
    }
    //format the data to be used in handlebars
    res.render("index", dataObject);
  });
});

router.put("/api/flag", (req, res) => {
  req.body.data[0].deleted = req.body.data[0].deleted === "true" || req.body.data[0].deleted == "1";
  //this endpoint toggles the deleted value for an entry
  story.update(req.body.data, function(dataObject) {
    if (dataObject.status === 500) {
      //serve up a server error page
    }
    //format the data to be used in handlebars
    res.render("index", dataObject);
  });
});

module.exports = router;
