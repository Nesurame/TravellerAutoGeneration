$(document).ready(function() {
  let size = 20;
  let makeGrid = function(width,height) {

    for (let i = 0; i < height * 2; i++) {
      let row = $('<div class="row">');
      $('body').append(row);
      for (let j = 0; j < width / 2; j++) {
        row.append('<div class="hex">');
      }
    }
  }

  makeGrid(8,10);
})