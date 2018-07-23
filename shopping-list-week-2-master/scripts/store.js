'use strict';
/* global item, Item,  cuid*/

const store = (function () {
  const foo = 'bar';
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';
  //??????????????????????????????????????
  const findById = function(id) {
    return store.items.find(id);
  };
  const addItem = function(name) {
    console.log(Item);
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch(error) {
      console.log('Cannot add item: ' + error.message);
    }
  };
  const findAndToggleChecked = function(id) {
    const findId = this.findById(id);
    findId.checked = !findId.checked;
  };

  const findAndUpdateName = function(id, newName) {
    try {
      Item.validateName(newName);
      const itemId = findById(id);
      itemId.name = newName;
    } catch(error) {
      console.log('Cannot update name : ' + error.message);
    }
  };
  const findAndDelete = function(id) {

    const index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1);
  };

  return {
    items: items,
    hideCheckedItems: hideCheckedItems,
    searchTerm: searchTerm,
    findById: findById,
    addItem : addItem,
    findAndToggleChecked: findAndToggleChecked,
    findAndUpdateName: findAndUpdateName,
    findAndDelete  : findAndDelete
  };
}() );