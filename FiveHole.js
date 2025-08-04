(function (Scratch) {
  "use strict";

  document.FiveHole = true;
  document.addEventListener("keypress", (event) => {
    if (event.key === "`" && Scratch.vm.vars.get("IsPlaying?") === "1") {
      if (document.FiveHole) {
        document.FiveHole = false;
        Scratch.vm.broadcast("transition");
        // timeout 0.8 seconds
        setTimeout(() => {



          Scratch.vm.broadcast("DEALER_5randomGuns");
          

          setTimeout(() => {
            document.FiveHole = true;
          }, 3000);
        }, 800);
      }
    }
  });

  class FiveHole {
    getInfo() {
      return {
        id: "FiveHole",
        name: "FiveHole",
        blocks: [],
        menus: {},
      };
    }
  }

  Scratch.extensions.register(new FiveHole());
})(Scratch);
