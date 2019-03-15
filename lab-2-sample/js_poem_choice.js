// Simulation Variables
/////////////////////
// Config
var shouldDebug = true;
var PoemA = new Poem(
  "'Sure! Please help me.'",
  "Anonymous",
  [
    "So you hear the sound of firecrackers? That claims the pre-start of our Spring festival lunch. Although you can see all the food is ready, but now you cannot go on the table yet.",
    "No no no, you still cannot go on the table, we need to let the spirits of our ancestors eat first.",
    "You will see several dishes covered with bowls. Don’t rush to reveal them--It is the privilege of the elderly.",
    "One law you should always keep is that don’t ever put your chopsticks vertically in the rice or across the bowl. It is not appropriate. The former imitates the incense in the pot for sacrifice; and the latter is set when ancestors eat their meals.",
    "When you see people toasting, wait for your round. It normally goes with the order from the senior to the youngest. Don’t stand up and give toast anytime you want."
  ]
);
var PoemB = new Poem(
  "'Nah, I’m good, I want to see what happens myself.'",
  "Anonymous",
  [
    "Wow here goes the sound of firecrackers, I love the festive vibes in the air, OMG all the smell of the food, I can’t wait for the lunch. Wait, why am I the only one on the table? Oh shoot, her father is waving at me, what did I do wrong?",
    "What are we waiting for now? The dishes look more than ready to serve, the chopsticks and bowls are in place too, but everyone is waiting. Oh my girlfriend tells me that the spirits of the ancestors are eating right now.",
    "What? Are they playing treasure hunting game for on the dinner table? Why are those dishes covered by bowls? Why so mysterious? Will the first one reveal the cover be rewarded?",
    "Chopsticks, the enemy of all the westerners, but the food looks so good! Can I start now? I pick up my chopsticks. Why the look, she gives me the look! THE LOOK she gives me only when I don’t reply to her messages after 3 hours. Emmm, alright. I will just put my chopsticks down. Why THE LOOK again? So putting chopsticks on the bowl is not appropriate?",
    "Oh, finally I felt like I have survived all the catastrophes.Woo, alcohol! I really need it! Like more than ever! Can I have a sip? Just a little bit? Wait, why are uncle and auntie standing up? Are they giving a toast? Should I follow them?"
  ]
);

// State
var timeStep = 0;
var chosenPoem;

// Bookkeeping
var initialized = false;
var simState;


// Starting Function
/////////////////////
$(document).ready(function() {
  simState = new StateMachine();
  simState.Start(); 
  
  $("#bttn").click(function() {
    simState.Update();
  });  
});

// State Machine ////
///////////////////////////////////////////////
var StateMachine = function(){
  this.states = { // Add/Remove States Here
    "Init" : new Init(this),
    "Line1" : new Line1(this),
    "Line2" : new Line2(this),
    "Line3" : new Line3(this),
    "Line4" : new Line4(this),
    "Line5" : new Line5(this)
  };
  this.currentState = this.states["Init"];
  var nextState;

  // Largely don't mess with this section
  this.Start = function () {
    this.currentState.Enter();
    if (shouldDebug) this.Debug();
  };
  this.Update = function () {
    this.currentState.Update(function() {
      this.Transition();
    }.bind(this));
    if (shouldDebug) this.Debug();
  };
  this.Change = function (state) {
    nextState = state;
  };
  this.Transition = function() {
    if (nextState !== undefined) {    
      this.currentState.Exit();
      this.currentState = nextState;
      nextState = undefined;
      this.currentState.Enter();
    }
  }
  // Down to here
  this.Debug = function () { // Edit this function with important variables from your code
    console.log("-------------------------");
    console.log("timeStep = " + timeStep);
    console.log("----------------");
    console.log("State = " + this.currentState.name);
    console.log("----------------");
  };
};

var Init = function (machine) {
  this.name = this.constructor.name;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    $("#pick").show();
    $("#input").hide();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    fsm.Change(fsm.states["Line1"]);

    if (callback !== undefined) callback();
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");
    $("#pick").hide();
    $("#input").show();
    
    if (callback !== undefined) callback();
  };
};


var Line1 = function (machine) {
  this.name = this.constructor.name;
  this.line = 0;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenPoem.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      fsm.Change(fsm.states["Line2"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};


var Line2 = function (machine) {
  this.name = this.constructor.name;
  this.line = 1;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenPoem.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      fsm.Change(fsm.states["Line3"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};


var Line3 = function (machine) {
  this.name = this.constructor.name;
  this.line = 2;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenPoem.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      fsm.Change(fsm.states["Line4"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};


var Line4 = function (machine) {
  this.name = this.constructor.name;
  this.line = 3;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenPoem.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      fsm.Change(fsm.states["Line5"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};


var Line5 = function (machine) {
  this.name = this.constructor.name;
  this.line = 4;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenPoem.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      ClearByID("#target");
      fsm.Change(fsm.states["Init"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};
// Helpers /////////
///////////////////////////////////////////////
// I put misc functions that are used in many different places in a group I just called Helper
function PickPoem(choice) {
  chosenPoem = choice;
  simState.Update();
}

// Data /////////
///////////////////////////////////////////////
// It's useful to treat user input in some standardized way. This function works as data storage object for user actions
// Edit this structure with whatever actions you want to happen
function Poem(name, author, lines) {
  this.name = name;
  this.author = author;
  this.lines = lines;
}
// Draw /////////////
///////////////////////////////////////////////
function ClearByID(id) {
  $(id).html($([]));
}
function FadeByID(id, state) {
  if (state) {
    $(id).fadeIn();
  } else {
    $(id).fadeOut();
  }
  
}
function DrawInID(id, stateName) {
  $(id).html(
    "<p class='d-inline-block py-1 my-1'>" + stateName + "</p>"
  );
}