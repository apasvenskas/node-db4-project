const recipes = [
    {recipe_name: "Pancakes", 
    recipe_description: "thin pancakes that originated in France and can be filled with various ingredients such as cheese, ham, chocolate, or fruit2"
},
    {recipe_name: "Waffles", 
    recipe_description: "These are thick and fluffy waffles that have large squares and deep pockets. They are usually made with yeast or baking powder, and sometimes have pearl sugar mixed in the batter. They are often served with whipped cream, fruit, or chocolate"
},
    {recipe_name: "Muffins", 
    recipe_description: " These are sweet muffins. They are often topped with coarse sugar or streusel for extra crunch and sweetness"
}
]

const ingredients = [
    {ingredient_name: "eggs", ingredient_unit: "single", ingredient_serving: "single egg"}, 
    {ingredient_name: "milk", ingredient_unit: "ml", ingredient_serving: "240ml"}, 
    {ingredient_name: "flour", ingredient_unit: "grams", ingredient_serving: "50g"}, 
    {ingredient_name: "butter", ingredient_unit: "grams", ingredient_serving: "50g"}, 
    {ingredient_name: "sugar", ingredient_unit: "grams", ingredient_serving: "20g"}
];

const steps = [
    //Pancakes
    {step_name: "Pancake_1", step_description: "In a bowl, whisk together the eggs, milk, and flour until smooth."},
    {step_name: "Pancake_2", step_description: "Melt the butter in a large skillet over medium heat."},
    {step_name: "Pancake_3", step_description: "Pour 1/4 cup of the batter into the skillet for each pancake."},
    {step_name: "Pancake_4", step_description: "Cook for 2-3 minutes per side, or until golden brown."},
    {step_name: "Pancake_5", step_description: "Serve with your favorite toppings, such as syrup, fruit, or whipped cream."},
    {step_name: "Waffles_1", step_description: "In a bowl, whisk together the eggs, milk, and flour until smooth."},
    {step_name: "Waffles_2", step_description: "Add the melted butter and sugar and whisk until combined."},
    {step_name: "Waffles_3", step_description: "Preheat your waffle iron according to the manufacturer's instructions."},
    {step_name: "Waffles_4", step_description: "Pour 1/2 cup of the batter onto the hot waffle iron and close the lid."},
    {step_name: "Waffles_5", step_description: "Cook for 2-3 minutes per side, or until golden brown."},
    {step_name: "Waffles_6", step_description: "Serve with your favorite toppings, such as syrup, fruit, or whipped cream."},
    {step_name: "Muffin_1", step_description: "Preheat your oven to 375 degrees Fahrenheit (190 degrees Celsius)."},
    {step_name: "Muffin_2", step_description: "In a bowl, whisk together the eggs, milk, and flour until smooth."},
    {step_name: "Muffin_3", step_description: "Add the melted butter and sugar and whisk until combined."},
    {step_name: "Muffin_4", step_description: "Fold in your favorite mix-ins, such as berries, chocolate chips, or nuts."},
    {step_name: "Muffin_5", step_description: "Fill muffin cups 2/3 full with the batter."},
    {step_name: "Muffin_6", step_description: "Bake for 20-25 minutes, or until a toothpick inserted into the center of a muffin comes out clean."},
    {step_name: "Muffin_7", step_description: "Let the muffins cool completely before serving."}
]


exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
}