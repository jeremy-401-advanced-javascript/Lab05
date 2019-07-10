'use strict';

const mongoose = require('mongoose');
// Require your model
const Categories = require('./models-singular/categories');

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb://localhost:27017/class05';

// Connect
mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true });

// Do some work

let categories = new  Categories();

const doDataStuff = async () => {

  let sampleObject = {
    name: 'Jeremy',
    description: 'Big Black guy'
  };


  let newCategory = await categories.create(sampleObject);
  console.log('Category Created', newCategory)

  let allCategories = await categories.get()
  console.log('All Categories', allCategories);
  
  let oneCategory = await categories.get('5d12a3c0e27a289b9bd5eca4');
  console.log('One Player', oneCategory);

  // Disconnect from Mongo
  mongoose.disconnect();
}

doDataStuff();