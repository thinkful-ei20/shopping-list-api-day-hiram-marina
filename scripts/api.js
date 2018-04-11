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
  return {
    getItems, createItem
  };
}());