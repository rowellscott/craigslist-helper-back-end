var express = require("express");
var router = express.Router();
const craigslist = require("node-craigslist");

/* GET home page. */
router.get("/", function(req, res, next) {
  let client = new craigslist.Client({
    city: "Miami"
  });

  client
    .list()
    .then(listings => {
      // play with listings here...
      listings.forEach(listing => console.log(listing));
      res.render("index", { title: "Craigslist Helper", listings: listings });
    })
    .catch(err => {
      console.error(err);
    });

  client
    .list()
    .then(listings => client.details(listings[0]))
    .then(details => {
      console.log(details);
    })
    .catch(err => {
      console.error(err);
    });
});

module.exports = router;
