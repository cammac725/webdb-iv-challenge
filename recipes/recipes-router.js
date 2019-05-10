const router = require('express').Router();

const Recipes = require('./recipes-model')

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.getrecipes();
    res.status(200).json(recipes)
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipes.getRecipe(req.params.id);
    if (recipe) {
      res.status(200).json(recipe)
    } else {
      res.status(404).json({ message: 'Recipe not found' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
})

router.post('/', async (req, res) => {
  const recipe = req.body;
  if (recipe.name) {
    try {
      const added = await Recipes.addRecipe(recipe)
      res.status(201).json(recipe)
    } catch (err) {
      res.status(500).json({ message: 'Could not add the recipe' })
    }
  } else {
    res.status(400).json({ message: 'Please provide the name of the recipe.' })
  }
})

module.exports = router;