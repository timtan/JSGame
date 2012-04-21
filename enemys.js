
function Enemy(context, rect, character, font, fontColor){
    var self = this;
    self.context = context;
    self.rect = rect;
    self.character = character;
    self.font = font;
    self.fontColor = fontColor;
    self.draw = function(){
        self.context.save();
        self.context.translate(self.rect.x, self.rect.y);
        self.context.font = self.font;
        self.context.fillStyle = self.fontColor;
        self.context.fillText(self.character, 0, 0);
        self.context.restore();
    }
    self.setFont = function(font){
        self.font = font;
    }
    self.setHero = function(hero){
        self.hero = hero;
    }
    self.update = function(){
        if(self.hero){
            var _x_diff = self.hero.rect.x - self.rect.x ;
            var _y_diff = self.hero.rect.y - self.rect.y ;

            self.rect.x += Math.abs(_x_diff)/2 > 1 ? _x_diff/Math.abs(_x_diff)*1 :_x_diff%1;
            self.rect.y += Math.abs(_y_diff)/2 > 1 ? _y_diff/Math.abs(_y_diff)*1 :_y_diff%1;
        }
    }
    return self;
}