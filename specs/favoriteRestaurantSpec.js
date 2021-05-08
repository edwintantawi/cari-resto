import FavoriteButtonInitiator from '../src/scripts/utils/favorite-button-initiator';
import FavoriteRestaurant from '../src/scripts/data/favoriteRestaurant-idb';

describe('Add Favorite Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favorite-button-container"></div>';
  };

  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  it('should show the favorite restaurant button when the restaurant never add to favorite', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favorite-button-container'),
      restaurant: { id: 1 },
    });
    expect(document.querySelector('[aria-label="add restaurant to favorite"]'))
      .toBeTruthy();
  });

  it('should not show the unFavorite restaurant button when the restaurant never add to favorite', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favorite-button-container'),
      restaurant: { id: 1 },
    });
    expect(document.querySelector('[aria-label="remove restaurant from favorite"]'))
      .toBeFalsy();
  });

  it('should able to add restaurant to favorite', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favorite-button-container'),
      restaurant: { id: 1 },
    });
    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurant.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    await FavoriteRestaurant.deleteRestaurant(1);
  });

  it('should not add restaurant again when it already added to favorite', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favorite-button-container'),
      restaurant: { id: 1 },
    });

    await FavoriteRestaurant.putRestaurant({ id: 1 });

    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));
    const allFavoriteRestaurant = await FavoriteRestaurant.getAllRestaurants();

    expect(allFavoriteRestaurant).toEqual([{ id: 1 }]);

    await FavoriteRestaurant.deleteRestaurant(1);
  });

  xit('should not add restaurant when it has no id', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favorite-button-container'),
      restaurant: {},
    });

    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));

    const allFavoriteRestaurant = await FavoriteRestaurant.getAllRestaurants();

    expect(allFavoriteRestaurant).toEqual([]);
  });
});
