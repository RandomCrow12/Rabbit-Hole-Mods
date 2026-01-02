(function (Scratch) {
  "use strict";

  document.CustomDealer = true;
  document.addEventListener("keypress", (event) => {
    // key to use below, replace with whichever key you would like
    if (event.key === "`" && Scratch.vm.vars.get("IsPlaying?") === "1") {
      if (document.CustomDealer) {
        document.CustomDealer = false;
        Scratch.vm.broadcast("transition");
        // timeout 0.8 seconds
        setTimeout(() => {

        
          const list = Scratch.vm.runtime.getTargetForStage().lookupVariableByNameAndType("BLURSES_TemporaryBlurses", "list");

          if (list) { 
            // uncomment whichever blessings you want to apply
            // list.value.push("b1a");  // full heal    b1a   
            // list.value.push("b1b");  // double jump    b1b   
            // list.value.push("b1c");  // 99 coins    b1c   
            // list.value.push("b1d");  // increase damage    b1d   
            // list.value.push("b1e");  // run faster    b1e   
            // list.value.push("b1f");  // jump higher    b1f   
            // list.value.push("b1g");  // reload faster    b1g   
            // list.value.push("b1h");  // double ammo    b1h   
            // list.value.push("b1i");  // increase melee damage    b1i   
            // list.value.push("b1j");  // lower health of all enemies    b1j   
            // list.value.push("b1k");  // sunglasses    b1k   
            // list.value.push("b1l");  // health increase    b1l   
            // list.value.push("b1m");  // enemies drop more coins    b1m   
            // list.value.push("b1n");  // lower shop prices    b1n
            // list.value.push("b1o");  // smaller floors    b1o
            // list.value.push("b1p");  // second life    b1p
            // list.value.push("b1q");  // 5 random guns    b1q
            // list.value.push("b1r");  // increase melee knockback    b1r
            // list.value.push("b1s");  // chests drop 2 guns    b1s   
            // list.value.push("b1t");  // double gun damage    b1t
            // list.value.push("b1u");  // upgrade guns    b1u
            
            
            // uncomment whichever curses you want to apply
            // list.value.push("c1a");  // health lowered to 1    c1a   
            // list.value.push("c1b");  // no jumping    c1b   
            // list.value.push("c1c");  // no rolling    c1c   
            // list.value.push("c1d");  // no melee attacks    c1d   
            // list.value.push("c1e");  // speed is halved    c1e   
            // list.value.push("c1f");  // random weapons every room    c1f   
            // list.value.push("c1g");  // enemies double damage    c1g 
            // list.value.push("c1h");  // enemies more health    c1h 
            // list.value.push("c1i");  // shop prices doubled    c1i 
            // list.value.push("c1j");  // all guns explode    c1j 
            // list.value.push("c1k");  // max health is halved    c1k 
            // list.value.push("c1l");  // gun ammo halved    c1l 
            // list.value.push("c1m");  // lose all coins    c1m 
            // list.value.push("c1n");  // explode at random moment    c1n 
            // list.value.push("c1o");  // enemies invisible    c1o 
            // list.value.push("c1p");  // health bar invisible    c1p 
            // list.value.push("c1q");  // less coins from enemies    c1q 
            // list.value.push("c1r");  // might die instantly    c1r 
            // list.value.push("c1s");  // can't see map anymore    c1s 
            // list.value.push("c1t");  // double size of floors    c1t 
            // list.value.push("c1u");  // can't move left    c1u 
            // list.value.push("c1v");  // summon wrath of god    c1v 
        }

         // Alternate method of applying some blessings
          //Scratch.vm.broadcast("DEALER_5randomGuns"); // 5 Random Guns
          
          

          setTimeout(() => {
            document.CustomDealer = true;
          }, 3000);
        }, 800);
      }
    }
  });

  class CustomDealer {
    getInfo() {
      return {
        id: "CustomDealer",
        name: "CustomDealer",
        blocks: [],
        menus: {},
      };
    }
  }

  Scratch.extensions.register(new CustomDealer());
})(Scratch);
