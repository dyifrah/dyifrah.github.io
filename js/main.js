$(function() {

  $('#dialog').hide();
  $('#section3').click(dialogBox);

  function dialogBox {
    $('#dialog').dialog();
  }

});