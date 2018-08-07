// IIFE - Immediately Invoked Function Expression
(function () {
    // Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    var clickMeButton;
    function Init() {
        console.log("Initialization Started...");
        Start();
    }
    function Start() {
        console.log("Starting Application...");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); //turn this on buttons
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        // helloLabel.rotation -= 5;
        stage.update(); // redraws the stage
    }
    function clickMeButtonMouseOver() {
        clickMeButton.alpha = 0.7;
    }
    function clickMeButtonMouseOut() {
        clickMeButton.alpha = 1.0;
    }
    function clickMeButtonMouseClick() {
        helloLabel.text = "Clicked";
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    }
    function Main() {
        console.log("Game Started...");
        helloLabel = new objects.Label("Hello Bye, World!", "40px", "Consolas", "#000000", 320, 240, true);
        stage.addChild(helloLabel);
        clickMeButton = new createjs.Bitmap("/Assets/images/click-me-button.png");
        clickMeButton.regX = clickMeButton.getBounds().width * 0.5;
        clickMeButton.regY = clickMeButton.getBounds().height * 0.5;
        clickMeButton.x = 320;
        clickMeButton.y = 400;
        stage.addChild(clickMeButton);
        clickMeButton.on("mouseover", clickMeButtonMouseOver);
        clickMeButton.on("mouseover", clickMeButtonMouseOut);
        clickMeButton.on("mouseover", clickMeButtonMouseClick);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map