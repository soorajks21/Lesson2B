// IIFE - Immediately Invoked Function Expression
(function(){

  // Game Variables
  let canvas = document.getElementById("canvas");
  let stage:createjs.Stage;
  let helloLabel: objects.Label;
  let clickMeButton: createjs.Bitmap;

  function Init():void {
    console.log("Initialization Started...");

    Start();
  }

  function Start():void {
    console.log("Starting Application...")

    stage = new createjs.Stage(canvas);
    createjs.Ticker.framerate = 60; // 60 FPS
    createjs.Ticker.on("tick", Update);
    Main();
  }

  function Update():void {
   // helloLabel.rotation -= 5;
    stage.update(); // redraws the stage
  }

  function Main():void {
    console.log("Game Started...");

    helloLabel = new objects.Label("Hello Bye, World!", "40px", "Consolas", "#000000",320,240,true);
   

    stage.addChild(helloLabel);

    clickMeButton = new createjs.Bitmap("/Assets/images/click-me-button.png");
    clickMeButton.regX = clickMeButton.getBounds().width * 0.5;
    clickMeButton.regY = clickMeButton.getBounds().height * 0.5;

    clickMeButton.x = 320;
    clickMeButton.y = 340;
    stage.addChild(clickMeButton);
  }

  window.onload = Init;

})();
