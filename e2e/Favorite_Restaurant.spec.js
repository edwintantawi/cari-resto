Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Showing empty favorite restaurant state', ({ I }) => {
  I.see('Oops ... it looks like your Favorites List is empty', '#empty-favorite-state');
});
