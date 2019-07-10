'use strict';

// Where is our schema defined?
const schema = require('./categories-schema');
// How do we get it in here so we can run methods on it?

class Categories {

  constructor() {
  }

  get(_id) {
    // Call the appropriate mongoose method to get
    if (_id) {
      return schema.findOne({_id});
    } else {
      return schema.find({});
    }
  }

  create(record) {
    let newRecord = new schema(record);
    // console.log(newRecord.save());
    return newRecord.save();
  }

  update(_id, record) {
     return schema.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    return schema.findOneByIdAndDelete(_id);
  }

}

module.exports = Categories;
