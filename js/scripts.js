$(document).ready(function(){
  $("form#info").submit(function(event){

    var house = $("input#house").val();
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var weather = $("select#weather").val();
    var weapon = $("select#weapon").val();

    if (!age){
      alert("Please fill out all the forms!");
      return;
    }

    if (gender === 'male'){
      if (age < 30){
        $(".celebrity").text("Margot Robbie");
        $("#match").show();
      }else if (30 <= age && age <=50) {
        $(".celebrity").text("Scarlet Johansson");
        $("#match").show();
      } else if (age > 50){
        $(".celebrity").text("Meryl Streep");
        $("#match").show();
      }

    } else {
        if (age < 30) {
          $(".celebrity").text("Justin Beiber");
          $("#match").show();
        } else if (30 <= age && age <=50) {
          $(".celebrity").text("Justin Timberlake");
          $("#match").show();
        } else if (age > 50){
          $(".celebrity").text("George Clooney");
          $("#match").show();
        }
    }
    event.preventDefault();
  });
});
