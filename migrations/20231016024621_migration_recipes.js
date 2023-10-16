/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('recipes', (table) => {
    table.increments('recipe_id').primary();
    table.string('recipe_name').notNullable();
    table.text('recipe_description');
  })
  .createTable('steps', (table) => {
    table.increments('step_id').primary();
    table.string('step_name').notNullable();
    table.text('step_description').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recipes')
        .dropTableIfExists('steps');
};
