
var Menu = {

preload: function() {

game.load.image('menu2', './assets/images/menu1.png');
},

create : function() {
    this.add.button(0,0, 'menu2', this.startGame, this);
},

startGame: function() {
    this.state.start('Game');
}
};