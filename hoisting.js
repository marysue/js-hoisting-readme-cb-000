function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  var lyric = "maybe";  //must set lyric before returning it.
  return lyric;
}


function crazy() {
  var thisIsCrazy = function (){
    console.log("hey!!!")
  }

  // fix the code in here:
  //this call to the function must follow the assignment.
  //despite the var declaration being hoisted (var thisIsCrazy())
  //the assignment is not hoisted.  So calling thisIsCrazy(); before
  //it is assigned won't work
  thisIsCrazy();
}

function sayMyName() {
  // fix the code in here:
  var name = "Cricky";

  function sayMy() {
    var name = "Kristin";
    console.log(name);
  }

  sayMy();
}
