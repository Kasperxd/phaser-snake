var Load = {
    preload: function() {
      var loadingLabel = game.add.text(game.world.centerX, 150, 'Loading!', { font: '28px Sans Comic', fill: '#ffffff' });
      loadingLabel.anchor.setTo(0.5, 0,5);
      
      var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
      progressBar.anchor.setTo(0.5, 0.5);
      game.load.setPreloadSprite(progressBar);
      

  
    game.load.audio('hit', './assets/sounds/gameOver.mp3?', './assets/sounds/gameOver.ogg?' + Date.now());
    },
    
    create: function() {
        game.stage.backgroundColor = '#061ffff';
        console.log("foobar");
        
      game.state.start('Menu');
      if (!game.device.desktop) {

        this.addMobileInputs();
    }
    }
  };