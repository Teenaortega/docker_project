/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('thing').del()
  await knex('thing').insert([
    {id: 1, name: 'Riyaad'},
    {id: 2, name: 'Jeff'},
    {id: 3, name: 'Teena'}
  ]);
};
