var headers = ["H1", "H2", "H3", "H4", "H5", "H6"];
$(".accord").click(function (e) {
  var target = e.target,
    name = target.nodeName.toUpperCase();
  if ($.inArray(name, headers) > -1) {
    var subItem = $(target).next();
    var depth = $(subItem).parents().length;
    var allAtDepth = $(".accord p, .accord div").filter(function () {
      if ($(this).parents().length >= depth && this !== subItem.get(0)) {
        return true;
      }
    });
    $(allAtDepth).slideUp("fast");
    subItem.slideToggle("fast", function () {
      $(".accord :visible:last").css("border-radius", "0 0 10px 10px");
    });
    $(target).css({ "border-bottom-right-radius": "0", "border-bottom-left-radius": "0" });
  }
}); 
