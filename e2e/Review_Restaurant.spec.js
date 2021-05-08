// Feature('Review Restaurant');

// Scenario('Add Review for first restaurant in list', async ({ I }) => {
//   const name = 'E2E Test 3';
//   const review = 'Iam test review feature 3...';

//   I.amOnPage('/');
//   I.seeElement('.list__item');
//   I.click(locate('.list__item').first());

//   I.seeElement('#review-form');
//   I.fillField('#review-name', name);
//   I.fillField('#review-review', review);
//   I.click('#review-form button');
//   I.refreshPage();
//   pause();
//   I.see(name, locate('.review__user .review__info h3').last());
//   I.see(review, locate('.review__user .review__info p').last());
// });
