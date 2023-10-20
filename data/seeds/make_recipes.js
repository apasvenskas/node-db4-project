const recipes = [
  { recipe_name: "Pancakes" },
  { recipe_name: "Waffles" },
  { recipe_name: "Muffins" },
];

const ingredients = [
  { ingredient_name: "eggs", ingredient_unit: "whole" },
  { ingredient_name: "milk", ingredient_unit: "ml" },
  { ingredient_name: "flour", ingredient_unit: "grams" },
  { ingredient_name: "butter", ingredient_unit: "grams" },
  { ingredient_name: "sugar", ingredient_unit: "grams" },
];



const steps = [
  //Pancakes
  {
    step_name: "Pancake_1",
    step_description:
      "In a bowl, whisk together the eggs, milk, and flour until smooth.",
    step_number: 1,
    recipe_id: 1,
  },
  {
    step_name: "Pancake_2",
    step_description: "Melt the butter in a large skillet over medium heat.",
    step_number: 2,
    recipe_id: 1,
  },
  {
    step_name: "Pancake_3",
    step_description:
      "Pour 1/4 cup of the batter into the skillet for each pancake.",
    step_number: 3,
    recipe_id: 1,
  },
  {
    step_name: "Pancake_4",
    step_description: "Cook for 2-3 minutes per side, or until golden brown.",
    step_number: 4,
    recipe_id: 1,
  },
  {
    step_name: "Waffles_1",
    step_description:
      "In a bowl, whisk together the eggs, milk, and flour until smooth.",
    step_number: 1,
    recipe_id: 2,
  },
  {
    step_name: "Waffles_2",
    step_description:
      "Add the melted butter and sugar and whisk until combined.",
    step_number: 2,
    recipe_id: 2,
  },
  {
    step_name: "Waffles_3",
    step_description:
      "Pour 1/2 cup of the batter onto the hot waffle iron and close the lid.",
    step_number: 3,
    recipe_id: 2,
  },
  {
    step_name: "Waffles_4",
    step_description: "Cook for 2-3 minutes per side, or until golden brown.",
    step_number: 4,
    recipe_id: 2,
  },

  {
    step_name: "Muffin_1",
    step_description:
      "In a bowl, whisk together the eggs, milk, and flour until smooth.",
    step_number: 1,
    recipe_id: 3,
  },
  {
    step_name: "Muffin_2",
    step_description:
      "Add the melted butter and sugar and whisk until combined.",
    step_number: 2,
    recipe_id: 3,
  },

  {
    step_name: "Muffin_3",
    step_description: "Fill muffin cups 2/3 full with the batter.",
    step_number: 3,
    recipe_id: 3,
  },
  {
    step_name: "Muffin_4",
    step_description:
      "Bake for 20-25 minutes, or until a toothpick inserted into the center of a muffin comes out clean.",
    step_number: 4,
    recipe_id: 3,
  },
];

const step_ingredients = [
  //Pancakes
  {step_id: 1, ingredient_id: 1, quantity: "1"},
  {step_id: 1, ingredient_id: 2, quantity: "300"},
  {step_id: 1, ingredient_id: 3, quantity: "100"},
  //Waffles
  {step_id: 5, ingredient_id: 3, quantity: "100"},
  {step_id: 5, ingredient_id: 2, quantity: "300"},
  {step_id: 5, ingredient_id: 1, quantity: "whole"},
  {step_id: 5, ingredient_id: 5, quantity: "120"},
  {step_id: 6, ingredient_id: 4, quantity: "250"},
  //Muffin
  {step_id: 9, ingredient_id: 1, quantity: "1"},
  {step_id: 9, ingredient_id: 2, quantity: "250"},
  {step_id: 9, ingredient_id: 3, quantity: "200"},
]

exports.seed = async function (knex) {
  await knex("recipes").insert(recipes);
  await knex("ingredients").insert(ingredients);
  await knex("steps").insert(steps);
  await knex("step_ingredients").insert(step_ingredients);
};
