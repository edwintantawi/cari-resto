const assert = require('assert');

Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('Oops ... it looks like your Favorites List is empty', '#empty-favorite-state');
});

Scenario('Add Restaurant to Favorite restaurant list', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.list__item');
  const firstRestaurantName = await I.grabTextFrom(locate('.list__item .list__title').first());
  I.click(locate('.list__item').first());
  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.list__item');
  const favoriteRestaurantName = await I.grabTextFrom('.list__item .list__title');
  assert.strictEqual(firstRestaurantName, favoriteRestaurantName);
});

Scenario('add then Remove Restaurant from Favorite restaurant list', ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.list__item');
  I.click(locate('.list__item').first());
  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.list__item');
  I.click('.list__item');

  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.see('Oops ... it looks like your Favorites List is empty', '#empty-favorite-state');
});
