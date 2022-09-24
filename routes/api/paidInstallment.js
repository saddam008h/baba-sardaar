const express = require('express');
const router = express.Router();

// Load Book model
const paid = require('../../models/paidInstallmentModel');
const Book = require('../../models/Book');


router.post('/', (req, res) => {
    paid.create(req.body)
      .then(pay => {
        res.json({msg:"successfully paid"})
        //   router.post('/', (req, res) => {
        //   paid.create({remaining: pay.price = pay.price - pay.paid}).then(asi => console.log("hello"))
        
        // })})
      })
      .catch(err => res.status(400).json({ error: 'Unable to pay' }));
});
  router.get('/', (req, res) => {
    paid.find()
      .then(installments => res.json(installments))
      .catch(err => res.status(404).json({ noinstallmentfound: 'No Installments found' }));
  });

  router.get('/:id', (req, res) => {
    paid.find({id:req.params.id})
      .then(pay => res.json(pay))
      .catch(err => res.status(404).json({ noinstallmentfound: 'No Installments found' }));
  });
  

  module.exports = router;
