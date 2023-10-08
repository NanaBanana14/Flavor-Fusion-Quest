import DataSource from '../data/data-source.js';
import $ from 'jquery';

const main = () => {
  const $searchElement = $('#searchElement');
  const $buttonSearchElement = $('#searchButtonElement');
  const $mealListElement = $('#mealList');

  const onButtonSearchClicked = () => {
    DataSource.searchMeal($searchElement.val())
      .then(renderResult)
      .catch(fallbackResult);
  };

  const renderResult = (results) => {
    $mealListElement.empty();

    results.forEach((meal) => {
      const { strMealThumb, strMeal, strCategory, strArea, strTags, strDrinkAlternate } = meal;

      const $mealElement = $('<div>').addClass('card col-lg-4 col-md-6 mb-3');

      $mealElement.html(`
        <img src="${strMealThumb}" class="card-img-top mx-auto d-block img-thumbnail" alt="${strMeal}">
        <div class="card-body text-center">
          <h5 class="card-title">${strMeal}</h5>
          <p class="card-text">Drink Alternate: ${strDrinkAlternate}</p>
          <p class="card-text">Category: ${strCategory}</p>
          <p class="card-text">Area: ${strArea}</p>
          <p class="card-text">Tags: ${strTags}</p>
        </div>
      `);

      $mealListElement.append($mealElement);
    });
  };

  const fallbackResult = (message) => {
    $mealListElement.empty();
    $mealListElement.html(`<h2 class="placeholder">${message}</h2>`);
  };

  $buttonSearchElement.on('click', onButtonSearchClicked);
};

export default main;
