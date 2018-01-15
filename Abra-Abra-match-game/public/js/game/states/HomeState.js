var HomeState = {
  init: function (message) {
    this.message = 'Classic Memory Match';
  },

  create: function () {
    // this.state.start('GameState');
    
    var spriteCreation = function (spriteAttributes, sprite) {
      //sprite position
      if (!spriteAttributes.position) {
        spriteAttributes.position = {};
      }
      if (!spriteAttributes.position.x) {
        spriteAttributes.position.x = 0;
      }
      if (!spriteAttributes.position.y) {
        spriteAttributes.position.y = 0;
      }
      //sprite anchor
      if (!spriteAttributes.anchor) {
        spriteAttributes.anchor = {};
     }
      if (!spriteAttributes.anchor.x) {
        spriteAttributes.anchor.x = 0;
      }
      if (!spriteAttributes.anchor.y) {
        spriteAttributes.anchor.y = 0;
      }
      //sprite scale
      if (!spriteAttributes.scale) {
        spriteAttributes.scale = {};
     }
      if (!spriteAttributes.scale.x) {
        spriteAttributes.scale.x = 1;

      }
      if (!spriteAttributes.scale.y) {
        spriteAttributes.scale.y = 1;
      } 
      //sprite pivoting
      if (!spriteAttributes.pivot) {
        spriteAttributes.pivot = {};
     }
      if (!spriteAttributes.pivot.x) {
        spriteAttributes.pivot.x = 0;

      }
      if (!spriteAttributes.pivot.y) {
        spriteAttributes.pivot.y = 0;
      }
      //sprite rotation
      if (!spriteAttributes.rotation) {
        spriteAttributes.rotation = {};
     }
      if (!spriteAttributes.rotation.x) {
        spriteAttributes.rotation.x = 0;

      }
      if (!spriteAttributes.rotation.y) {
        spriteAttributes.rotation.y = 0;
      }
      //sprite angle
      if (!spriteAttributes.angle) {
        spriteAttributes.angle = {};
     }
      if (!spriteAttributes.angle.x) {
        spriteAttributes.angle.x = 0;

      }
      if (!spriteAttributes.angle.y) {
        spriteAttributes.angle.y = 0;
      }
      //sprite child
      if (spriteAttributes.parent) {
        game[spriteAttributes.parent].addChild(game.make.sprite(spriteAttributes.position.x, spriteAttributes.position.y, sprite));
      } else {
        game[sprite] = game.add.sprite(spriteAttributes.position.x, spriteAttributes.position.y, sprite);
      }
      game[sprite].anchor.x = spriteAttributes.anchor.x;
      game[sprite].anchor.y = spriteAttributes.anchor.y;
      game[sprite].scale.x = spriteAttributes.scale.x;
      game[sprite].scale.y = spriteAttributes.scale.y;
      game[sprite].pivot.x = spriteAttributes.pivot.x;
      game[sprite].pivot.y = spriteAttributes.pivot.y;
      game[sprite].rotation.x = spriteAttributes.rotation.x;
      game[sprite].rotation.y = spriteAttributes.rotation.y;
      game[sprite].angle.x = spriteAttributes.angle.x;
      game[sprite].angle.y = spriteAttributes.angle.y;
    }

    

    var spriteAttributes = {
      
      // scale: {
      //   x:0.4,
      //   y:0.4
      // },
      // position:{
      //   x:game.world.centerX,
        
      //   y:game.world.centerY
      // }
      



    }
    // console.log(game.world.centerX)
    // var x = 100
    // for (var i = 0; i < 4; i++) {
    //   console.log('test')
    //  if (i == 0) {
    //   spriteCreation(spriteAttributes, 'Menu-Title');
    //  }else{
       var spriteAttributes2 = {
      // parent: 'Menu-Title',
      
      // scale: {
      //   x:0.4,
      //   y:0.4
      // },
      // position:{
      //   x: x,
        
      // }
      
    

    }
      spriteCreation(spriteAttributes, 'Menu-Title');
    // x = x + 100
    }
  
     
    //eval("(" + this.game.phaserConfig.assets.abraCommands.abraSprite.create + ")")(spriteAttributes, 'Menu-Title');
  }
