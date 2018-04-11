/* global $ */

'use strict';

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/hiram-marina';

  const getItems = function(callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
  };

  const createItem = function (name, callback){
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'post',
      contentType: 'application/json',
      data: JSON.stringify({name : name}),
      success: callback
    });
  };

  const updateItem = function(id, updateData, callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback,
    });
  }

  return {
    getItems,
    createItem,
    updateItem,
  };
}());