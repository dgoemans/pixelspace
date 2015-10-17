define(["pixi"], 
function(PIXI)
{
    function Game(root)
    {
        this.totalElapsed = 0;
        this.container = new PIXI.Container();
        root.addChild(this.container);
        this.sprites = [];
        var texture = PIXI.Texture.fromImage('/assets/white_32.png');
        
        for(var y = 0; y<=window.innerHeight;y+=32)
        {
            for(var x=0; x<=window.innerWidth; x+=32)
            {
                var sprite = new PIXI.Sprite(texture);        
                sprite.position.x = x;
                sprite.position.y = y;
                sprite.tint = Math.random() * 0xffffff;
                this.sprites.push(sprite);
                this.container.addChild(sprite);
            }
        }
        
    };
    
    Game.prototype.update = function(delta)
    {
        this.totalElapsed += delta;
        
        this.sprites.forEach(function(sprite){
            var xFactor = sprite.position.x/window.innerWidth;
            var yFactor = sprite.position.y/window.innerHeight;
            var timeFactor = 1.0;// 0.5 + Math.sin(this.totalElapsed / 1000) * 0.5;
            
            sprite.tint = 0xff0000 * xFactor * timeFactor + 0x00ff00 * yFactor + 0x0000ff * timeFactor;
            
        }, this)
    };
    
    Game.prototype.render = function()
    {
        
    };
    
    
    Game.prototype.toRGB = function(val)
    {
        
    }
    
    
    
    return Game;
});