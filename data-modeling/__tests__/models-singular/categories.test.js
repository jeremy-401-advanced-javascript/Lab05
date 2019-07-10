const Categories = require('../../models-singular/categories.js');
let categories = new Categories();

const supergoose = require('../supergoose.js');

describe('Categories Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new category', () => {
    let obj = { name: 'Jeremy', description: 'Big Black guy' };
    return categories.create(obj)
      .then(record => {
        console.log(record);
        Object.keys(obj).forEach(key => {
          console.log(record[key])
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  // it('can get() a category', () => {
  // });

  // it('can get() all categories', () => {
  // });

  // it('can update() a category', () => {
  // });

  // it('can delete() a category', () => {
  // });

});