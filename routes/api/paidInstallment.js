const express = require("express");
const router = express.Router();

// Load Book model
const paid = require("../../models/paidInstallmentModel");
const Book = require("../../models/Book");

router.post("/", (req, res) => {
  Book.updateOne({_id:req.body.id},{"$set":{
    price:req.body.paid
  }})
  paid
  .create({ ...req.body, remaining: req.body.price - req.body.paid})
    .then((pay) => {
      res.json({ msg: "successfully paid" });
      //   router.post('/', (req, res) =>

      // })})
    })
    .catch((err) => res.status(400).json({ error: "Unable to pay" }));
});
router.get("/", (req, res) => {
  paid
    .find()
    .then((installments) => res.json(installments))
    .catch((err) =>
      res.status(404).json({ noinstallmentfound: "No Installments found" })
    );
});

router.get("/:id", (req, res) => {
  paid
    .find({ id: req.params.id })
    .then((pay) => res.json(pay))
    .catch((err) =>
      res.status(404).json({ noinstallmentfound: "No Installments found" })
    );
});

module.exports = router;
