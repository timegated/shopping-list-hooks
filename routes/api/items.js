const express = require('express');
const router = express.Router();

// Item Model

const Item = require('../../models/Items')

// @route GET api/items
// @desc GET All Items
// @access Public

router.get('/', (req, res) => {
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items))
        .catch(err => console.log(err))
})

// @route POST api/items
// @desc Create a POST
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
       name: req.body.name
    })
    newItem.save()
        .then(item => res.json(item))
        .catch(err => res.json(err))
})

// @route DELETE request
// @desc DELETE an item
// @access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
            .catch(err => res.status(404).json({ sucess: false }));
})
    

module.exports = router;