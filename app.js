var $home = $('#home');
var $installPhaser = $('#install-phaser');
var $loadingSprites = $('#loading-sprites');
var $anchorPoints = $('#anchor-points');
var $scaling = $('#scaling');
var $rotating = $('#rotating');
var $screenScaling = $('#screen-scaling');
var $switchingItems = $('#switching-items');
var $addingSound = $('#adding-sound');

var navArray = [$home, $installPhaser, $loadingSprites, $anchorPoints, $scaling, $rotating, $screenScaling, $switchingItems, $addingSound]

$installPhaser.hide();
$loadingSprites.hide();
$anchorPoints.hide();
$scaling.hide();
$rotating.hide();
$screenScaling.hide();
$switchingItems.hide();
$addingSound.hide();


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
// document.getElementById('rotating-button').addEventListener('click', function(){
//   navSwitch($rotating);
// });
document.getElementById('screen-scaling-button').addEventListener('click', function(){
  navSwitch($screenScaling);
});
document.getElementById('switching-items-button').addEventListener('click', function(){
  navSwitch($switchingItems);
});
document.getElementById('adding-sound-button').addEventListener('click', function(){
  navSwitch($addingSound);
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
