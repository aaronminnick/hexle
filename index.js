import Color from './color.js';

$.ready(() => {
  const testColor = new Color();
  $('#testcolor').append(`<h2>${testColor.hex}</h2>`);

  $('#testform').on('submit', (event) =>{
    event.preventDefault();
    let redinput = $('#redinput').val();
    let greeninput = $('#redinput').val();
    let blueinput = $('#redinput').val();
    let checkString = (redinput + greeninput + blueinput == testColor.hex) ? 
      'Correct!' : 'Wrong!';
    alert(checkString);
  });
});
