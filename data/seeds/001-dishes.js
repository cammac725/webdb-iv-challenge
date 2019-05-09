
exports.seed = function (knex, Promise) {
  return knex('dishes').insert([
    { name: 'pizza' }, // 1
    { name: 'tacos' }, // 2
    { name: 'casserole' } // 3
  ]);
};
