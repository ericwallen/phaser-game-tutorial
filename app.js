var $home = $('#home');
var $installPhaser = $('#install-phaser');
var $loadingSprites = $('#loading-sprites');
var $anchorPoints = $('#anchor-points');
var $scaling = $('#scaling');
var $flipping = $('#flipping');
var $rotating = $('#rotating');
var $screenScaling = $('#screen-scaling');

var navArray = [$home, $installPhaser, $loadingSprites, $anchorPoints, $scaling, $flipping, $rotating, $screenScaling]

$installPhaser.hide();
$loadingSprites.hide();
$anchorPoints.hide();
$scaling.hide();
$flipping.hide();
$rotating.hide();
$screenScaling.hide();

console.log(navArray);

document.getElementById('home-button').addEventListener('click', function(){
  navSwitch($home);
});
document.getElementById('install-phaser-button').addEventListener('click', function(){
  navSwitch($installPhaser);
});
document.getElementById('loading-sprites-button').addEventListener('click', function(){
  navSwitch($loadingSprites);
});
document.getElementById('anchor-points-button').addEventListener('click', function(){
  navSwitch($anchorPoints);
});
document.getElementById('scaling-button').addEventListener('click', function(){
  navSwitch($scaling);
});
document.getElementById('flipping-button').addEventListener('click', function(){
  navSwitch($flipping);
});
document.getElementById('rotating-button').addEventListener('click', function(){
  navSwitch($rotating);
});
document.getElementById('screen-scaling-button').addEventListener('click', function(){
  navSwitch($screenScaling);
});

function navSwitch (turnOn){
for (var i = 0; i < navArray.length; i++) {
  if (navArray[i] == turnOn){
    turnOn.show();
  }
  else{
    navArray[i].hide();
  }
}
};


// Home Code

// var installServerCode="npm install http-server -g";
// // npm unistall http-server -g
// 
// var pre=document.createElement("pre");
// pre.textContent=installServerCode;
// pre.className="prettyprint";
// $installPhaser.append(pre);
