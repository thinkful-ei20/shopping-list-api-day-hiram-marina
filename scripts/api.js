const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/hiram-marina'

  getItems = function(callback) {
    callback('test')
  }

  return {
    getItems,
  }
}())