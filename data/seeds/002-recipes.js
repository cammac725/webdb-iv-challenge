
exports.seed = function (knex, Promise) {
  return knex('recipes').insert([
    { name: 'Pepperoni Pizza', dish_id: 1 }, // 1
    { name: 'PMBO Pizza', dish_id: 1 }, // 2
    { name: 'Spicy Tacos', dish_id: 2 }, // 3
    { name: 'Beef Tacos', dish_id: 2 }, // 4
    { name: 'Tuna Casserole', dish_id: 3 } // 5
  ]);
};
