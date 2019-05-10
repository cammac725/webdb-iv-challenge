
exports.seed = function (knex, Promise) {
  return knex('recs_ingreds').insert([
    { recipe_id: 1, ingredient_id: 1 }, // 1
    { recipe_id: 1, ingredient_id: 2 }, // 2
    { recipe_id: 1, ingredient_id: 3 }, // 3
    { recipe_id: 1, ingredient_id: 4 }, // 4
    { recipe_id: 1, ingredient_id: 5 }, // 5
    { recipe_id: 1, ingredient_id: 7 }, // 6
    { recipe_id: 2, ingredient_id: 1 }, // 7
    { recipe_id: 2, ingredient_id: 2 }, // 8
    { recipe_id: 2, ingredient_id: 3 }, // 8
    { recipe_id: 2, ingredient_id: 4 }, // 9
    { recipe_id: 2, ingredient_id: 5 }, // 10
    { recipe_id: 1, ingredient_id: 7 }, // 11
    { recipe_id: 3, ingredient_id: 6 }, // 12
    { recipe_id: 3, ingredient_id: 7 }, // 13
    { recipe_id: 3, ingredient_id: 8 }, // 14
    { recipe_id: 3, ingredient_id: 9 }, // 15
    { recipe_id: 3, ingredient_id: 10 }, // 16
    { recipe_id: 4, ingredient_id: 6 }, // 17
    { recipe_id: 4, ingredient_id: 7 }, // 17
    { recipe_id: 4, ingredient_id: 8 }, // 18
    { recipe_id: 4, ingredient_id: 9 }, // 19
    { recipe_id: 5, ingredient_id: 11 }, // 20
    { recipe_id: 5, ingredient_id: 12 }, // 21
    { recipe_id: 5, ingredient_id: 13 }, // 22
    { recipe_id: 5, ingredient_id: 7 } // 23
  ]);
};
