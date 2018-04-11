/* global $ shoppingList, store, Item, api */
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  api.getItems((items)=> {
    items.forEach((item)=> store.addItem(item));
    shoppingList.render();
  });
});