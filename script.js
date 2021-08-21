/* 
click recipe title
recipe appears in container
  title
  image
  ingredients
  instructions
click another recipe title
content will replace current recipe
*/


const recipeContainer = document.querySelector('#recipe-container');

const sausageRecipe = {
  title: "Smoky Sausage Hotpot",
  image: URL(assets/smoky-sasuage-hotpot.jpeg),
  prepTime: "1hr",
  serves: 4,
  sourceLink: URL('https://blog.goodpairdays.com/smoky-sausage-hotpot/'),
  sourceName: "Good Pair Days",
  ingredientsList: [
    "1 tsbp olive oil", 
    "1 chopped onion",
    "1 crushed garlic clove",
    "1 chopped celery stalk",
    "2 green or red capsicums, chopped",
    "6 pork sausages, left whole",
    "1 tsp smoked paprika",
    "1/2 tsp ground cumin",
    "1/2 tsp chilli flakes",
    "800g chopped tomatoes",
    "250g spinach leaves",
    "2 tsp breadcrumbs",
    "1 tsp fresh thyme, to serve",
    "Crusty bread, to serve",
  ],
  method: [
    "Chop the onion. Crush the garlic. Chop the celery. Chop the capsicum.",
    "Heat the oil over a medium heat on the stove in an ovenproof dish. Add the onion and cook for 5 minutes.",
    "Add the garlic, capsicum, and celery, and cook for another 5 minutes.",
    "Turn up the heat to high, and add the sausages. Cook for a few minutes to brown all over.",
    "Stir in the smoked paprika, cumin, and chilli flakes, and salt and pepper.",
    "Add the tomatoes, bring to a simmer, and cook covered for 40 minutes, stirring regularly.",
    "Heat up the grill (broiler), and uncover the dish. Stir in the beans and spinach, then scatter over the breadcrumbs.",
    "Stick it under the grill for 3 minutes, then serve, with thyme and crusty bread.",
  ],
};

