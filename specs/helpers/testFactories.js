/* eslint-disable import/prefer-default-export */
import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button-initiator';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('#favorite-button-container'),
    restaurant,
  });
};

export { createFavoriteButtonPresenterWithRestaurant };
