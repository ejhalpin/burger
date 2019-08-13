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
    location.reload();
  });
});

$(document).on("click", ".close", function() {
  var state = $(this).attr("data-state");
  var id = $(this).attr("data-id");
  var idObj = { id: id };
  var delObj = { deleted: false };
  if (!parseInt(state)) {
    delObj.deleted = true;
  }
  $.ajax("/api/flag/", {
    type: "PUT",
    data: { data: [delObj, idObj] }
  }).then(function() {
    //reload the page to get the change - not a great way to go about this.
    location.reload();
  });
});
