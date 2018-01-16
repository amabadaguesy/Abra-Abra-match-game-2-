var HomeState = {
  init: function (message) {
    this.message = 'Classic Memory Match';
  },

  create: function () {
    // this.state.start('GameState');
 
   

  var spriteAttributes = { sprite1: { position: { y:0 } }, sprite2: { position: { x: 50 } } };

    for (var key in Object.keys(spriteAttributes)) {
      spriteName = Object.keys(spriteAttributes)[key]; 
            console.log(spriteAttributes[spriteName].position.y)
            
            var spriteCreation = function (spriteAttributes, sprite) {
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
            
            game[sprite].position.x = spriteAttributes.position.x;
      game[sprite].position.y = spriteAttributes.position.y;
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
           
     
 
    
    

      



    };
    //spriteCreation(spriteAttributes, 'Menu-Title');
    
  }
  
}
    
};   
    

    


    //   spriteCreation(spriteAttributes, 'Menu-Title');
    //  }else{

  

    
  
     
    //eval("(" + this.game.phaserConfig.assets.abraCommands.abraSprite.create + ")")(spriteAttributes, 'Menu-Title');
  
