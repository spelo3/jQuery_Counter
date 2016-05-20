$(document).ready(function(){

  function newCounter() {
    var counter = 0;
    return {
      more: function(){
        counter += 1;
        return counter;
      },
      less: function() {
        if (counter > 0) {
          counter--;
        }
        return counter;
      },
      reset: function() {
        counter = 0;
        return counter;
      }
    }
  }

  var addCounter = 1;
  function addRow() {
    var incButtonId = "inc_btn" + addCounter;
    var decButtonId = "dec_btn" + addCounter;
    var resButtonId = "res_btn" + addCounter;
    var delButtonId = "del_btn" + addCounter;
    var s = "<div class='row'><div class='col-md-12'>";
    s += "<button id='" + incButtonId + "'>+</button>";
    s += "<label id='" + "counter" + addCounter + "'>0</label>";
    s += "<button id='" + decButtonId + "'>-</button>";
    s += "<button id='" + resButtonId + "'>Reset</button>";
    s += "<button id='" + delButtonId + "'>Delete</button>";
    s += "</div></div>";
    $("#container2").append(s);

    var cnt = newCounter();
    var result = $("#counter" + addCounter);
    $("#"+incButtonId).click(function() {
      result.html(cnt.more());
    });

    $("#"+decButtonId).click(function() {
      result.html(cnt.less());
    });

    $("#"+resButtonId).click(function() {
      result.html(cnt.reset());
    });

    $("#"+delButtonId).click(function() {
      $("#"+delButtonId).parent().parent().remove();
    });

    addCounter++;
  }

  var cnt = newCounter();
  var result = $("#counter" + 0);
  $('#inc_btn0').click(function() {
    result.html(cnt.more());
  });

  $('#dec_btn0').click(function() {
    result.html(cnt.less());
  });

  $('#res_btn0').click(function() {
    result.html(cnt.reset());
  });

  $('#del_btn0').click(function(){
    $('#del_btn0').parent().parent().remove();
  });

  $('#add_btn').click(function() {
    addRow();
  });



});
