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
        
        var size = 32;
        
        for(var y = 0; y<=window.innerHeight;y+=size)
        {
            for(var x=0; x<=window.innerWidth; x+=size)
            {
                var sprite = new PIXI.Sprite(texture);        
                sprite.pivot.set(size/2,size/2);
                
                sprite.position.x = x + size/4;
                sprite.position.y = y + size/4;
                sprite.tint = Math.random() * 0xffffff;
                sprite.scale.set(0.95,0.95);
                sprite.alpha = 0.9 + 0.1 * Math.random();
                
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
            
            var xResult = Math.sin(this.totalElapsed / 2 + xFactor) * 0.5 + 0.5;
            var timeFactor = Math.sin(this.totalElapsed);
            
            var blueFuzz = Math.random()*0.30 * yFactor + 0.5;
            
            sprite.tint = this.toHex(xResult, yFactor, 0.5);
            
            if(Math.random()<0.008)
                sprite.alpha = 0.9 + 0.1 * Math.random();
                
            /*var scale = Math.sin(this.totalElapsed * 0.005 + xFactor * 1.0)*0.1 + 0.85;
            sprite.scale.x = scale;
            sprite.scale.y = scale;*/

        }, this)
    };
    
    Game.prototype.render = function()
    {
        
    };
    
    
    Game.prototype.toHex = function(r,g,b)
    {
        var red = Math.floor(255*r);
        var green = Math.floor(255*g);
        var blue = Math.floor(255*b);
        
        return ((red << 16) + (green << 8) + blue);
    }
    
    
    
    return Game;
});