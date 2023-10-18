/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', (table) => {
      table.increments('recipe_id').primary();
      table.string('recipe_name').notNullable().unique();
      table.text('recipe_description').notNullable();
    })
    .createTable('ingredients', (table) => {
      table.increments('ingredient_id').primary();
      table.string('ingredient_name', 200).notNullable().unique();
      table.string('ingredient_unit', 50).notNullable();
      table.integer('ingredient_serving', 1000).notNullable();
    }) 
    .createTable('steps', (table) => {
      table.increments('step_id').primary();
      table.string('step_name', 200).notNullable().unique();
      table.text('step_description').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};