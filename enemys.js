
function Enemy(context, rect, character, font, fontColor){
    var self = this;
    self.context = context;
    self.rect = rect;
    self.character = character;
    self.font = font;
    self.fontColor = fontColor;
    self.status = tm.status.alive;
    self.angel = 0;
    self.aliveDraw = function(){
        self.context.save();
        self.context.translate(self.rect.x, self.rect.y);
        self.context.font = self.font;
        self.context.fillStyle = self.fontColor;
        self.context.fillText(self.character, 0, 0);
        self.context.restore();
    }
    self.draw = function()
    {
        if (self.status == tm.status.alive) {
            self.aliveDraw();
        }

        if (self.status == tm.status.bump) {
            self.bumpDraw();
        }
        if (self.status == tm.status.die) {


        }

    }
    self.bumpDraw = function(){
        self.context.save();

        //
        self.context.translate(self.rect.x, self.rect.y);  // move far away

        self.context.rotate(self.angel* Math.PI/180);  // rotate
        self.context.translate(-0.5 * self.rect.width, -0.5 * self.rect.height); //Move To Center
        self.context.font = self.font;
        self.context.fillStyle = "#CCC";
        self.context.fillText("啊～", 0, 0);
        self.context.restore();
    }
    self.setFont = function(font){
        self.font = font;
    }
    self.setHero = function(hero){
        self.hero = hero;
    }
    self.update = function(){
        if(!self.hero){}
        if (self.status == tm.status.alive) {
            var _x_diff = self.hero.rect.x - self.rect.x ;
            var _y_diff = self.hero.rect.y - self.rect.y ;

            self.rect.x += Math.abs(_x_diff)/2 > 1 ? _x_diff/Math.abs(_x_diff)*1 :_x_diff%1;
            self.rect.y += Math.abs(_y_diff)/2 > 1 ? _y_diff/Math.abs(_y_diff)*1 :_y_diff%1;
        }
       if(self.status == tm.status.bump){
           self.angel +=10;
           console.log(self.angel);
           if( self.angel > 360 ){
               self.status = tm.status.die;

           }

       }



    }
    return self;
}
