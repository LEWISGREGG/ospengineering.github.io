activateMenu = function (menuId) {
  if (menuId != 'context')
    $("#form" + menuId).toggleClass('shownitem');
  else
    $('#contextMenu').toggleClass('shownitem');
}
