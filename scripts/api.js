/* global $ */

'use strict';

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/hiram-marina';

  const getItems = function(callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
  };

  const createItem = function (name, callback, errCallback){
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'post',
      contentType: 'application/json',
      data: JSON.stringify({name : name}),
      success: callback,
      error: errCallback,
    });
  };

  const updateItem = function(id, updateData, callback, errCallback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback,
      error: errCallback,
    });
  };

  const deleteItem = function(id, callback, errCallback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'DELETE',
      success: callback,
      error: errCallback,
    });
  };

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem,
  };
}());