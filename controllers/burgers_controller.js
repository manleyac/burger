const express = require("express");
const burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req,res) {
   burger.all(function(data) {
      var resObj = {
         burgers: data
      }
      res.render("index",resObj);
   });
});

router.post("/api/burger", (req,res) => {
   burger.create(["burger_name","devoured"], [req.body.burgerName,false], (result) => {
     console.log("Burger Added");
     res.json({id: result})
   });
});
module.exports = router;