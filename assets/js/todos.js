// Check off Specific Todos By Clicking

$("ul").on("click", "li", function () {
  // if li is grey, turn it black
  //   if ($(this).css("color") === "rgb(128, 128, 128)") {
  //     $(this).css({
  //       color: "black",
  //       textDecoration: "none",
  //     });
  //   } // else turn it grey
  //   else {
  //     $(this).css({ color: "grey", textDecoration: "line-through" });
  //   }
  //  WAY EASYER
  $(this).toggleClass("completed");
});

// Click on X to delete Todo

$("ul").on("click", "span", function (event) {
  event.stopPropagation();
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
});

$("input[type='text']").keypress(function (e) {
  if (e.which === 13) {
    // Grabbing new todo text from input
    let todoText = $(this).val();
    // Create a new li and add the value to it
    // Add the span
    $("ul").append(
      "<li><span><i class='fa fa-trash-alt'></i></span>" + todoText + "</li>"
    );
    // Delete what's in the input
    $(this).val("");
  }
});

$("i").click(function () {
  $("input[type='text']").fadeToggle();
});
