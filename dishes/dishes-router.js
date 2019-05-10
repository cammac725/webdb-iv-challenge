const router = require('express').Router();

const Dishes = require('./dishes-model');

router.get('/', async (req, res) => {
  try {
    const dishes = await Dishes.getDishes();
    res.status(200).json(dishes);
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const dish = await Dishes.getDish(req.params.id);
    if (dish) {
      res.status(200).json(dish)
    } else {
      res.status(404).json({ message: 'Dish not found' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
})

router.post('/', async (req, res) => {
  const dish = req.body;
  if (dish.name) {
    try {
      const added = await Dishes.addDish(dish)
      res.status(201).json(added)
    } catch (err) {
      res.status(500).json({ message: 'Could not add the dish' })
    }
  } else {
    res.status(400).json({ message: 'Please provide the name of the dish.' })
  }
})

module.exports = router;