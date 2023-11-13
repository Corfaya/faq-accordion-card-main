var accordion = $(".question");
var paragraph = $(".hidden");

for (var i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    accordion.removeClass("selected");
    paragraph.addClass("hidden");
    this.classList.toggle("selected");
    $(this).find(".hidden").removeClass("hidden").fadeIn();
  });
}
