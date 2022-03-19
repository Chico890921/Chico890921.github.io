$(window).scroll(function (e) {
    if ($(window).scrollTop() <= 0)
  
    $(".explore,.navbar").addClass("at_top");else
  
    $(".explore,.navbar").removeClass("at_top");
  });
  
  function detect_cat(cat_id, x) {
    var catplace = $(cat_id).offset().left + $(cat_id).width() / 2;
    if (Math.abs(x - catplace) < 80)
    $(cat_id).css("bottom", "0px");else
  
    $(cat_id).css("bottom", "-50px");
  }
  
  
  $(window).mousemove(function (evt) {
    var pagex = evt.pageX;
    var pagey = evt.pageY;
  
    var x = pagex - $("#section_about").offset().left;
    var y = pagey - $("#section_about").offset().top;
  
    //console.log(x+","+y)
  
    if (y < 0 || y > $("#section_about").outerHeight())
    $("#cross").css("opacity", 0);else
  
    $("#cross").css("opacity", 1);
  
    $("#cross").css("left", x + "px");
    $("#cross").css("top", y + "px");
  
  
    var catplace = $("#cat").offset().left + $('#cat').width() / 2;
    var cattop = $("#cat").offset().top;
  
    var img_url = "https://awiclass.monoame.com/catpic/";
  
    if (pagex < catplace - 50)
    $("#cat").attr("src", img_url + "cat_left.png");else
    if (pagex > catplace + 50)
    $("#cat").attr("src", img_url + "cat_right.png");else
  
    $("#cat").attr("src", img_url + "cat_top.png");
  
    if (pagex < catplace - 50 && pagey < catplace)
    $("#cat").attr("src", img_url + "cat_lefttop.png");
    if (pagex > catplace + 50 && pagey < catplace)
    $("#cat").attr("src", img_url + "cat_righttop.png");
  });
  