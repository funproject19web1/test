$(function() {
  $('.btn-gNav').on("click", function() {

    $(this).toggleClass('open');
    $('#gNav').toggleClass('open');
  });

});

// メニューをクリックされたら、非表示にする
$(function() {
  $('.gNav-menu li a').on("click", function() {
    $('#gNav').removeClass('open');
  });
});

$(function() {
  $('#gNav .gNav-menu li a').on("click", function() {
    $(this).toggleClass('open');
    $('#gNav').toggleClass('open');
    $('#hamburger .btn-gNav.open').toggleClass('open');
  });
});

$(function() {
  $('.gNav-menu').on("click", function() {
    $('#gNav').removeClass('open');
  });
});
