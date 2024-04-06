const uuid = require('uuid');

const itemsModel = require('../models/items');

module.exports = {};


module.exports.getAll = () => {
  return itemsModel.items;
}

module.exports.getById = (itemId) => {
  // TODO: complete
  const item = itemsModel.items.find(item => item.id === itemId);
  return item || null;

};

module.exports.deleteById = async (itemId) => {
    // TODO: complete
    const index = itemsModel.items.findIndex(item => item.id == itemId);
    if (index !== -1){
      itemsModel.items.splice(index, 1);
    return true;
  }
  return false;
   
};

module.exports.updateById = async (itemId, newObj) => {
    // TODO: complete
    const index = itemsModel.items.findIndex(item => item.id === itemId);
    if(index !== -1){
      newObj.id = itemId;
      itemsModel.items[index] = { ...itemsModel.items[index], ...newObj};
      return true;
    }
    return false;

}

module.exports.create = async (item) => {
  const id = uuid.v4();
  const newItem = { ...item, id };
  itemsModel.items.push(newItem);
  return newItem;
}
