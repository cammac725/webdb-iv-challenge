
exports.seed = function (knex, Promise) {

  return knex('ingredients').insert([
    { name: 'cup of flour' }, // 1
    { name: 'pkg of yeast' }, // 2
    { name: 'pizza sauce' }, // 3
    { name: 'sliced olives' }, // 4
    { name: 'sliced mushrooms' }, // 5
    { name: 'corn tortillas' }, // 6
    { name: 'tsp of salt' }, // 7
    { name: 'ground beef' }, // 8
    { name: 'shredded cheese' }, // 9
    { name: 'cayenne pepper' }, // 10
    { name: 'can of tuna fish' }, // 11
    { name: 'egg noddles' }, // 12
    { name: 'can of mushroom soup' } // 13
  ]);
};
