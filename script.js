// TEMPLATE
/*
const recipe = {
  title: "",
  image: ),
  prepTime: "",
  serves: 4,
  sourceLink: ""),
  sourceName: "",
  ingredientsList: [

  ],
  instructions: [

  ],
};
*/

// RECIPE OBJECTS

const sausage = {
  title: "Smoky Sausage Hotpot",
  image: "./assets/smoky-sasuage-hotpot.jpeg",
  prepTime: "1hr",
  serves: 4,
  sourceLink: 'https://blog.goodpairdays.com/smoky-sausage-hotpot/',
  sourceName: "Good Pair Days",
  tags: ["hearty", "pork"],
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
    "400g can cannellini beans",
    "2 tsp breadcrumbs",
    "1 tsp fresh thyme, to serve",
    "Crusty bread, to serve",
  ],
  instructions: [
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

const curry = {
  title: "Golden Chicken Curry",
  image: "./assets/sb-golden-curry.jpeg",
  prepTime: "30 mins",
  serves: 4,
  sourceLink: "https://www.sbfoods-worldwide.com/recipes/010.html",
  sourceName: "S&B",
  tags: ["hearty", "chicken", "japanese", "rice"],
  ingredientsList: [
"1 cup of long grain rice",
"2 cups water",
"1 packet of S&B Golden Curry mix",
"500g chicken thigh",
"1 tbsp olive oil",
"540ml water",
"1 brown onion",
"1 carrot",
"6 baby potatoes",
"1/2 head of broccoli",
"You can also use zucchini, or maybe some cup mushrooms, whatever you like really.",
  ],
  instructions: [
"Finely dice the onion, slice the carrot about 5mm thick, chop the potato into 2cm cubes, cut the broccoli into smaller florets.",
"Get your saucepan lid and wrap it in a teatowel tied at the top, kind of like a furoshiki. (This is to stop condensation from the lid dripping into the rice).",
"Put 2 cups of water into the saucepan and add 1 cup of rice. Bring to the boil.",
"Chop the chicken into 2cm cubes. (You can do this earlier but it fills in some time while the rice begins to boil).",
"Add the oil to a large frypan and cook the chicken for 5 mins.",
"Is the rice boiling yet? Turn the heat to low and cover with the wrapped lid. Cook for 12 mins with the lid on. Set a timer!",
"Add the onion, carrot, potatoes, and any other veg you're using and cook for 5 mins",
"Add 540ml of water, and bring to the boil.",
"Reduce curry heat to low, cover, and simmer for about 15 mins.",
"When your 12 mins for the rice is up, take it off the heat, but leave the lid on for 15 mins. (This method gives you perfect fluffy rice, my friend & former-chef Britt taught me this method, including the teatowel thing, it always works).",
"Turn off the heat for the curry, break the Curry Mix into pieces and scatter across the pan, then stir until they have melted.",
"Simmer for another 5 mins, stirring constantly.",
"Once the rice has been off the heat but covered for 15 mins, divide between plates and top with the curry.",
  ],
};


const chilli = {
  title: "Caribbean Beef Chilli",
  image: "./assets/caribbean-beef-chilli-coconut-rice.jpeg",
  prepTime: "35mins",
  serves: 2,
  sourceLink: "https://www.hellofresh.com.au/recipes/caribbean-beef-chilli-coconut-rice-596d8638a2882a678d0c6a42",
  sourceName: "HelloFresh",
  tags: ["hearty", "rice", "beef"],
  ingredientsList: [
    "1 carrot (unpeeled)",
    "2 cloves of garlic",
    "1 cup of basmati rice",
    "2 cups of water",
    "2 tbsp Jerk seasoning",
    "500g beef mince",
    "50g mango chutney",
    "2 tbsp tomato paste",
    "1 pinch of chilli flakes (optional)",
    "1 cucumber",
    "1 roma tomato",
    "1 bunch of mint",
    "1/2 lemon",
  ],
  instructions: [
    "Grate the carrot (unpeeled). Peel and crush the garlic. Slice the lemon into wedges, and juice until you have 2 tsp.",
    "While the rice is cooking, heat a drizzle of olive oil in a large frying pan over a medium-high heat. Add the beef mince and cook, breaking up with a wooden spoon, for 4-5 minutes, or until browned. Add the carrot, garlic, and jerk spice blend and cook for 1-2 minutes, or until fragrant.",
    "Add the mango chutney, tomato paste, 1 cup of water, 1 tsp of salt, and the chilli flakes (if using) to the pan with the beef mince. Mix well and simmer for 2 minutes, or until thickened.",
    "While the chilli is simmering, dice the cucumber and the Roma tomato. Roughly chop the mint leaves. In a medium bowl, combine the cucumber, tomato, mint, lemon juice and a drizzle of olive oil. Season to taste with a pinch of salt and pepper and stir to combine.",
    "Divide the coconut rice between bowls and top with the Caribbean beef chilli. Spoon over the cucumber-mint salsa.",
  ],
};

const lentils = {
  title: "Smoky Chicken & Lentils",
  image: "./assets/smoky-chicken-lentils.jpeg",
  prepTime: "40mins",
  serves: 4,
  sourceLink: "https://www.lentils.org/recipe/moroccan-braised-chicken-lentils-smoked-paprika-tomato/",
  sourceName: "Lentils.org",
  tags: ["hearty", "chicken", "oven"],
  ingredientsList: [
    "1 chicken cut into 8 pieces or equivalent in breasts and/or thighs, skin on.",
    "1 medium brown onion, finely chopped",
    "2 cloves of garlic, thinly sliced",
    "1.5 tbsp smoked paprika",
    "1 tbsp cumin",
    "1 cup split red lentils, rinsed",
    "1 cup whole cherry tomatoes",
    "2 cups/500mL chicken stock",
    "3 bay leaves",
    "0.5 tsp chilli flakes",
    "Parsley to garnish, finely chopped",
  ],
  instructions: [
    "Preheat the oven to 200 celsius. Finely chop the onion. Slice the garlic. Rinse the lentils. Make the chicken stock.",
    "Pat both sides of chicken with paper towel to remove excess moisture, season generously on both sides with salt and pepper.",
    "In an ovenproof fry pan or cast iron pan, heat a splash of olive oil over a medium-high heat. Add the chicken to the pan and cook for 4-5 mins each side. Sear the chicken in batches or they will steam and not sear. Remove from the pan and set aside.",
    "Turn heat to medium, add onions, garlic, 1.5 tbsp smoked paprika, and 1 tbsp cumin. Stir for 3-5 mins. You won't be able to see it but the onions should go translucent but not browned.",
    "Turn off the heat. Add lentils, stock, tomatoes, bay leaves, chilli flakes, and chicken to the pan.",
    "Slide the pan into the oven and cook uncovered for 20-25 mins.",
    "Turn off oven and turn on broiler (grill) for 1-2 mins. This is the brown up the tomatoes. Remove from the oven & serve garnished with chopped parsley.",
  ],
};

const tomato = {
  title: "Chicken & Tomato with Capers",
  image: "./assets/chicken-tomato-capers.png",
  prepTime: "30mins",
  serves: 4,
  sourceLink: "https://diethood.com/chicken-tomato-sauce/",
  sourceName: "Diethood",
  tags: ["chicken"],
  ingredientsList: [
    "2 tbsp olive oil",
    "4 boneless chicken breasts",
    "1 tsp dried basil",
    "salt and fresh ground pepper to taste",
    "1 tbsp butter",
    "1 brown onion finely diced",
    "2 tsp minced garlic",
    "1/3 cup white wine vinegar",
    "1 400g can of diced tomatoes",
    "2 tbsp tomato paste",
    "1 tsp dried oregano",
    "another 1 tsp dried basil",
    "1/3 cup cream",
    "1/4 cup drained capers",
    "1/4 cup chopped fresh parsley for garnish",
  ],
  instructions: [
    "Heat olive oil in a large skillet.",
    "Season chicken with dried basil, salt, and pepper.",
    "Add the chicken breasts to the skillet and cook over medium-high heat, 3 to 4 minutes per side, or until lightly browned.",
    "Remove chicken breasts from skillet; set aside.",
    "  Add butter to the skillet and melt.",
    "Add diced onions and cook for 2 minutes.",
    "Stir in garlic and cook for 30 seconds.",
    "Stir in the wine to dissolve the brown pieces found at the bottom of the skillet; continue to cook for 4 minutes, or until reduced.",
    "Mix in the tomatoes, tomato paste, oregano, basil, half & half, and capers.",
    "Place chicken back in the skillet, bring to a boil; cover and simmer over medium-low heat for 8 minutes, or until chicken is cooked through.",
    "Remove from heat, garnish with parsley and serve.",
  ],
};

const salmon = {
  title: "Parmesan Crusted Salmon",
  image: "./assets/parmesan-crusted-salmon.png",
  prepTime: "30mins",
  serves: 2,
  sourceLink: "https://tasty.co/recipe/parmesan-crusted-salmon",
  sourceName: "Tasty.co",
  tags: ["fish", "light", "oven"],
  ingredientsList: [
    "4 pieces of salmon, skin off",
    "2 bunches of asparagus",
    "1 egg",
    "1/4 cup panko breadcrumbs",
    "1/4 cup grated parmesan cheese",
    "1 tbsp chopped parsley",
    "salt, pepper, olive oil",
  ],
  instructions: [
    "Grate the cheese, chop the parsley",
    "Preheat the oven to 200 celsius",
    "In a medium bowl, combine the breadcrumbs, parmesan, parsley, and salt to taste.",
    "In a separate bowl, whisk the egg. Dredge the salmon in the egg, then dip into the breadcrumb mix & cover completely.",
    "Lay the salmon on a baking sheet. Lay asparagus beside the salmon & drizzle with olive oil and season with salt & pepper.",
    "Bake for 10-12 minutes.",
    "Serve.",
  ],
};

const orecchiette = {
  title: "Miso Carrot Orecchiette",
  image: "./assets/miso-carrot-orecchiette.jpg",
  prepTime: "45mins",
  serves: 4,
  sourceLink: "https://www.feastingathome.com/orecchiette-with-creamy-carrot-sauce",
  sourceName: "Feasting at Home",
  tags: ["vegan", "pasta", "blender"],
  ingredientsList: [
    "250g orecchiette pasta",
    "3 tbsp white miso paste",
    "2 shallots, roughly chopped (or 1/2 brown onion)",
    "8 cloves of garlic - 6 roughly chopped & 2 finely chopped",
    "2 tbsp olive oil",
    "3 medium carrots, thinly sliced",
    "2 cups water",
    "1/4 cup raw cashews",
    "1/2 tsp salt (1/2 for the sauce & 1/2 for the gremolata)",
    "1/4 tsp pepper",
    "1/2 flat leaf Italian parsley",
    "1/2 cup carrot tops (leaves) (or 1/2 more parsley)",
    "1 lemon - zest only",
    "1/3 cup - 1/2 cup olive oil",
    "1/2 cup panko breadcrumbs",
    "1/2 tsp granulated garlic",
    "1 cup peas (optional)",
  ],
  instructions: [
    "Finely chop the carrot",
    "Roughly chop the shallot and garlic",
    "Put 6-8 cups of water into a pot, make sure to add salt, and bring to the boil",
    "Cook the pasta to the packet directions",
    "Heat 2 tbsp oil over medium heat in a medium pot that has a lid",
    "Saute shallot and garlic until golden, about 5 minutes, stirring often",
    "Add the carrot, 1/4 cup of cashews, 2 cups water, 1/4 tsp salt and 1/4 tsp pepper, and bring to a boil",
    "Cover, turn heat to low and simmer for about 15 minutes until carrots are fork-tender",
    "While the sauce cooks, make the gremolata: very finely chop the carrot leaves, parsely, and garlic, zest the lemon, combine with 1/4 tsp salt and 1/3 cup olive oil, and mix well",
    "Back to the sauce: stir in the 3 tbsp miso. Turn off the heat, and let cool for 5-10 minutes",
    "While the sauce cools, prepare the breadcrumbs: place 1/2 cup of panko breadcrumbs in a large skillet over medium heat, drizzle with olive oil, add a pinch of salt and granulated garalic and stir until golden, about 5 minutes",
    "Once the sauce is cooled place all in a blender and blend on the lowest setting, gradually increasing speed, until fully blended, creamy, and silky smooth - 1-2mins.",
    "Optional: at the end of the pasta cook time add a cup of peas for extra veggies",
    "Drain the pasta, pour the sauce over the top - at this point, taste it and add salt if needed",
    "Divide among bowls, sprinkle with the breadcrumbs, and spoon the gremolata over the top."
  ],
};


/*
recipe divs add event listener 'click'
runs function to append button.id recipe to container
*/

const links = document.querySelectorAll(".recipe-link");

links.forEach((link => {
  link.addEventListener('click', () => {
    // run function to show recipe based on id
    let byTitle = link.id; // DRY: check for something to match to so the switch statement can look for true instead of a specified id e.g if true return object with that title
    switch (byTitle) {
      case "chilli":
        link.style.backgroundColor = "rebeccaPurple";
        showRecipe(chilli);
        break;
      case "lentils":
        link.style.backgroundColor = "red";
        showRecipe(lentils);
        break;
      case "tomato":
        link.style.backgroundColor = "orange";
        showRecipe(tomato);
        break;
      case "curry":
        link.style.backgroundColor = "green";
        showRecipe(curry);
        break;
      case "salmon":
        link.style.backgroundColor = "pink";
        showRecipe(salmon);
        break;
      case "sausage":
        link.style.backgroundColor = "lightBlue";
        showRecipe(sausage);
        break;
      case "orecchiette":
        link.style.backgroundColor = "#ff9981ff"
        showRecipe(orecchiette);
        break;
      default:
        link.style.backgroundColor = "grey";
    }
  })
}));

// select the section to hold recipe divs
const recipeContainer = document.querySelector('#recipe-container');

// CREATE THE FUNCTION
// the function needs to take in an object (recipe), and display all of the information associated with that object in html.

// create an unordered list.
// loop over the ingredients array. 
// create a list item
// set list item text content to current iteration of array
// append list item to unordered list

function showRecipe(recipe) {
  // remove current recipe
  recipeContainer.innerHTML = "";
  
  let ingredientsUl = document.createElement('ul');
  ingredientsUl.classList.add("ingredients-list");
  
  for (let i = 0; i < recipe.ingredientsList.length; i++) {
    let ingredientListItem = document.createElement('li');
    ingredientListItem.textContent = recipe.ingredientsList[i]; 
    ingredientsUl.appendChild(ingredientListItem);
  }

  // same for instructions

  let instructionsOl = document.createElement('ol');
  
  for (let i = 0; i < recipe.instructions.length; i++) {
    let instructionsListItem = document.createElement('li');
    instructionsListItem.textContent = recipe.instructions[i]; 
    instructionsOl.appendChild(instructionsListItem);
  }

  let displayHeadings = `
  <div id="recipe-details">
    <h2>${recipe.title}</h2>
    <img class="recipe-img" src="${recipe.image}" />
    <p>Prep Time: ${recipe.prepTime}. Serves: ${recipe.serves}. Source: <a href="${recipe.sourceLink}" target="_blank">${recipe.sourceName}</a></p>
    <h3>Ingredients</h3>
    `;
  
  let instructionsHeading = document.createElement("h3");
  instructionsHeading.textContent = "Instructions";

  const recipeDetails = document.createElement("div"); // this doubles up on the div that's already been created in displayHeadings
  recipeDetails.id = "recipe-details";
  recipeDetails.innerHTML = displayHeadings;
  recipeDetails.appendChild(ingredientsUl);
  recipeDetails.appendChild(instructionsHeading);
  recipeDetails.appendChild(instructionsOl);
  recipeContainer.appendChild(recipeDetails);

};

// need to be able to replace the currently showing recipe with the next one selected
