//Pull in dependencies
//===================================================
let orm = require("../config/orm");
//===================================================

//set up the api routes to handle the requests
//===================================================
module.exports = async function(app){
  //serve up the page
  app.get("/", (req,res)=>{
    //this endpoint will serve up the storyboard populated with all entries
    var dataObject = await orm.selectAll();
    if(dataObject.status === 500){
      //serve up a server error page
    }
    //format the data to be used in handlebars
    res.render("index",dataObject);
  });

  app.post("/api/new", (req,res)=>{
    //this endpoint will add a new post to the database and re-render index
    var newEntry = await orm.insert(req.body);
    if(newEntry.status===500){
      //serve up a server error page
    }
    var dataObject = await orm.selectAll();
    if(dataObject.status === 500){
      //serve up a server error page
    }
    //format the data to be used in handlebars
    var hooks = {};
    res.render("index",hooks);
  });

  app.put("/api/flag", (req,res)=>{
    //this endpoint toggles the deleted value for an entry
    var toggleVal = await orm.update(req.body.data[0], req.body.data[1]);
    if(toggleVal.status===500){
      //serve up a server error page
    }
    var dataObject = await orm.selectAll();
    if(dataObject.status === 500){
      //serve up a server error page
    }
    //format the data to be used in handlebars
    var hooks = {};
    res.render("index",hooks);
  });
}