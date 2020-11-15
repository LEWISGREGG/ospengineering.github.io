activateMenu = function (menuId) {
  if (menuId != 'context')
    $("#flip" + menuId).toggleClass('card-back');
  else
    $('#contextMenu').toggleClass('card-back');

}


