requirejs.config({
    baseUrl: 'js',
    paths: {
        pixi: '../bower_components/pixi/bin/pixi'
    }
});

navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate || function(){};

require(["game/Game", 
    "pixi"], 
function(Game, PIXI) {
    var root = new PIXI.Container(0x6699FF);

    var pixiRenderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
    document.body.appendChild(pixiRenderer.view);

    var game = new Game(root, pixiRenderer);

    var lastTime = Date.now();

    requestAnimationFrame( animate );

    var delta = 0;

    function animate() {

        var now = Date.now();

        delta = (now - lastTime)/1000;
        delta = Math.min(delta,0.33);

        requestAnimationFrame( animate );

        game.update(delta);
        game.render();

        // render the stage
        pixiRenderer.render(root);

        lastTime = now;
    }
});