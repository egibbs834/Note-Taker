var db = require("../db/db.json");
var fs = require("fs");

module.exports = function (app) {
  
  // GET 
  app.get("/api/notes", function (req, res) {
    res.json(db);
  });

  // POST
  app.post("/api/notes", function (req, res) {
    db.push(req.body);
    db.forEach((obj, i) => {
      obj.id = i + 1;
    });    
    fs.writeFile("./db/db.json", JSON.stringify(db), function () {
      res.json(db);
    });
  });

  // DELETE 
  app.delete("/api/notes/:id", function (req, res) {
    var id = req.params.id;

    db.splice(id - 1, 1);

    db.forEach((obj, i) => {
      obj.id = i + 1;
    });
  
    fs.writeFile("./db/db.json", JSON.stringify(db), function () {
      res.json(db);
    });

  });
};