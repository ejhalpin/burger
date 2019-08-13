$("#blurb").bind("input propertychange", function(event) {
  var remain = 180 - $("#blurb").val().length;
  $("#numchar").text(remain.toString());
});

$("#submit").on("click", event => {
  event.preventDefault();
  var blurb = $("#blurb").val();
  var name = $("#name").val();
  if (name.length === 0) {
    name = "Anonymous";
  }
  //empty the form
  $("#blurb").val("");
  $("#name").val("");
  var data = {
    entry: blurb,
    author: name,
    deleted: false
  };
  $.post("/api/new", data, response => {
    console.log(response);
  });
});

$(document).on("click", ".close", function() {
  var text = $(this).text();
  var id = $(this).attr("data-id");
  switch (text) {
    case "+":
      //restore the text
      console.log("unmute");
      console.log($("#blurb-" + id).text());
      //put request to the api to change the deleted column to false
      break;
    case "x":
      //mute the text
      console.log("mute");
      console.log($("#blurb-" + id).text());
      //put request to the api to change the deleted column to true
      break;
  }
});
