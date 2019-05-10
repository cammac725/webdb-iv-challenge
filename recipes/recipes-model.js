const db = require('../data/dbConfig');

module.exports = {
  getRecipes,
  getRecipe,
  addRecipe
}

function getRecipes() {
  return db('recipes')
}

function getRecipe(id) {
  return db('dishes')
    .where({ id })
    .first()
}

function addRecipe(recipe) {
  return db('recipes').insert(recipe, 'id')
}