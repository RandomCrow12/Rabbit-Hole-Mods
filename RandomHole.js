(function (Scratch) {
  "use strict";

  document.RandomHole = true;
  document.addEventListener("keypress", (event) => {
    if (event.key === "`" && Scratch.vm.vars.get("IsPlaying?") === "1") {
      if (document.RandomHole) {
        document.RandomHole = false;
        Scratch.vm.broadcast("transition");
        // timeout 0.8 seconds
        setTimeout(() => {


          /*
          your health is lowered to 1*c1a* you cannot jump anymore*c1b* you cannot roll anymore*c1c* you cannot do melee attacks anymore*c1d*
           your speed is halved*c1e* your weapons are randomized every room*c1f* enemies do double damage*c1g* enemies have more health*c1h* 
           shop prices are doubled on the next floors*c1i* all guns you pick up will explode*c1j* your max health is halved*c1k* gun ammo is halved*c1l* 
           you lose all your coins*c1m* you will explode at a random moment*c1n* all enemies are now invisible*c1o* your healthbar is invisible*c1p* 
           you get less coins from enemies*c1q* you might die instantly*c1r* you cannot see the map anymore*c1s* i double the size of floors from now on*c1t* 
           you cannot move left anymore*c1u* i summon the wrath of god*c1v*
          */
        
          const list = Scratch.vm.runtime.getTargetForStage().lookupVariableByNameAndType("BLURSES_TemporaryBlurses", "list");

          if (list) {
            list.value.push("c1f");  // random weapons deal    c1f   
          }
          

          setTimeout(() => {
            document.RandomHole = true;
          }, 3000);
        }, 800);
      }
    }
  });

  class RandomHole {
    getInfo() {
      return {
        id: "RandomHole",
        name: "RandomHole",
        blocks: [],
        menus: {},
      };
    }
  }

  Scratch.extensions.register(new RandomHole());
})(Scratch);
