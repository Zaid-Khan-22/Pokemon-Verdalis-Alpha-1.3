
let t1,t2,t3,t4,t5,t6,t7,t8,i = 0
let temp = 0;
let npctalk = [false,false,false,false,false]
let noOfPokemonLeft = 0
let trainerImg

let pokemon1Img = null,pokemon2Img = null,pokemon3Img = null
,pokemon4Img = null,pokemon5Img = null,pokemon6Img = null
let g1,g2,g3,g4,g5,g6,g7

let runningShoes = false
let menuOpen = false
let enemyPokemonFront, playerPokemonBack;

let playerLocation;
let enemyCreatedTeam = [];
let pokemonBackSprite

let selectedMoveIndex = null;
let enemySelectedMoveIndex = null;
let playerHasChosen = false;
let enemyHasChosen = false;
let battleOptions = "menu";

let catchState = " "

let npc1Talking = [false]
let tempPokemonSprite

let items = [],medicine = [],pokeballs = [],tms = []

let multiplier = 1

function preload(){
    logo = loadImage("logo.jpg");

    upperroom1 = loadImage("map/upr1.png")
    lowerroom1 = loadImage("map/lwr1.png")
    auburntown1 = loadImage("map/auburntown1.png")
    auburntown2 = loadImage("map/auburntown2.png")
    auburntown3 = loadImage("map/auburntown3.png")
    auburntown4 = loadImage("map/auburntown4.png")
    auburntown5 = loadImage("map/auburntown5.png")
    auburntown6 = loadImage("map/auburntown6.png")
    lab = loadImage("map/lab.png")
    route1_1 = loadImage("map/route1-1.png")
    route1_2 = loadImage("map/route1-2.png")
    route1_3 = loadImage("map/route1-3.png")
    route1_4 = loadImage("map/route1-4.png")
    smallhouse = loadImage("map/r1.png")

    pokeballImg = loadImage("pokeball.png")
    pokedexlogo = loadImage("pokedexlogo.png")
  baglogo = loadImage("baglogo.png")
  trainerlogo = loadImage("trainerlogo.png")
  exitlogo = loadImage("exitlogo.png")
    itemslogo = loadImage("itemslogo.png")
  medicinelogo = loadImage("medicinelogo.png")
  pokeballlogo = loadImage("pokeballlogo.png")
  tmslogo = loadImage("tmslogo.png")
    battleTransitionBackround = loadImage("transition.png")
    battleBackround = loadImage("battle.png")

    thorneSprite = loadImage("sprites/thorne.png")
    playerSpriteFront = loadImage("sprites/player.png")

    playerupstand = loadAnimation("overworld/player/up1.png")
    playerdownstand = loadAnimation("overworld/player/down1.png")
    playerleftstand = loadAnimation("overworld/player/left1.png")
    playerrightstand = loadAnimation("overworld/player/right1.png")

    playerupwalk = loadAnimation("overworld/player/up1.png","overworld/player/up2.png",
    "overworld/player/up3.png","overworld/player/up4.png")
    playerdownwalk = loadAnimation("overworld/player/down1.png","overworld/player/down2.png",
    "overworld/player/down3.png","overworld/player/down4.png")
    playerleftwalk = loadAnimation("overworld/player/left1.png","overworld/player/left2.png",
    "overworld/player/left3.png","overworld/player/left4.png")
    playerrightwalk = loadAnimation("overworld/player/right1.png","overworld/player/right2.png",
    "overworld/player/right3.png","overworld/player/right4.png")

    momupstand = loadAnimation("overworld/mom/up1.png")
    momdownstand = loadAnimation("overworld/mom/down1.png")
    momleftstand = loadAnimation("overworld/mom/left1.png")
    momrightstand = loadAnimation("overworld/mom/right1.png")

    momupwalk = loadAnimation("overworld/mom/up1.png","overworld/mom/up2.png",
    "overworld/mom/up3.png","overworld/mom/up4.png")
    momdownwalk = loadAnimation("overworld/mom/down1.png","overworld/mom/down2.png",
    "overworld/mom/down3.png","overworld/mom/down4.png")
    momleftwalk = loadAnimation("overworld/mom/left1.png","overworld/mom/left2.png",
    "overworld/mom/left3.png","overworld/mom/left4.png")
    momrightwalk = loadAnimation("overworld/mom/right1.png","overworld/mom/right2.png",
    "overworld/mom/right3.png","overworld/mom/right4.png")

    thorneupstand = loadAnimation("overworld/thorne/up1.png")
    thornedownstand = loadAnimation("overworld/thorne/down1.png")
    thorneleftstand = loadAnimation("overworld/thorne/left1.png")
    thornerightstand = loadAnimation("overworld/thorne/right1.png")

    thorneupwalk = loadAnimation("overworld/thorne/up1.png","overworld/thorne/up2.png",
    "overworld/thorne/up3.png","overworld/thorne/up4.png")
    thornedownwalk = loadAnimation("overworld/thorne/down1.png","overworld/thorne/down2.png",
    "overworld/thorne/down3.png","overworld/thorne/down4.png")
    thorneleftwalk = loadAnimation("overworld/thorne/left1.png","overworld/thorne/left2.png",
      "overworld/thorne/left3.png","overworld/thorne/left4.png")
    thornerightwalk = loadAnimation("overworld/thorne/right1.png","overworld/thorne/right2.png",
    "overworld/thorne/right3.png","overworld/thorne/right4.png")

    officerupstand = loadAnimation("overworld/officer/up1.png")
    officerdownstand = loadAnimation("overworld/officer/down1.png")
    officerleftstand = loadAnimation("overworld/officer/left1.png")
    officerrightstand = loadAnimation("overworld/officer/right1.png")

    officerupwalk = loadAnimation("overworld/officer/up1.png","overworld/officer/up2.png",
    "overworld/officer/up3.png","overworld/officer/up4.png")
    officerdownwalk = loadAnimation("overworld/officer/down1.png","overworld/officer/down2.png",
    "overworld/officer/down3.png","overworld/officer/down4.png")  
    officerleftwalk = loadAnimation("overworld/officer/left1.png","overworld/officer/left2.png",
    "overworld/officer/left3.png","overworld/officer/left4.png")
    officerrightwalk = loadAnimation("overworld/officer/right1.png","overworld/officer/right2.png",
    "overworld/officer/right3.png","overworld/officer/right4.png")  

    kaiupstand = loadAnimation("overworld/kai/up1.png")
    kaidownstand = loadAnimation("overworld/kai/down1.png")
    kaileftstand = loadAnimation("overworld/kai/left1.png")
    kairightstand = loadAnimation("overworld/kai/right1.png")

    kaiupwalk = loadAnimation("overworld/kai/up1.png","overworld/kai/up2.png",
      "overworld/kai/up3.png","overworld/kai/up4.png")
    kaidownwalk = loadAnimation("overworld/kai/down1.png","overworld/kai/down2.png",
      "overworld/kai/down3.png","overworld/kai/down4.png")
    kaileftwalk = loadAnimation("overworld/kai/left1.png","overworld/kai/left2.png",
      "overworld/kai/left3.png","overworld/kai/left4.png")
    kairightwalk = loadAnimation("overworld/kai/right1.png","overworld/kai/right2.png",
      "overworld/kai/right3.png","overworld/kai/right4.png")

    rowletPokedex = loadImage("pokedex/rowlet.png")
    chimcharPokedex = loadImage("pokedex/chimchar.png")
    mudkipPokedex = loadImage("pokedex/mudkip.png")

    partybg = loadImage("partyBg.png")

    hughBackSprite = loadImage("hughBack.png")

    downImg = loadImage("downarrow.png")
    rightImg = loadImage("rightarrow.png")

    pokeballSprite = loadImage("pokeballs/pokeball.png")
    pokeballCaughtSprite = loadImage("pokeballs/pokeballcaught.png")

    tempPokemonImage = loadImage("front/Lillipup.png")
    

}
function setup() {
  let cnv = createCanvas(640, 480);
  cnv.parent(document.body);
  cnv.style('z-index', '-1');

  gameState = 0;
  bgState = 0;
  move = true;
  moving = false
  interact = false;
  chat = false;
  battlingChat = false
  starterPokemon = ""
  menuCreated = false
  menuIndex = 0
  subIndex = -10
  pokemonIndex = 0
  menuPage = ""
  playerMoney = 0

  tempplayerSprite = createSprite(154,212)
  tempplayerSprite.visible = false
  tempPokemonSprite = createSprite(495, 130);
  tempPokemonSprite.visible = false

  options = false;
  opt = 1;
  transition = false
  playerDirection = "up"
  moveSpeed = 4
  tc = false;
  gc = false
  playerLocation = ""
  mult = 1

  battle = false
  currentBattle = null

  miniState = 0;
  textState = 0;
  
  shadeIndex = 0;

  battleChat = null
  trainerSprite = null
  playerSprite = null;

  officers = [false]

  transitionCharge = createSprite(0,0,10,10);
  transitionCounter = 0;
  transitionCharge.visible = false;

  textCharge = createSprite(0,0,10,10);
  textCounter = 0;
  textCharge.visible = false;

  obj1 = createSprite(320,180)
  obj1.addImage(thorneSprite)
  obj1.visible = false;

  text1 = ""
  text2 = ""
  text3 = ""

  option1 = ""
  option2 = ""
  option3 = ""

  playerName = "";
  inputCreated = false;

  party = []
  noOfPartyPokemon = 0
  noOfPokemon = 0
  

  player = createSprite(410,109)
  player.addAnimation("up_w",playerupwalk)
  player.addAnimation("down_w",playerdownwalk)
  player.addAnimation("left_w",playerleftwalk)
  player.addAnimation("right_w",playerrightwalk)
  player.addAnimation("up_s",playerupstand)
  player.addAnimation("down_s",playerdownstand)
  player.addAnimation("left_s",playerleftstand)
  player.addAnimation("right_s",playerrightstand)

  //characters npc
  mom = null
  thorne = null
  npc1 = null
  npc2 = null
  npc3 = null
  npc4 = null
  npc5 = null
  kai = null

  tempCharge = createSprite(0,0,10,10)
  tempCounter = 0
  tempCharge.visible = false
 
  ocharge = createSprite(0,0,10,10)
  ocharge.velocityY = 50
  ocharge.visible = false
  ocounter = 1

  npcArray = []

  tempSprite = createSprite(320, 240);
  tempSprite.addImage(battleTransitionBackround);
  tempSprite.visible = false  

  playerPokemon = createSprite(140, 240);
  playerPokemon.visible = false
  enemyPokemon = createSprite(495, 130);
  enemyPokemon.visible = false

  catchCharge = createSprite(0,0,10,10)
  catchCharge.visible = false
}

function bghandler(){
  if(battle === false){
  if(gameState === 0){
  background(logo); 
  }
  if(gameState === 1){

    transitionCharge.velocityY = 50;
   const shades = [
       "#000000", "#1A1A33", "#333366", "#4D4D99",
  "#6666CC", "#8080FF", "#99B3FF"];

    drawSprites();
    if (transitionCounter < shades.length - 1&&transition === false&&textState === 0) {
      transitionCharge.velocityY = 50;

      if (transitionCharge.position.y > height) {
        transitionCharge.position.y = 0;
        transitionCounter++;
      }
     
      background(shades[transitionCounter]);
    }
    
    else {
      background("#99B3FF");
      transitionCharge.velocityY = 0;
      obj1.visible = true
    }   
    
    if(transitionCounter === 6&&textState!==3){
      chat = true
    }
    else{
      chat = false
    }
    
  }
  if(playerLocation === "auburn_town"&&menuPage === ""){
    if(bgState === 0){
    const shades = ["black", "black", "black", "black", "black"];
  drawSprites();

  if (!transition && transitionCounter <= shades.length - 1) {
    transitionCharge.velocityY = 50;

    if (transitionCharge.position.y > 480) {
      transitionCharge.position.y = 0;
      transitionCounter++;
    }

    if (transitionCounter < shades.length) {
      background(shades[transitionCounter]);
    } else {
      transition = true;
      transitionCharge.velocityY = 0;
      transitionCharge.y = 0;
    }

  } else {
    background(upperroom1);
  }
}
    if(bgState === 1||bgState === 5.2||bgState === 6.33){
      background(lowerroom1)
    }
    if(bgState === 5.25||bgState === 6.4){
      background(upperroom1)
    }
    if(bgState === 2){
      background(auburntown1)
    }
    if(bgState === 3){
      background(auburntown2)
    }
    if(bgState === 4){
      background(auburntown3)
    }
    if(bgState === 5){
      background(auburntown5)
    }
    if(bgState === 6){
      background(auburntown6)
    }
    if(bgState === 7){
      background(auburntown4)
    }
    if(bgState === 7.25){
      background(lab)
    }

    if(bgState === 5.1||bgState === 2.1||bgState === 1.5||
      bgState === 3.1||bgState === 4.1||bgState === 6.66){
        background(smallhouse)
      }

  }

  if(playerLocation === "route_1"&&menuPage === ""){
    if(bgState === 1){
      background(route1_1)
    }
    if(bgState === 2){
      background(route1_2)
    }
    if(bgState === 3){
      background(route1_3)
    }
    if(bgState === 4){
      background(route1_4)
    }
  }

}
else if(battle){
  background(battleBackround)
  player.visible = false
}
else if(menuPage !== ""){
    if(menuPage === "party"||menuPage === "bag"){
      background(partybg)
    }
}

}

function draw() {

  if (battle === true) {
  if (currentBattle.state === "intro") {
    drawIntroUI(currentBattle);
  }
  drawSprites();
}

  //console.log(gameState,bgState,mouseX,mouseY,playerLocation,move,player.x,player.y)

  if(npc1&&npc1.isTouching(player)){
    npctalk[0] = true
  }
  else{
    npctalk[0] = false
  }

  if(currentBattle){
    currentBattle.update()
     if(currentBattle.playerCurrentPokemonObject.currentHP<=0){
        currentBattle.playerCurrentPokemonObject.currentHP = 0
    }
    if(currentBattle.enemyCurrentPokemonObject.currentHP<=0){
        currentBattle.enemyCurrentPokemonObject.currentHP = 0
    }
  }



  
  for(let npc of npcArray){
    player.collide(npc.sprite)
  }





  if(chat === true||options === true){
    move = false
  }
  if(chat === true){
    interact = false;
  }
  


  if(textCounter>3){
    textCharge.velocityY = 0
    textCharge.y = 0
    textCounter = 0
  }
  if(textCharge.y>480){
    textCharge.y = 0;
    textCounter++;
  }

  grassHandler();
  transitionHandler();
  spriteHandler();
  stateChanger();
  bghandler();
  textHandler();
  option();
  movement();
  NPCS();

    if(t1){
    t1.show();
    t1.checkInteraction(player, (newBgState, newX, newY, Location) => {
    
    bgState = newBgState;
    move = false;
    player.position.x = newX;
    player.position.y = newY;
    playerLocation = Location

    interact = false;
    moving = false;

    tempCharge.velocityY = 50
    tempCounter++
  });

    if(tempCharge.y>400){
      tempCounter = 0;
      tempCharge.velocityY = 0
      tempCharge.y = 0
      if(playerLocation === "auburn_town"){
        if((bgState === 1&&gameState === 2.5)){
          move = false
        }
        else if(bgState === 1&&gameState === 2){
          move = false
        }
        else{
          move = true
        }
      }
      if(playerLocation === "route_1"){
        if((bgState === 1&&gameState === 3.1)){
          move = false
        }
        else{
          move = true
        }
      }
    }

}

if(t2){
    t2.show();
    t2.checkInteraction(player, (newBgState, newX, newY, Location) => {
    
    bgState = newBgState;
    move = false;
    player.position.x = newX;
    player.position.y = newY;
    playerLocation = Location

    interact = false;
    moving = false;
    playerDirection = "left"

    tempCharge.velocityY = 50
    tempCounter++
  });

    if(tempCharge.y>400){
      tempCounter = 0;
      tempCharge.velocityY = 0
      tempCharge.y = 0
      move = true
    }

}

if(t3){
    t3.show();
    t3.checkInteraction(player, (newBgState, newX, newY,Location) => {
    
    bgState = newBgState;
    move = false;
    player.position.x = newX;
    player.position.y = newY;
    playerLocation = Location

    interact = false;
    moving = false;
    playerDirection = "left"

    tempCharge.velocityY = 50
    tempCounter++
  });

    if(tempCharge.y>400){
      tempCounter = 0;
      tempCharge.velocityY = 0
      tempCharge.y = 0
      move = true
    }

}

if(t4){
    t4.show();
    t4.checkInteraction(player, (newBgState, newX, newY,Location) => {
    
    bgState = newBgState;
    move = false;
    player.position.x = newX;
    player.position.y = newY;
    playerLocation = Location

    interact = false;
    moving = false;
    playerDirection = "left"

    tempCharge.velocityY = 50
    tempCounter++
  });

    if(tempCharge.y>400){
      tempCounter = 0;
      tempCharge.velocityY = 0
      tempCharge.y = 0
      move = true
    }

}

if(t5){
    t5.show();
    t5.checkInteraction(player, (newBgState, newX, newY,Location) => {
    
    bgState = newBgState;
    move = false;
    player.position.x = newX;
    player.position.y = newY;
    playerLocation = Location

    interact = false;
    moving = false;
    playerDirection = "left"

    tempCharge.velocityY = 50
    tempCounter++
  });

    if(tempCharge.y>400){
      tempCounter = 0;
      tempCharge.velocityY = 0
      tempCharge.y = 0
      move = true
    }

}

if(t6){
    t6.show();
    t6.checkInteraction(player, (newBgState, newX, newY,Location) => {
    
    bgState = newBgState;
    move = false;
    player.position.x = newX;
    player.position.y = newY;
    playerLocation = Location

    interact = false;
    moving = false;
    playerDirection = "left"

    tempCharge.velocityY = 50
    tempCounter++
  });

    if(tempCharge.y>400){
      tempCounter = 0;
      tempCharge.velocityY = 0
      tempCharge.y = 0
      move = true
    }

}

if(t7){
    t7.show();
    t7.checkInteraction(player, (newBgState, newX, newY,Location) => {
    
    bgState = newBgState;
    move = false;
    player.position.x = newX;
    player.position.y = newY;
    playerLocation = Location

    interact = false;
    moving = false;
    playerDirection = "left"

    tempCharge.velocityY = 50
    tempCounter++
  });

  if(tempCharge.y>400){
      tempCounter = 0;
      tempCharge.velocityY = 0
      tempCharge.y = 0
      move = true
    }

}

if(t8){
    t8.show();
    t8.checkInteraction(player, (newBgState, newX, newY,Location) => {
    
    bgState = newBgState;
    move = false;
    player.position.x = newX;
    player.position.y = newY;
    playerLocation = Location

    interact = false;
    moving = false;
    playerDirection = "left"

    tempCharge.velocityY = 50
    tempCounter++
  });

  if(tempCharge.y>400){
      tempCounter = 0;
      tempCharge.velocityY = 0
      tempCharge.y = 0
      move = true
    }

}


  if(g1){
    g1.checkEncounter()
    g1.show()
  }
  if(g2){
    g2.checkEncounter()
    g2.show()
  }
  if(g3){
    g3.checkEncounter()
    g3.show()
  }
  if(g4){
    g4.checkEncounter()
    g4.show()
  }
  if(g5){
    g5.checkEncounter()
    g5.show()
  }
  if(g6){
    g6.checkEncounter()
    g6.show()
  }
  if(g7){
    g7.checkEncounter()
    g7.show()
  }

drawSprites();


  if(chat === true){
    chatting();
  }
  if(battlingChat === true){
    battleChatting();
  }
    drawMenu()

  
}

function movement(){
  if(move === true){
    if(keyDown("f")&&runningShoes){
      moveSpeed = 8
    }
    else{
      moveSpeed = 4
    }
    if(keyDown("up")){
      moving = true;
      player.changeAnimation("up_w")
      playerDirection = "up"
      player.y-=moveSpeed
    }
    else if(keyDown("down")){
      moving = true;
      player.changeAnimation("down_w")
      playerDirection = "down"
      player.y+=moveSpeed
    }
   
     else if(keyDown("left")){
      moving = true;
      player.changeAnimation("left_w")
      playerDirection = "left"
      player.x-=moveSpeed
    }
    
     else if(keyDown("right")){
      moving = true;
      player.changeAnimation("right_w")
      playerDirection = "right"
      player.x+=moveSpeed
    }
    else{
      moving = false
    }
  }
  if(moving === false){
    if(playerDirection === "up"){
      player.changeAnimation("up_s")
    }
    if(playerDirection === "down"){
      player.changeAnimation("down_s")
    }
    if(playerDirection === "left"){
      player.changeAnimation("left_s")
    }
    if(playerDirection === "right"){
      player.changeAnimation("right_s")
    }
  }
}


function option(){
  if(options === true){
    if(gameState === 1){
      option1 = "YES"
      option2 = "NO"
      fill("white")
      rect(545,275,80,55)
      textFont("bold")
      fill("black")
      textSize(20)
      text(option1,570,300)
      text(option2,570,320)
      
      

      if(opt === 1){
        fill("red")
        text("˃",550,300)
      } 
      if(opt === 2){
        fill("red")
        text("˃",550,320)
      } 
    }
    if(gameState === 2&&options === true){

      

      if(ocharge.y>480){
        ocounter++
        ocharge.y = 0
      }
      if(ocounter>3){
        ocharge.y = 0
        ocharge.velocityY = 0
        ocounter = 0
      } 
      obj1.visible = true
      obj1.scale = 1.2
      obj1.x = 320
      obj1.y = 240
      obj1.addImage(rowletPokedex)

      option1 = "Rowlet"
      option2 = "Chimchar"
      option3 = "Mudkip"
      fill("white")
      rect(480,272,120,83)
      textFont("bold")
      fill("black")
      textSize(20)
      text(option1,510,300)
      text(option2,510,320)
      text(option3,510,340)

      let thornePostStarterDialogue = [
       `Professor Thorne: Excellent choice! That Pokémon will|
        something. And every battle builds a bond. You’ll face|
        help record your discoveries. Keep it updated often. Oh,|
        to test his skills. Don’t let him get too confident and|
       Now go on—your adventure begins. The Verdantia Region.`,

       `make a great partner. Treat it with care. Remember—this|
        challenges ahead. But I believe in your potential. You’ve|
        and before I forget... Kai mentioned heading to Route 1.|
         before you leave don't forget to say goodbye to your mom.|
       awaits you. You've got this ${playerName}.`,

       `this journey is yours now. Every step teaches you |
        got what it takes. Take this, too—your Pokédex. It’ll|
         He’s probably waiting for you there. Might be looking |
        |`
      ]

      if(opt === 1){
        fill("red")
        text("˃",490,300)
        obj1.addImage(rowletPokedex)
        if(keyDown("space")&&noOfPartyPokemon === 0&&ocounter === 0){
          party.push(new Pokemon("Rowlet",5,pokedex,moveDB,[],null,0))
          starterPokemon = "Rowlet"
          noOfPartyPokemon++;
          noOfPokemon++;
          noOfPokemonLeft++
          options = false
          obj1.visible = false
          thorne.dialogue = thornePostStarterDialogue;
          if(gameState === 2){
          thorne.startTalking();
          move = false
          if (chat) {
          thorne.talk();
          }
        }
        }
      } 
      if(opt === 2){
        fill("red")
        text("˃",490,320)
        obj1.addImage(chimcharPokedex)
        if(keyDown("space")&&noOfPartyPokemon === 0&&ocounter === 0){
          party.push(new Pokemon("Chimchar",5,pokedex,moveDB,[],null,0))
          starterPokemon = "Chimchar"
          noOfPartyPokemon++;
          noOfPokemon++;
          noOfPokemonLeft++;
          options = false
          obj1.visible = false
          thorne.dialogue = thornePostStarterDialogue;
          if(gameState === 2){
          thorne.startTalking();
          move = false
          if (chat) {
          thorne.talk();
          }
        }
        }
      } 
      if(opt === 3){
        fill("red")
        text("˃",490,340)
        obj1.addImage(mudkipPokedex)
        if(keyDown("space")&&noOfPartyPokemon === 0&&ocounter === 0){
          party.push(new Pokemon("Mudkip",5,pokedex,moveDB,[],null,0))
          starterPokemon = "Mudkip"
          noOfPokemonLeft++
          noOfPartyPokemon++;
          noOfPokemon++;
          options = false
          obj1.visible = false
          thorne.dialogue = thornePostStarterDialogue;
          if(gameState === 2){
          thorne.startTalking();
          move = false
          if (chat) {
          thorne.talk();
          }
        }
      } 
      } 
    }
  }
}

function stateChanger(){

  if (bgState !== 1 && mom&&playerLocation === "auburn_town"&&mom) {
    mom.sprite.remove();
    mom = null;
  }
  if (bgState !== 7.25 &&playerLocation === "auburn_town"&&thorne) {
    thorne.sprite.remove();
    thorne = null;
  }
  if (bgState !== 5 &&playerLocation !== "auburn_town"&&npc1) {
    npc1.sprite.remove();
    npc1 = null;
  }

  if(battle){
    if(npc1){
      npc1.sprite.remove();
      npc1 = null;
    }
  }

  if(textState === 6&&keyWentDown("space")&&gameState === 1){
        gameState = 2;
        textState = 0;
        chat = false
        playerLocation = "auburn_town"
        move = true
        text1 = ""
        text2 = ""
        text2 = ""
        transition = false
        player.visible = true
      }

  if(gameState === 0&&keyWentDown("space")){
    gameState = 1;
  }
  if(gameState === 1&&keyWentDown("space")&&transitionCounter===6){  
    textState+=1;
  }
  if(textState === 4&&keyWentDown("space")){
    if(opt === 2){
    textState = 3;
    playerName = ""
    opt = 1;
    }
    else{
      textState+=1;
      textState = 5
    }
    
  }

  if(gameState === 1&&textState === 4){
        if (keyWentDown("up") && textState === 4) {
        opt = opt === 1 ? 2 : 1;
        }
        if (keyWentDown("down") && textState === 4) {
        opt = opt === 1 ? 2 : 1;
        }
  }
  if(gameState === 2&&options === true){
        if (keyWentDown("up")) {
        opt--
        if(opt<1){
          opt = 3
        } 
        }
        if (keyWentDown("down")) {
        opt++
        if(opt>3){
          opt = 1
        } 
      }
  }

}

function chatting(){
   fill('#70C1B3');
  noStroke();
  rect(15, 335, 610, 130);
  fill('white');
  noStroke();
  rect(25, 345, 590, 110);

  textSize(17);
  textFont('Courier New');
  fill("black");
  text(text1.trim(),30,367)
  text(text2.trim(),30,395)
  text(text3.trim(),30,423)
  textFont('Bold')
  text("Press Space To Continue",230,450)
  fill("red")


  textFont("arial")
  text("V",598,423)

}

function battleChatting(){
  
  /*console.log(currentBattle.state,currentBattle.turnStart,currentBattle.playerDamage,
    currentBattle.enemyDamage,currentBattle.eCurrentMove
  )*/

  if(currentBattle.state === "intro"){
    playerBack = loadImage("playerBack.png")
    playerSprite.addImage(playerBack)
    
  if(battleChat === true&&!trainerSprite&&!playerSprite){
  if(currentBattle.type === "trainer"){
    trainerImg = loadImage("sprites/"+currentBattle.trainerClass+".png")
  trainerSprite = createSprite(485,104)
  trainerSprite.addImage(trainerImg)
      trainerSprite.scale = 1.2
    }
    else{
    enemyPokemonFront = loadImage("front/" + currentBattle.enemyCurrentPokemon + ".png");
    enemyPokemon.addImage(enemyPokemonFront);
    enemyPokemon.visible = true;
    trainerSprite.visible = false
    }
  playerSprite = createSprite(154,208)
  playerSprite.scale = 1.55
  battle = true 
  }

  if(currentBattle.type === "trainer"){
    trainerImg = loadImage("sprites/"+currentBattle.trainerClass+".png")   
  trainerSprite.addImage(trainerImg)
      trainerSprite.scale = 1.2
    }
    else{
    enemyPokemonFront = loadImage("front/" + currentBattle.enemyCurrentPokemon + ".png");
    enemyPokemon.addImage(enemyPokemonFront);
    enemyPokemon.visible = true;
    trainerSprite.visible = false
    }

  if(currentBattle.type === "trainer"){
  trainerSprite.visible = true
  }
  playerSprite.visible = true
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  
  fill("red")
  fill("black")
  rect(405,270,230,5)
   rect(405,254,5,20) 
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)
  
  if(currentBattle.type === "trainer"){
  rect(5,66,230,5)
  rect(230,50,5,20)
  if(currentBattle.enemyPokemonLeft === 6){
    image(pokeballImg,25,48,20,20)
  }
  if(currentBattle.enemyPokemonLeft >= 5){

    image(pokeballImg,60,48,20,20)
  }
  if(currentBattle.enemyPokemonLeft >= 4){
    image(pokeballImg,95,48,20,20)

  }
  if(currentBattle.enemyPokemonLeft >= 3){

    image(pokeballImg,130,48,20,20)

  }
  if(currentBattle.enemyPokemonLeft >= 2){

    image(pokeballImg,165,48,20,20)

  }
  if(currentBattle.enemyPokemonLeft >= 1){
    image(pokeballImg,200,48,20,20)

  }
}
  if(noOfPokemonLeft === 6){
    image(pokeballImg,595,253,20,20)
  }
  if(noOfPokemonLeft >= 5){
    image(pokeballImg,560,253,20,20)
  }
  if(noOfPokemonLeft >= 4){
    image(pokeballImg,525,253,20,20)
  }
  if(noOfPokemonLeft >= 3){
    image(pokeballImg,490,253,20,20)
  }
  if(noOfPokemonLeft >= 2){
    image(pokeballImg,455,253,20,20)
  }
  if(noOfPokemonLeft >= 1){
    image(pokeballImg,420,253,20,20)
  }

  fill("red")
  textFont("arial")
  text("V",598,423)
  }

  if (currentBattle.keyCooldown > 0) {
  currentBattle.keyCooldown--;
  }


  if(currentBattle.state === "send"){
     fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
rect(405,270,230,5)
   rect(405,254,5,20) 
  
  
   if(currentBattle.type === "trainer"){
    rect(5,66,230,5)
  rect(230,50,5,20)
  if(currentBattle.enemyPokemonLeft === 6){
    image(pokeballImg,25,48,20,20)
  }
  if(currentBattle.enemyPokemonLeft >= 5){

    image(pokeballImg,60,48,20,20)
  }
  if(currentBattle.enemyPokemonLeft >= 4){
    image(pokeballImg,95,48,20,20)

  }
  if(currentBattle.enemyPokemonLeft >= 3){

    image(pokeballImg,130,48,20,20)

  }
  if(currentBattle.enemyPokemonLeft >= 2){

    image(pokeballImg,165,48,20,20)

  }
  if(currentBattle.enemyPokemonLeft >= 1){
    image(pokeballImg,200,48,20,20)

  }
}
  
  if(noOfPokemonLeft === 6){
    image(pokeballImg,595,253,20,20)
  }
  if(noOfPokemonLeft >= 5){
    image(pokeballImg,560,253,20,20)
  }
  if(noOfPokemonLeft >= 4){
    image(pokeballImg,525,253,20,20)
  }
  if(noOfPokemonLeft >= 3){
    image(pokeballImg,490,253,20,20)
  }
  if(noOfPokemonLeft >= 2){
    image(pokeballImg,455,253,20,20)
  }
  if(noOfPokemonLeft >= 1){
    image(pokeballImg,420,253,20,20)
  }

  if(currentBattle.type === "trainer"){
  battleText1 = `${currentBattle.enemyName} sent out ${currentBattle.enemyTeam[0].name}!`
  battleText2 = `Go ${currentBattle.playerCurrentPokemon}!`
  }
  else{
    battleText1 = `Go ${currentBattle.playerCurrentPokemon}!`
    battleText2 = ``
  }
  
  battleText3 = ``
  
    enemyPokemonFront = loadImage("front/" + currentBattle.enemyCurrentPokemon + ".png");
    enemyPokemon.addImage(enemyPokemonFront);
    enemyPokemon.visible = true;
    playerPokemonBack = loadImage("back/" + currentBattle.playerCurrentPokemon + ".png");
    pokemonSent = true;

    playerPokemon.addImage(playerPokemonBack);
    playerPokemon.visible = true;
    

    trainerSprite.visible = false
    playerSprite.visible = false



  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)
  fill("red")

  if(keyWentDown("space")){
    currentBattle.state = "menu"
    currentBattle.keyCooldown = 15
    currentBattle.menuIndex = 0
  }

  


  textFont("arial")
  text("V",598,423)
  }

  if(currentBattle.state === "menu"){

  currentBattle.pHit = false
  currentBattle.pEffect = ""
  currentBattle.pMult = 1
  currentBattle.eHit = false
  currentBattle.eEffect = ""
  currentBattle.eMult = 1
  currentBattle.playerDamage = 0
  currentBattle.enemyDamage = 0

  noStroke()
  fill("white")
  rect(445,277.5,180,5)


  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  fill('lightgrey');
  strokeWeight(1);
  stroke(51);
  rect(330, 335, 280, 110);

  textSize(25);
  textFont('Courier New');
  fill("black");

  battleText1 = `What will`
  battleText2 = `${currentBattle.playerCurrentPokemon} do?`
  battleText3 = ``

  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  textFont('Bold')

  textSize(20)
  fill("black")
  textFont('Bold')
  text("Press Space To Continue",30,450)
  
  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  
  let playerColor = "green"
  if(playerRatio >0.5){
    playerColor = "green"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "green"
  if(enemyRatio >0.5){
    enemyColor = "green"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }

  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  if(expgained === 0){
    expRatio = 0
  }
  
  fill(playerColor)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill("blue")
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
 
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  if(currentBattle.menuIndex === 0){
    fill("yellow")
    noStroke()
    rect(335, 340, 135, 50);
    if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
      currentBattle.keyCooldown = 15
    battleOptions = "fight"
    currentBattle.state = "fight"
    currentBattle.menuIndex = 0
    }
  }
  if(currentBattle.menuIndex === 1&&currentBattle.keyCooldown === 0){
    fill("yellow")
    noStroke()
    rect(470,340, 135, 50);
    if(keyWentDown("space")){
    currentBattle.keyCooldown = 15
    battleOptions = "bag"
    currentBattle.menuIndex = 1
    }
  }
  if(currentBattle.menuIndex === 2&&currentBattle.keyCooldown === 0){
    fill("yellow")
    noStroke()
    rect(335, 390, 135, 50);
    if(keyWentDown("space")){
    currentBattle.keyCooldown = 15
    battleOptions = "pokemon"
    currentBattle.menuIndex = 2
    }
  }
  if(currentBattle.menuIndex === 3&&currentBattle.keyCooldown === 0){
    fill("yellow")
    noStroke()
    rect(470,390, 135, 50);
    if(keyWentDown("space")){
    currentBattle.keyCooldown = 15
    battleOptions = "run"
    currentBattle.menuIndex = 3
    currentBattle.state = "run"
    }
  }
  
  fill('pink');
  strokeWeight(2);
  stroke(51);
  rect(340, 345, 125, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text("Fight",360,372.5)
  
  fill('orange');
  strokeWeight(2);
  stroke(51);
  rect(475, 345, 125, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text("Bag",510,372.5)
  
  fill('rgb(0,177,0)');
  strokeWeight(2);
  stroke(51);
  rect(340, 395, 125, 40);
  textSize(22);
  noStroke()
  textFont('Courier New');
  fill("white");
  text("Pokemon",355,422.5)
  
  fill('rgb(3,3,216)');
  strokeWeight(2);
  stroke(51);
  rect(475, 395, 125, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text("Run",510,422.5)


  textSize(20);
  textFont('Courier New');
  fill("black");
  noStroke()
  battleText1 = "What will"
  battleText2 = currentBattle.playerCurrentPokemon+" do?"
  battleText3 = ""

  if(currentBattle.menuIndex === 0){
    if(keyWentDown("right")){
      currentBattle.menuIndex = 1
    }
    if(keyWentDown("down")){
      currentBattle.menuIndex = 2
    }
  }
  if(currentBattle.menuIndex === 1){
    if(keyWentDown("left")){
      currentBattle.menuIndex = 0
    }
    if(keyWentDown("down")){
      currentBattle.menuIndex = 3
    }
  }
  
  if(currentBattle.menuIndex === 2){
    if(keyWentDown("right")){
      currentBattle.menuIndex = 3
    }
    if(keyWentDown("up")){
      currentBattle.menuIndex = 0
    }
  }
  
  if(currentBattle.menuIndex === 3){
    if(keyWentDown("left")){
      currentBattle.menuIndex = 2
    }
    if(keyWentDown("up")){
      currentBattle.menuIndex = 1
    }
  
  }
  }

  if(currentBattle.state === "fight"){

    if(noOfPokemonLeft === 0){
      currentBattle.state = "blackOut"
    }
    if(currentBattle.ememyPokemonLeft <= 0){
      currentBattle.state = "battleEnd"
    }

  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


  textSize(25);
  textFont('Courier New');
  fill("black");

  battleText1 = ``
  battleText2 = ``
  battleText3 = ``
  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "green"
  if(playerRatio >0.5){
    playerColor = "green"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "green"
  if(enemyRatio >0.5){
    enemyColor = "green"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  if(expgained === 0){
    expRatio = 0
  }
  
  fill(playerColor)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill("blue")
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
 
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

    textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)

  let mc = []
  movestype = currentBattle.playerCurrentPokemonObject.moves
  

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
      if(currentBattle.playerCurrentPokemonObject.moves[currentBattle.moveIndex].currentPP>0
        &&!currentBattle.playerChosenMove
      ){
        currentBattle.playerCurrentPokemonObject.moves[currentBattle.moveIndex].currentPP--
        currentBattle.playerChosenMove = true
        currentBattle.state = "enemyAI"
        currentBattle.keyCooldown = 15
      }
      else{
        alert("no pp")
      }
    }
  if(currentBattle.moveIndex === 0){
    fill("yellow")
    rect(15, 320, 305, 60);
    if(keyWentDown("right")&&movestype.length>=2){
      currentBattle.moveIndex = 1
    }
    if(keyWentDown("down")&&movestype.length>=3){
      currentBattle.moveIndex = 2
    }
  }
  if(currentBattle.moveIndex === 1){
    fill("yellow")
    rect(320, 320, 305, 60);
    if(keyWentDown("left")&&movestype.length>=2){
      currentBattle.moveIndex = 0
    }
    if(keyWentDown("down")&&movestype.length>=3){
      currentBattle.moveIndex = 3
    }
  }
  if(currentBattle.moveIndex === 2){
    fill("yellow")
    rect(15, 380, 305, 60);
    if(keyWentDown("right")&&movestype.length>=4){
      currentBattle.moveIndex = 3
    }
    if(keyWentDown("up")&&movestype.length>=3){
      currentBattle.moveIndex = 0
    }
  }
  if(currentBattle.moveIndex === 3){
    fill("yellow")
    rect(320, 380, 305, 60);
    if(keyWentDown("left")&&movestype.length>=4){
      currentBattle.moveIndex = 2
    }
    if(keyWentDown("up")&&movestype.length>=4){
      currentBattle.moveIndex = 1
    }
  }
  
  for(var i = 0;i<movestype.length;i++){
  if(movestype[i].type === "Normal"){
    mc[i] = "#C7C7C7"
  }
  if(movestype[i].type === "Fire"){
    mc[i] = "rgb(243,51,51)"
  }
  if(movestype[i].type === "Water"){
    mc[i] = "rgb(51,115,255)"
    
  }
  if(movestype[i].type === "Electric"){
    mc[i] = "#F8E64D"
  }
  if(movestype[i].type === "Grass"){
    mc[i] = "#49EF5E"
  }
    if(movestype[i].type === "Ice"){
    mc[i] = "#7DF3F0"
  }
     if(movestype[i].type === "Fighting"){
    mc[i] = "#A52905"
  }
     if(movestype[i].type === "Poison"){
    mc[i] = "#82049A"
  }
     if(movestype[i].type === "Ground"){
    mc[i] = "#D3A406"
  }
     if(movestype[i].type === "Flying"){
    mc[i] = "#9CD9F5"
  }
     if(movestype[i].type === "Psychic"){
    mc[i] = "#FF0099"
  }
     if(movestype[i].type === "Bug"){
    mc[i] = "#95C848"
  }
     if(movestype[i].type === "Rock"){
    mc[i] = "#927B2D"
  }
     if(movestype[i].type === "Ghost"){
    mc[i] = "#482178"
  }
     if(movestype[i].type === "Dragon"){
    mc[i] = "#5300B7"
  }
    if(movestype[i].type === "Dark"){
    mc[i] = "#2F1301"
      
  }
    if(movestype[i].type === "Steel"){
    mc[i] = "#9E9CA2"
  }
    if(movestype[i].type === "Fairy"){
    mc[i] = "#FF97E5"
  }
  }
  
  if(mc[0]){
    fill(mc[0])
  strokeWeight(2);
  stroke(51);
  rect(20, 325, 295, 50);
  textSize(25);
  noStroke()
  textFont('Courier New');
  fill("white");
  text(`${movestype[0].name}`,23,347)
  textSize(15);
  text(`Power: ${`${movestype[0].power}`} Accuracy: ${`${movestype[0].accuracy}`} PP: ${movestype[0].currentPP}`,25,367)
  }
  
  if(mc[1]){
    fill(mc[1])
  strokeWeight(2);
  stroke(51);
  rect(325, 325, 295, 50);
  textSize(25);
  noStroke()
  textFont('Courier New');
  fill("white");
  text(`${movestype[1].name}`,328,347)
  textSize(15);
  text(`Power: ${`${movestype[1].power}`} Accuracy: ${`${movestype[1].accuracy}`} PP: ${movestype[1].currentPP}`,328,367)
  }
  
  if(mc[2]){
    fill(mc[2])
  strokeWeight(2);
  stroke(51);
  rect(20, 385, 295, 50);
  textSize(25);
  noStroke()
  textFont('Courier New');
  fill("white");
  text(`${movestype[2].name}`,23,407)
  textSize(15);
  text(`Power: ${`${movestype[2].power}`} Accuracy: ${`${movestype[2].accuracy}`} PP: ${movestype[2].currentPP}`,25,427)
  }
  
  if(mc[3]){
    fill(mc[3])
  strokeWeight(2);
  stroke(51);
  rect(325, 385, 295, 50);
  textSize(25);
  noStroke()
  textFont('Courier New');
  fill("white");
  text(`${movestype[3].name}`,328,407)
  textSize(15);
  text(`Power: ${`${movestype[3].power}`} Accuracy: ${`${movestype[3].accuracy}`} PP: ${movestype[3].currentPP}`,328,427)
  }

  }

  if(currentBattle.state === "run"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  if(currentBattle.type === "trainer"){
    battleText1 = `No! There's no running away from a Trainer Pokemon`
    battleText2 = `Battle!`
    battleText3 = ``
    if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
      currentBattle.keyCooldown = 15
      currentBattle.state = "menu"
    }
  }
  else{
    battleText1 = `Got away safely!`
    battleText2 = ``
    battleText3 = ``
    if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
      currentBattle.keyCooldown = 15
      currentBattle.state = "endBattle"
      enemyPokemon.visible = false
    }
  }

  
  
  noStroke()
  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)
  }

  if(currentBattle.state === "battling"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    if(currentBattle.turnStart === "player"){
      if(currentBattle.pMult !== 1||currentBattle.crit !== 1){
        currentBattle.state = "effectiveness"
      }
      else{
        if(currentBattle.pEffect !== ""){
          currentBattle.state = "changes"
        }
        else{
          if(currentBattle.enemyCurrentPokemonObject.currentHP <= 0){
            currentBattle.state = "faint"
          }
          else{
            currentBattle.state = "battling1"
            currentBattle.turn = "enemy"
          currentBattle.enemyAttack()
          currentBattle.playerCurrentPokemonObject.currentHP -= currentBattle.enemyDamage
          if(currentBattle.playerCurrentPokemonObject.currentHP <= 0){
            currentBattle.playerCurrentPokemonObject.currentHP = 0
          }
          }
        }
      }
    }
    else{
      if(currentBattle.eMult !== 1||currentBattle.crit !== 1){
        currentBattle.state = "effectiveness"
      }
      else{
        if(currentBattle.eEffect !== ""){
          currentBattle.state = "changes"
        }
        else{
          if(currentBattle.playerCurrentPokemonObject.currentHP <= 0){
            currentBattle.state = "faint"
          }
          else{
            currentBattle.state = "battling1"
            currentBattle.turn = "player"
          currentBattle.playerAttack()
          currentBattle.enemyCurrentPokemonObject.currentHP -= currentBattle.playerDamage
             if(currentBattle.enemyCurrentPokemonObject.currentHP <= 0){
            currentBattle.enemyCurrentPokemonObject.currentHP = 0
          }
          }
        }
      }
    }
    currentBattle.keyCooldown = 15
  }
  
  if(currentBattle.type === "trainer"){
    if(currentBattle.turnStart === "player"){
      battleText1 = `${currentBattle.playerCurrentPokemon} used ${currentBattle.pCurrentMove}!`
      battleText2 = ``
      battleText3 = ``

    }

    if(currentBattle.turnStart === "enemy"){
      battleText1 = `Foe ${currentBattle.enemyCurrentPokemon} used ${currentBattle.eCurrentMove}!`
      battleText2 = ``
      battleText3 = ``
    }
  }
  else{
    if(currentBattle.turnStart === "player"){
      battleText1 = `${currentBattle.playerCurrentPokemon} used ${currentBattle.pCurrentMove}!`
      battleText2 = ``
      battleText3 = ``
    }

    if(currentBattle.turnStart === "enemy"){
      battleText1 = `The wild ${currentBattle.enemyCurrentPokemon} used ${currentBattle.eCurrentMove}!`
      battleText2 = ``
      battleText3 = ``
    }
  }
  if(currentBattle.turnStart === "player"&&!currentBattle.pHit){
    battleText2 = `But it missed!`
  }
  if(currentBattle.turnStart === "enemy"&&!currentBattle.eHit){
    battleText2 = `But it missed!`
  }


  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "green"
  if(playerRatio >0.5){
    playerColor = "green"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "green"
  if(enemyRatio >0.5){
    enemyColor = "green"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill("blue")
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "effectiveness"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    if(currentBattle.turnStart === "player"){
      if(currentBattle.pEffect !== ""){
        currentBattle.state = "changes"
      }
      else{
        if(currentBattle.enemyCurrentPokemonObject.currentHP <=0){
          currentBattle.state = "faint"
        }
        else{
          currentBattle.state = "battling1"
          currentBattle.turn = "enemy"
          currentBattle.enemyAttack()
          currentBattle.playerCurrentPokemonObject.currentHP -= currentBattle.enemyDamage
           if(currentBattle.playerCurrentPokemonObject.currentHP <= 0){
            currentBattle.playerCurrentPokemonObject.currentHP = 0
          }
        }
      }
    }
    else{
      if(currentBattle.eEffect !== ""){
        currentBattle.state = "changes"
      }
      else{
        if(currentBattle.playerCurrentPokemonObject.currentHP <=0){
          currentBattle.state = "faint"
        }
        else{
          currentBattle.state = "battling1"
          currentBattle.enemyAttack()
          currentBattle.playerCurrentPokemonObject.currentHP -= currentBattle.enemyDamage
          currentBattle.turn = "enemy"
           if(currentBattle.playerCurrentPokemonObject.currentHP <= 0){
            currentBattle.playerCurrentPokemonObject.currentHP = 0
          }
        }
      }
    }
  }

  if(currentBattle.turnStart === "player"){
  if((calculateTypeEffectiveness(
    currentBattle.enemyCurrentPokemonObject.types,
    currentBattle.playerCurrentPokemonObject.moves[currentBattle.moveIndex].type)>1)
    &&currentBattle.crit === 1){
      battleText1 = `It's super effective!`
      battleText2 = ``
  }
  if((calculateTypeEffectiveness(
    currentBattle.enemyCurrentPokemonObject.types,
    currentBattle.playerCurrentPokemonObject.moves[currentBattle.moveIndex].type)>1)
    &&currentBattle.crit === 1.5){
      battleText1 = `It's super effective!`
      battleText2 = `It's a critical hit!`
  }


  if((calculateTypeEffectiveness(
    currentBattle.enemyCurrentPokemonObject.types,
    currentBattle.playerCurrentPokemonObject.moves[currentBattle.moveIndex].type)<1
  )&&(calculateTypeEffectiveness(
    currentBattle.enemyCurrentPokemonObject.types,
    currentBattle.playerCurrentPokemonObject.moves[currentBattle.moveIndex].type)>0)
    &&currentBattle.crit === 1){
      battleText1 = `It's not very effective!`
      battleText2 = ``
  }
  if((calculateTypeEffectiveness(
    currentBattle.enemyCurrentPokemonObject.types,
    currentBattle.playerCurrentPokemonObject.moves[currentBattle.moveIndex].type)<1)
    &&(calculateTypeEffectiveness(
    currentBattle.enemyCurrentPokemonObject.types,
    currentBattle.playerCurrentPokemonObject.moves[currentBattle.moveIndex].type)>0)
    &&currentBattle.crit === 1.5){
      battleText1 = `It's not very effective!`
      battleText2 = `It's a critical hit!`
  }
  if((calculateTypeEffectiveness(
    currentBattle.enemyCurrentPokemonObject.types,
    currentBattle.playerCurrentPokemonObject.moves[currentBattle.moveIndex].type)===0)){
      battleText1 = `It doesn't affect ${currentBattle.enemyCurrentPokemonObject.name}!`
      battleText2 = ``
  }
  if((calculateTypeEffectiveness(
    currentBattle.enemyCurrentPokemonObject.types,
    currentBattle.playerCurrentPokemonObject.moves[currentBattle.moveIndex].type) === 1)
    &&currentBattle.crit === 1.5){
      battleText1 = `It's a critical hit!`
      battleText2 = ``
  }
}
else{
  if((calculateTypeEffectiveness(
    currentBattle.playerCurrentPokemonObject.types,
    currentBattle.enemyCurrentPokemonObject.moves[currentBattle.enemyIndex].type)>1)
    &&currentBattle.crit === 1){
      battleText1 = `It's super effective!`
      battleText2 = ``
  }
  if((calculateTypeEffectiveness(
    currentBattle.playerCurrentPokemonObject.types,
    currentBattle.enemyCurrentPokemonObject.moves[currentBattle.enemyIndex].type)>1)
    &&currentBattle.crit === 1.5){
      battleText1 = `It's super effective!`
      battleText2 = `It's a critical hit!`
  }


  if((calculateTypeEffectiveness(
    currentBattle.playerCurrentPokemonObject.types,
    currentBattle.enemyCurrentPokemonObject.moves[currentBattle.enemyIndex].type)<1)
    &&(calculateTypeEffectiveness(
    currentBattle.playerCurrentPokemonObject.types,
    currentBattle.enemyCurrentPokemonObject.moves[currentBattle.enemyIndex].type)>0)
    &&currentBattle.crit === 1){
      battleText1 = `It's not very effective!`
      battleText2 = ``
  }
  if((calculateTypeEffectiveness(
    currentBattle.playerCurrentPokemonObject.types,
    currentBattle.enemyCurrentPokemonObject.moves[currentBattle.enemyIndex].type)<1
  (calculateTypeEffectiveness(
    currentBattle.playerCurrentPokemonObject.types,
    currentBattle.enemyCurrentPokemonObject.moves[currentBattle.enemyIndex].type)>0))
    &&currentBattle.crit === 1.5){
      battleText1 = `It's not very effective!`
      battleText2 = `It's a critical hit!`
  }

  if(calculateTypeEffectiveness(
    currentBattle.playerCurrentPokemonObject.types,
    currentBattle.enemyCurrentPokemonObject.moves[currentBattle.enemyIndex].type === 0)){
      battleText1 = `It doesn't affect ${currentBattle.playerCurrentPokemonObject.name}!`
      battleText2 = ``
  }


  if(calculateTypeEffectiveness(
    currentBattle.playerCurrentPokemonObject.types,
    currentBattle.enemyCurrentPokemonObject.moves[currentBattle.enemyIndex].type === 1)
    &&currentBattle.crit === 1.5){
      battleText1 = `It's a critical hit!`
      battleText2 = ``
  }
}
 


  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "green"
  if(playerRatio >0.5){
    playerColor = "green"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "green"
  if(enemyRatio >0.5){
    enemyColor = "green"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill("blue")
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "changes"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

    if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
      currentBattle.keyCooldown = 15
      if(currentBattle.turnStart === "player"){
        if(currentBattle.enemyCurrentPokemonObject.currentHP <= 0){
          currentBattle.state = "faint"
        }
        else{
          currentBattle.state = "battling1"
          currentBattle.turn = "enemy"
          currentBattle.enemyAttack()
          currentBattle.playerCurrentPokemonObject.currentHP -= currentBattle.enemyDamage
           if(currentBattle.playerCurrentPokemonObject.currentHP <= 0){
            currentBattle.playerCurrentPokemonObject.currentHP = 0
          }
        }
      }
      else{
        if(currentBattle.playerCurrentPokemonObject.currentHP <= 0){
          currentBattle.state = "faint"
        }
        else{
          currentBattle.state = "battling1"
          currentBattle.turn = "player"
          currentBattle.playerAttack()
          currentBattle.enemyCurrentPokemonObject.currentHP -= currentBattle.playerDamage
           if(currentBattle.enemyCurrentPokemonObject.currentHP <= 0){
            currentBattle.enemyCurrentPokemonObject.currentHP = 0
          }
        }
      }
    }
  
    if(currentBattle.turnStart === "player"){
      battleText1 = `${currentBattle.pEffect}`
      battleText2 = ``
      battleText3 = ``

    }

    if(currentBattle.turnStart === "enemy"){
      battleText1 = `${currentBattle.eEffect}`
      battleText2 = ``
      battleText3 = ``
    }

  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "green"
  if(playerRatio >0.5){
    playerColor = "green"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "green"
  if(enemyRatio >0.5){
    enemyColor = "green"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill("blue")
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }
  
  if(currentBattle.state === "battling1"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    if(currentBattle.turnStart === "player"){
      if(currentBattle.eMult !== 1||currentBattle.crit !== 1){
        currentBattle.state = "effectiveness1"
      }
      else{
        if(currentBattle.eEffect !== ""){
          currentBattle.state = "changes1"
        }
        else{
          if(currentBattle.playerCurrentPokemonObject.currentHP <= 0){
            currentBattle.state = "faint1"
          }
          else{
            currentBattle.state = "menu"
            currentBattle.turn = ""
          }
        }
      }
    }
    else{
      if(currentBattle.pMult !== 1||currentBattle.crit !== 1){
        currentBattle.state = "effectiveness1"
      }
      else{
        if(currentBattle.pEffect !== ""){
          currentBattle.state = "changes1"
        }
        else{
          if(currentBattle.enemyCurrentPokemonObject.currentHP <= 0){
            currentBattle.state = "faint1"
          }
          else{
            currentBattle.state = "menu"
            currentBattle.turn = ""
          }
        }
      }
    }
    currentBattle.keyCooldown = 15
  }
  
    if(currentBattle.turnStart === "player"){
      if(currentBattle.type === "trainer"){
      battleText1 = `Foe ${currentBattle.enemyCurrentPokemonObject.name} used ${currentBattle.eCurrentMove}!`
      }
      else{
      battleText1 = `The wild ${currentBattle.enemyCurrentPokemonObject.name} used ${currentBattle.eCurrentMove}!`
      }
      battleText2 = ``
      battleText3 = ``

    }

    if(currentBattle.turnStart === "enemy"){
      battleText1 = `${currentBattle.playerCurrentPokemonObject.name} used ${currentBattle.pCurrentMove}!`
      battleText2 = ``
      battleText3 = ``
    }


  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "green"
  if(playerRatio >0.5){
    playerColor = "green"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "green"
  if(enemyRatio >0.5){
    enemyColor = "green"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill("blue")
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "effectiveness1"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    if(currentBattle.turnStart === "player"){
      if(currentBattle.eEffect !== ""){
        currentBattle.state = "changes1"
      }
      else{
        if(currentBattle.playerCurrentPokemonObject.currentHP <=0){
          currentBattle.state = "faint1"
        }
        else{
          currentBattle.state = "menu"
          currentBattle.turn = ""
      
        }
      }
    }
    else{
      if(currentBattle.pEffect !== ""){
        currentBattle.state = "changes1"
      }
      else{
        if(currentBattle.enemyCurrentPokemonObject.currentHP <=0){
          currentBattle.state = "faint1"
        }
        else{
          currentBattle.state = "menu"
          currentBattle.turn = ""
        }
      }
    }
  }

  if(currentBattle.turnStart === "player"){
  if((calculateTypeEffectiveness(
    currentBattle.playerCurrentPokemonObject.types,
    currentBattle.enemyCurrentPokemonObject.moves[currentBattle.enemyIndex].type)>1)
    &&currentBattle.crit === 1){
      battleText1 = `It's super effective!`
      battleText2 = ``
  }
  if((calculateTypeEffectiveness(
    currentBattle.playerCurrentPokemonObject.types,
    currentBattle.enemyCurrentPokemonObject.moves[currentBattle.enemyIndex].type)>1)
    &&currentBattle.crit === 1.5){
      battleText1 = `It's super effective!`
      battleText2 = `It's a critical hit!`
  }


  if((calculateTypeEffectiveness(
    currentBattle.playerCurrentPokemonObject.types,
    currentBattle.enemyCurrentPokemonObject.moves[currentBattle.enemyIndex].type)<1)
    &&(calculateTypeEffectiveness(
    currentBattle.playerCurrentPokemonObject.types,
    currentBattle.enemyCurrentPokemonObject.moves[currentBattle.enemyIndex].type)>0)
    &&currentBattle.crit === 1){
      battleText1 = `It's not very effective!`
      battleText2 = ``
  }
  if((calculateTypeEffectiveness(
    currentBattle.playerCurrentPokemonObject.types,
    currentBattle.enemyCurrentPokemonObject.moves[currentBattle.enemyIndex].type)<1)
    &&(calculateTypeEffectiveness(
    currentBattle.playerCurrentPokemonObject.types,
    currentBattle.enemyCurrentPokemonObject.moves[currentBattle.enemyIndex].type)>0)
    &&currentBattle.crit === 1.5){
      battleText1 = `It's not very effective!`
      battleText2 = `It's a critical hit!`
  }
  if((calculateTypeEffectiveness(
    currentBattle.playerCurrentPokemonObject.types,
    currentBattle.enemyCurrentPokemonObject.moves[currentBattle.enemyIndex].type) === 0)){
      battleText1 = `It doen't affect ${currentBattle.playerCurrentPokemonObject.name}!`
      battleText2 = ``
  }
}
else{
  if((calculateTypeEffectiveness(
    currentBattle.enemyCurrentPokemonObject.types,
    currentBattle.playerCurrentPokemonObject.moves[currentBattle.moveIndex].type)>1)
    &&currentBattle.crit === 1){
      battleText1 = `It's super effective!`
      battleText2 = ``
  }
  if((calculateTypeEffectiveness(
    currentBattle.enemyCurrentPokemonObject.types,
    currentBattle.playerCurrentPokemonObject.moves[currentBattle.moveIndex].type)>1)
    &&currentBattle.crit === 1.5){
      battleText1 = `It's super effective!`
      battleText2 = `It's a critical hit!`
  }


  if((calculateTypeEffectiveness(
    currentBattle.enemyCurrentPokemonObject.types,
    currentBattle.playerCurrentPokemonObject.moves[currentBattle.moveIndex].type)<1)
    &&(calculateTypeEffectiveness(
    currentBattle.enemyCurrentPokemonObject.types,
    currentBattle.playerCurrentPokemonObject.moves[currentBattle.moveIndex].type)>0)
    &&currentBattle.crit === 1){
      battleText1 = `It's not very effective!`
      battleText2 = ``
  }
  if((calculateTypeEffectiveness(
    currentBattle.enemyCurrentPokemonObject.types,
    currentBattle.playerCurrentPokemonObject.moves[currentBattle.moveIndex].type)<1)
    &&(calculateTypeEffectiveness(
    currentBattle.enemyCurrentPokemonObject.types,
    currentBattle.playerCurrentPokemonObject.moves[currentBattle.moveIndex].type)>0)
    &&currentBattle.crit === 1.5){
      battleText1 = `It's not very effective!`
      battleText2 = `It's a critical hit!`
  }
  if((calculateTypeEffectiveness(
    currentBattle.enemyCurrentPokemonObject.types,
    currentBattle.playerCurrentPokemonObject.moves[currentBattle.moveIndex].type) === 0)){
      battleText1 = `It doesn't affect ${currentBattle.enemyCurrentPokemonObject.name}!`
      battleText2 = ``
  }
  if((calculateTypeEffectiveness(
    currentBattle.enemyCurrentPokemonObject.types,
    currentBattle.playerCurrentPokemonObject.moves[currentBattle.moveIndex].type) === 1)
    &&currentBattle.crit === 1.5){
      battleText1 = `It's a critical hit!`
      battleText2 = ``
  }
}
 


  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "green"
  if(playerRatio >0.5){
    playerColor = "green"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "green"
  if(enemyRatio >0.5){
    enemyColor = "green"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill("blue")
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "changes1"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    if(currentBattle.turnStart === "player"){
      if(currentBattle.playerCurrentPokemonObject.currentHP <= 0){
        currentBattle.state = "faint1"
      }
      else{
        currentBattle.state = "menu"
      }
    }
    else{
      if(currentBattle.enemyCurrentPokemonObject.currentHP <= 0){
        currentBattle.state = "faint1"
      }
      else{
        currentBattle.state = "menu"
      }
    }
  }
  
    if(currentBattle.turnStart === "player"){
      battleText1 = `${currentBattle.eEffect}`
      battleText2 = ``
      battleText3 = ``

    }

    if(currentBattle.turnStart === "enemy"){
      battleText1 = `${currentBattle.pEffect}`
      battleText2 = ``
      battleText3 = ``
    }

  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "green"
  if(playerRatio >0.5){
    playerColor = "green"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "green"
  if(enemyRatio >0.5){
    enemyColor = "green"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill("blue")
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "faint"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    if(currentBattle.turnStart === "player"){
      currentBattle.state = "expGain"
      currentBattle.playerCurrentPokemonObject.gainExp(currentBattle.enemyCurrentPokemonObject.baseExp+
      currentBattle.enemyCurrentPokemonObject.level*10,pokedex,moveDB);
    }
    else{
      if(noOfPokemonLeft > 0){
      currentBattle.state = "pokemon"
      }
      else{
        currentBattle.state = "blackOutMsg"
      }
    }
  }
  
    if(currentBattle.turnStart === "player"){
      if(currentBattle.type === "trainer"){
      battleText1 = `Foe ${currentBattle.enemyCurrentPokemonObject.name} fainted!`
      }
      else{
      battleText1 = `The wild ${currentBattle.enemyCurrentPokemonObject.name} fainted!`
      }
      battleText2 = ``
      battleText3 = ``

    }

    if(currentBattle.turnStart === "enemy"){
      battleText1 = `${currentBattle.playerCurrentPokemonObject.name} fainted!`
      battleText2 = ``
      battleText3 = ``
    }


  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "green"
  if(playerRatio >0.5){
    playerColor = "green"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "green"
  if(enemyRatio >0.5){
    enemyColor = "green"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill("blue")
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }
  
  if(currentBattle.state === "faint1"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    if(currentBattle.turnStart === "enemy"){
      currentBattle.state = "expGain"
      currentBattle.playerCurrentPokemonObject.gainExp(currentBattle.enemyCurrentPokemonObject.baseExp+
      currentBattle.enemyCurrentPokemonObject.level*10,pokedex,moveDB);
    }
    else{
      if(noOfPokemonLeft > 0){
      currentBattle.state = "pokemon"
      }
      else{
        currentBattle.state = "blackOutMsg"
      }
    }
  }
  
    if(currentBattle.turnStart === "enemy"){
      if(currentBattle.type === "trainer"){
      battleText1 = `Foe ${currentBattle.enemyCurrentPokemonObject.name} fainted!`
      }
      else{
      battleText1 = `The wild ${currentBattle.enemyCurrentPokemonObject.name} fainted!`
      }
      battleText2 = ``
      battleText3 = ``

    }

    if(currentBattle.turnStart === "player"){
      battleText1 = `${currentBattle.playerCurrentPokemonObject.name} fainted!`
      battleText2 = ``
      battleText3 = ``
    }


  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "green"
  if(playerRatio >0.5){
    playerColor = "green"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "green"
  if(enemyRatio >0.5){
    enemyColor = "green"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill("blue")
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  


  if(currentBattle.state === "endDialouge"){
    playerMoney += currentBattle.enemyObj.money
    let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
  enemyPokemon.visible = false

   fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  stroke(51)
  strokeWeight(1)
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  noStroke()
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)

 



  let playerColor = "green"
  if(playerRatio >0.5){
    playerColor = "green"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  if(playerHP === 0){
    playerRatio = 0.004
  }

  if(expgained === 0){
    expRatio = 0
  }

  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill("blue")
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  }
  if(currentBattle.state === "expGain"){
     fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);
    let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
  enemyPokemon.visible = false

   fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  stroke(51)
  strokeWeight(1)
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  noStroke()
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  if(currentBattle.type === "trainer"){
  trainerSprite.visible = true
  }
  else{
    trainerSprite.visible = false
  }
  
  battleText1 = `${playerPokemonName} gained ${currentBattle.playerCurrentPokemonObject.amount} EXP.  points!`
  if(currentBattle.playerCurrentPokemonObject.lv){
  battleText2 = `${playerPokemonName} grew to level ${playerPokemonlvl}!`
  }
  else{
    battleText2 = ``
  }
  battleText3 = ``
  
  

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.state = "endTrainerDialouge"
    currentBattle.keyCooldown = 15
  }

  let playerColor = "green"
  if(playerRatio >0.5){
    playerColor = "green"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  if(playerHP === 0){
    playerRatio = 0.004
  }

  if(expgained === 0){
    expRatio = 0
  }

  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill("blue")
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  }

  if(currentBattle.state === "endTrainerDialouge"){
  currentBattle.playerTeam[0].lv = false
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);
    let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
  enemyPokemon.visible = false

   fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  stroke(51)
  strokeWeight(1)
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  noStroke()
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  trainerSprite.visible = true

  if(currentBattle.type === "trainer"){
  battleText1 = `You defeated ${currentBattle.enemyName}!`
  battleText2 = `You got $${currentBattle.enemyObj.money} for winning!`
  battleText3 = ``
  }
  else{
  battleText1 = `You defeated the wild ${currentBattle.enemyCurrentPokemon}!`
  battleText2 = ``
  battleText3 = ``
  }
  

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.state = "endBattle"
    currentBattle.keyCooldown = 15
  }

  let playerColor = "green"
  if(playerRatio >0.5){
    playerColor = "green"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  if(playerHP === 0){
    playerRatio = 0.004
  }

  if(expgained === 0){
    expRatio = 0
  }
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  rect(405,265,playerRatio*220,5)
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  fill("blue")
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
    if(currentBattle.type === "trainer"){
  trainerSprite.visible = true
  }
  else{
    trainerSprite.visible = false
  }
  }
  if(currentBattle.state === "endBattle"){
    currentBattle.playerCurrentPokemon = ""
    currentBattle.enemyCurrentPokemon = ""
    trainerImg = null
    battlingChat = false
    playerPokemon.visible = false
    battle = false 
    player.visible = true
    move = true
    trainerSprite.visible = false
    currentBattle.enemyState = true
    if(currentBattle.enemyName === "Officer Jenny"){
        officers[0] = true 
        move = false
        currentBattle = null
    }
    if(currentBattle&&kai&&currentBattle.enemyName === "Kai"&&gameState === 3.1&&
      bgState === 1&&playerLocation === "route_1"){
        kai.startTalking()
        move = false
        currentBattle = null
        kai.sprite.visible = true
        kai.battled = true
    }
    currentBattle = null
  }
}

function checkName() {
  if (inp.value().trim() !== ""&&inp.value().length <11) {
    playerName = inp.value().trim();
    inp.remove();
    button.remove();
    textState = 4;
    chat = true;
    options = true
    inputCreated = false;
  }
}

function textHandler(){
    if(gameState === 0){
      textSize(30);
      textFont('Courier New');
      fill("white");
      text("Press Space To Continue",130,400)
    }
    if(gameState === 1){
      if(textState === 0){
        text1 = "Professor Thorne: Ah, welcome! You must be the new "
        text2 = "Trainer I've been expecting. I'm Professor Thorne,the"
        text3 = "Pokémon researcher of the Verdantia region. I study"
      }
      if(textState === 1){
        text1 = "how Pokémon and people grow together in this ever-"
        text2 = "changing world. Some treat Pokémon as friends,"
        text3 = "others challenge. This region is full of amazing"
      }
      if(textState === 2){
        text1 = "Pokémon and mysteries waiting to beuncovered. But "
        text2 = "before you begin your journey, I need to know — what"
        text3 = "is your name?"
      }
       if (textState === 3 && !inputCreated) {
        
      chat = false;
      text1 = "";
      text2 = "";
      text3 = "";
      inp = createInput();
      inp.position(185, 350);
      button = createButton('Submit Name');
      button.position(355, 350);
      button.mousePressed(checkName);
      inputCreated = true;
      options = false
    }
    if(textState === 4){
        options = true
        text1 = "So you're "+playerName+"?";
        text2 = ""
        text3 = ""
        chat = true
      }
      if(textState === 5){
        options = false
        text1 = "Alright "+playerName+" your journey ";
        text2 = "begins now. Explore, grow strong, and uncover what"
        text3 = "makes Pokémon and people truly connect."
      }
      if(textState === 6){
        text1 = "Let the Adventures Begin!";
        text2 = ""
        text3 = ""
      }
    }
}

function spriteHandler(){



  if(gameState === 2&&playerLocation === "auburn_town"&&bgState === 7.25){
    move = false
    interact = false
    if(player.y>=180){
      player.velocityY = -2*mult
      moving = true
      player.changeAnimation("up_w")
    }
    if(player.y<=180){
      player.velocityY = 0
      moving = false
      player.changeAnimation("up_s")
    }
  }

  if(gameState === 0){
    player.visible = false;
    interact = false
    move = false
    moving = false
  }

  if(gameState===1){
    player.visible = false
    interact = false
    move = false
    moving = false
    
    
    if(transitionCounter===6){
    obj1.visible = true;
    obj1.addImage(thorneSprite)
    if(textState === 3){
      obj1.addImage(playerSpriteFront)
    }
    else{
      obj1.addImage(thorneSprite)
      obj1.scale = 1
    }
  }
  }

  if(gameState === 2){
    obj1.visible = false;
    if(transition === true){
      player.visible = true
    }
  }

}

function NPCS() {

  if (gameState === 2 && bgState === 1 && playerLocation === "auburn_town") {
  if (temp === 0 && !mom) {
    mom = new friendlyNPC(200, 285, "Mom", [
      "Mom:Oh, you're finally awake! Professor Thorne stopped|as possible. It sounded serious, so don’t keep him",
      "by earlier—he said he has something. important for|waiting!",
      "you. He wants you to meet him at his lab as soon|"
    ], false, momleftstand);
    npcArray.push(mom);

    mom.sprite.addAnimation("up_w", momupwalk);
    mom.sprite.addAnimation("down_w", momdownwalk);
    mom.sprite.addAnimation("left_w", momleftwalk);
    mom.sprite.addAnimation("right_w", momrightwalk);
    mom.sprite.addAnimation("up_s", momupstand);
    mom.sprite.addAnimation("down_s", momdownstand);
    mom.sprite.addAnimation("left_s", momleftstand);
    mom.sprite.addAnimation("right_s", momrightstand);
  }
  if (temp === 0 && mom && !mom.func && !mom.isTalking) {
    mom.sprite.velocityY = 2 * mult;
    mom.sprite.changeAnimation("down_w");
    if(mom.sprite.y>=300){
      mom.sprite.changeAnimation("right_w")
      mom.sprite.velocityY = 0
      mom.sprite.velocityX = 2*mult
    }

    if (mom.sprite.x >= 500) {
      mom.sprite.velocityX = 0;
      mom.sprite.changeAnimation("right_s");

      if (!mom.isTalking) {
        mom.startTalking();
        chat = true;
        move = false;
      }
    }
  }

  if(mom&&!mom.isTalking&&temp === 1){
    if (mom.isTouching(player) && keyWentDown("space") &&!chat&&!battle) {
  chat = true;
  mom.facePlayer(playerDirection);
  mom.startTalking();
  mom.justStartedDialogue = true;  // Prevent skipping
}
  }

  if (mom && mom.isTalking) {
    mom.talk();

    if (keyWentDown("space")) {
      mom.nextLine();

      if (!mom.isTalking) {
        mom.func = true;
        chat = false;
        
      }
    }
  }

  if (mom && mom.func && temp === 0 && !mom.isTalking) {
    mom.sprite.velocityX = -2 * mult;
    mom.sprite.changeAnimation("left_w");

    if (mom.sprite.x <= 200) {
      mom.sprite.velocityX = 0;
      mom.sprite.velocityY = -2*mult;
      mom.sprite.changeAnimation("up_w");         
    }
    if(mom.sprite.y<=284&&mom.sprite.x <= 200){
        mom.sprite.velocityY = 0
        mom.sprite.changeAnimation("left_s");
        temp = 1;
      move = true;
      mom.dialogue = ["sadsa","adasda","dasda"]

      }
  }
}



  if(gameState === 2.5&&bgState === 1&&playerLocation === "auburn_town"&&!mom){
    mom = new friendlyNPC(200,285,"Mom",[
        `Mom: Hey, ${playerName} back already? So you got your|
        before heading out. Make sure to take care of yourself|
        there.|
        Oh! Almost forgot—here, take these. Your very own|
        You’ve got this. Go have some fun and stay safe!`,

        `first Pokémon, huh? Professor Thorne said you'd be|
         By the way, press the Enter key to open your menu. You|
           |
         Running Shoes! Now you can dash around faster by pressing.|
         I’ll be here if you need a break—or laundry done.`,

        `starting your journey today. I figured you’d swing by|
        can check your Bag, Pokémon, Pokédex, and Trainer ID|
          |
        the F key.|
          
        `],false,momdownstand)
        move = false;
        npcArray.push(mom);

        mom.sprite.addAnimation("up_w", momupwalk);
        mom.sprite.addAnimation("down_w", momdownwalk);
        mom.sprite.addAnimation("left_w", momleftwalk);
        mom.sprite.addAnimation("right_w", momrightwalk);
        mom.sprite.addAnimation("up_s", momupstand);
        mom.sprite.addAnimation("down_s", momdownstand);
        mom.sprite.addAnimation("left_s", momleftstand);
        mom.sprite.addAnimation("right_s", momrightstand);
    }
    if(gameState === 2.5&&bgState === 1&&playerLocation === "auburn_town"&&mom){    
          mom.sprite.changeAnimation("left_s")
          move = false
          player.changeAnimation("up_w",playerupwalk)
          player.velocityY = -2*mult;
          if(player.y<=345){
            player.velocityY = 0
            player.changeAnimation("left_w",playerleftwalk)
            player.velocityX = -2*mult
          
        }
        if(player.x<=200){
              player.velocityX = 0
              player.changeAnimation("up_s",playerupstand)
              mom.sprite.changeAnimation("down_s")
              if(!mom.isTalking){
                mom.startTalking();
                chat = true
              }
            }
      if (mom && mom.isTalking) {
    mom.talk();

    if (keyWentDown("space")) {
      mom.nextLine();

      if (!mom.isTalking) {
        mom.func = true;
        chat = false;
        move = true;
        runningShoes = true
        menuOpen = true
        mom.sprite.changeAnimation("left_s")
        gameState = 3
      }
    }
  }
          }


    if(bgState === 7.25&&gameState === 2&&playerLocation === "auburn_town"&&!thorne){
      thorne = new friendlyNPC(104,120,"Professor Thorne",[
        `Professor Thorne: There you are, ${playerName}. Right|
        —now you’re setting out on your own. But this isn’t just|
        changes. I need someone I trust with eyes and ears out|
        migration patterns, vanishing habitats, interference. It|
        With this Pokédex, you’ll help document Pokémon across|
        Take your time in choosing the one that feels right.|
        Your friend Kai was here earlier. He picked his and|
        So then... which Pokemon you will choose? `,

        `on time, as always. I've prepared for this day for a|
        any journey. The Verdantia League requested this. They|
        there. There've been unsettling reports. Pokémon behaving|
        may be nothing—but it may be something big.|
        Verdantia. Observations, battles, bonds—all count.|
        Each is strong and will teach you something. This|
        couldn’t stop talking about staying ahead— he’s fiery,|
        
        `,

        `while now. You’ve grown up around Pokémon all your life|
        tasked me with researching how Pokémon here adapt to|
        strangely, changes in evolution. Climate shifts, new|
        |
        I wouldn’t send you alone. Here I have three partners.|
        journey will be an important chapter of your life|
        that one. Friendly rivalry is good fuel.|
        `]
    ,false,thornedownstand);
      npcArray.push(thorne)
      thorne.sprite.scale = 1.3
      thorne.sprite.addAnimation("up_w", thorneupwalk);
      thorne.sprite.addAnimation("down_w", thornedownwalk);
      thorne.sprite.addAnimation("left_w", thorneleftwalk);
      thorne.sprite.addAnimation("right_w", thornerightwalk);
      thorne.sprite.addAnimation("up_s", thorneupstand);
      thorne.sprite.addAnimation("down_s", thornedownstand);
      thorne.sprite.addAnimation("left_s", thorneleftstand);
      thorne.sprite.addAnimation("right_s", thornerightstand);
    }
    if(bgState === 7.25&&gameState === 2.5&&playerLocation === "auburn_town"&&!thorne){
      thorne = new friendlyNPC(104,120,"Professor Thorne",
        ["Professor Thorne: dcidsnckkxznc","sda","ada"],false,thornedownstand)
      thorne.sprite.scale = 1.3
      npcArray.push(thorne)
    }
      if (thorne && gameState === 2 && playerLocation === "auburn_town") {
  if (player.velocityY === 0 && !thorne.isTalking && !thorne.func) {
    chat = true;
    thorne.startTalking();
  }

  if (thorne.isTalking) {
    thorne.talk();
    if (keyWentDown("space")) {
      thorne.nextLine();
      if (!thorne.isTalking&&noOfPartyPokemon === 0&&bgState === 7.25) {
        chat = false;
        options = true;
        thorne.func = true;
        move = false
      }
      if (!thorne.isTalking&&noOfPartyPokemon === 1&&bgState === 7.25) {
        chat = false;
        options = false;
        thorne.func = true;
        move = true
        gameState = 2.5
      }
    }
  }
}

  if(gameState === 3&&bgState === 5&&!npc1&&playerLocation === "auburn_town"&&!battle){
    const enemyPokemon1Moves = ["Tackle"]
        const enemyPokemon1 = new Pokemon("Lillipup",2,pokedex,moveDB,[],enemyPokemon1Moves
          ,1
        )
      npc1 = new enemyNPC(455,50,"Officer Jenny",[
        `Officer Jenny: Well well, you’ve got your starter now.|
        invincible, how about a quick lesson?|
        Let’s battle. Nothing too serious —I just want to see|
        Here's how to battle: Select FIGHT when it's your turn,`,
        
        `And I hear you’ve spoken with your mom. That’s good.|
        |
        how you handle your new partner!|
        then choose a move. Remember - moves that match your`,

        `Before you go running into tall grass thinking you’re|
        |
        |
        Pokémon's type will do more damage!`
      ],false,officerdownstand,false,[enemyPokemon1],500)
      npc1.sprite.scale = 1.1
      npcArray.push(npc1)
      npc1.sprite.addAnimation("up_s",officerupstand)
      npc1.sprite.addAnimation("up_w",officerupwalk)
      npc1.sprite.addAnimation("down_s",officerdownstand)
      npc1.sprite.addAnimation("down_w",officerdownwalk)
      npc1.sprite.addAnimation("left_s",officerleftstand)
      npc1.sprite.addAnimation("left_w",officerleftwalk)
      npc1.sprite.addAnimation("right_s",officerrightstand)
      npc1.sprite.addAnimation("right_w",officerrightwalk)
  }

  if(gameState === 3&&bgState === 5&&npc1&&playerLocation === "auburn_town"){
      npc1.sprite.addAnimation("up_s",officerupstand)
      npc1.sprite.addAnimation("up_w",officerupwalk)
      npc1.sprite.addAnimation("down_s",officerdownstand)
      npc1.sprite.addAnimation("down_w",officerdownwalk)
      npc1.sprite.addAnimation("left_s",officerleftstand)
      npc1.sprite.addAnimation("left_w",officerleftwalk)
      npc1.sprite.addAnimation("right_s",officerrightstand)
      npc1.sprite.addAnimation("right_w",officerrightwalk)


      if (npc1.isTouching(player) && keyWentDown("space") &&!chat&&!battle) {
  chat = true;
  npc1.facePlayer(playerDirection);
  npc1.startTalking();
  npc1.justStartedDialogue = true;  // Prevent skipping
}

if (npc1.isTalking) {
  npc1.talk();
  
  if (keyWentDown("space")) {
    if (npc1.justStartedDialogue) {
      npc1.justStartedDialogue = false;
    } else {
      npc1.nextLine();

      if (!npc1.isTalking && bgState === 5 && playerLocation === "auburn_town"&&
        officers[0] === false) {
        chat = false;
        move = false;
        npc1.justStartedDialogue = false
        currentBattle = new Battle(party,npc1.team,npc1.name,"transition",
          'officer',npc1,"trainer");
      }
    }
  }
}

if (
  bgState === 5 &&
  playerLocation === "auburn_town" &&
  npc1.sprite.x === 455 &&
  npc1.sprite.y === 50 &&
  officers[0] === true &&
  !npc1.isTalking &&
  !npc1.readyToMove &&
  !npc1.func
) {
  npc1.dialogue = [
    `Officer Jenny: Not bad at all! You've got some spark.|
    headache. But remember — confidence is great,`,

    `That partner of yours? You two might make a solid team.|
    overconfidence isn’t. Now go on. There’s a whole world`,

    `Keep this up and you’ll be giving gym leaders a real|
     waiting for you. Here I'll heal your Pokemon for now.`
  ];
        npc1.sprite.addAnimation("up_s",officerupstand)
      npc1.sprite.addAnimation("up_w",officerupwalk)
      npc1.sprite.addAnimation("down_s",officerdownstand)
      npc1.sprite.addAnimation("down_w",officerdownwalk)
      npc1.sprite.addAnimation("left_s",officerleftstand)
      npc1.sprite.addAnimation("left_w",officerleftwalk)
      npc1.sprite.addAnimation("right_s",officerrightstand)
      npc1.sprite.addAnimation("right_w",officerrightwalk)
  
  npc1.func = true;
  npc1.startTalking();
}

if (
  bgState === 5 &&
  playerLocation === "auburn_town" &&
  npc1.sprite.x === 455 &&
  npc1.sprite.y === 50 &&
  officers[0] === true &&
  npc1.func === true
) {
  if (npc1.isTalking) {
    npc1.talk();

    if (keyWentDown("space")) {
      if (npc1.justStartedDialogue) {
        npc1.justStartedDialogue = false;
      } else {
        npc1.nextLine();
      }
    }
  }

  if (!npc1.isTalking && !npc1.readyToMove) {
    npc1.readyToMove = true;
   
  }
}

  if (npc1.readyToMove) {
    pokemonHeal()
    npc1.sprite.velocityX -= 1;
    npc1.sprite.changeAnimation("left_w")
    
  }
  if (npc1.sprite.x <= 378) {
    npc1.sprite.velocityX = 0
    npc1.sprite.changeAnimation("right_s")
      npc1.readyToMove = false;
      gameState = 3.1
      move = true
      t7 = new transitionObject(452,1,108,10,1,288,460,"up","up","purple","auburn_town","route_1")
    }
}



  if(gameState === 3.1&&playerLocation === "route_1"&&bgState === 1&&!kai
    &&!currentBattle
  ){
    teamMaker()
    kai = new enemyNPC(288,188,"Kai",[
      `Kai: Hey! There you are ${playerName}. Professor Thorne|
       you, so I figured I’d help out while I’m ahead. Let’s|
       understanding it makes a big difference in battle. Of|
       others, and a few don’t even work at all. You’ve got|
       Trainer School—they cover all the core stuff. Alright,|
       Get ready!`,

      `asked me to make sure you’re solid on the basics before|
       start simple—Fire beats Grass, Grass beats Water, and|
       course, there are way more types out there—Electric,|
       to use matchups to your advantage if you want to win|
       enough talk—let’s see how you’re doing in a real|`,

      `heading too far. I started my journey a little before |
      Water beats Fire. It’s called a type triangle, and |
      Flying, Ground, and so on. Some types barely scratch |
      consistently. If you're ever confused, check out the|
      battle! I'll battle you with a Pokemon I just caught|`
    ],false,
      kaidownstand,false,enemyCreatedTeam,1000)
      kai.sprite.scale = 1.1 
          npcArray.push(kai)
      kai.sprite.addAnimation("up_s",kaiupstand)
      kai.sprite.addAnimation("down_s",kaidownstand)
      kai.sprite.addAnimation("left_s",kaileftstand)
      kai.sprite.addAnimation("right_s",kairightstand)

      kai.sprite.addAnimation("up_w",kaiupwalk)
      kai.sprite.addAnimation("down_w",kaidownwalk)
      kai.sprite.addAnimation("left_w",kaileftwalk)
      kai.sprite.addAnimation("right_w",kairightwalk)
      
  }
  if(gameState === 3.1&&playerLocation === "route_1"&&bgState === 1&&kai
    &&!kai.isTalking&&!currentBattle
  ){
      kai.sprite.changeAnimation("up_s")
      if(player.y>245){
      player.velocityY = -2*mult
      }
      else{
        player.velocityY = 0
      }
      player.changeAnimation("up_w")
      if(player.y <= 245){
        player.velocityY = 0
        player.changeAnimation("up_s")
        kai.sprite.changeAnimation("down_s")
        kai.startTalking()
      }

    }      

    if(gameState === 3.2&&playerLocation === "route_1"&&bgState === 1&&kai
    &&!kai.isTalking
  ){
      
      if(kai.sprite.y<=113){
        kai.sprite.velocityY = 0
        player.velocityY = 0
        kai.sprite.changeAnimation("up_w")
        player.changeAnimation("up_w")
        if(catchState!== "end"){
        
        catchingTutorial()    
        }
        if(catchState === " "){
        catchState = "intro"
        }
      }
    }    
    
    if(gameState === 3.2&&playerLocation === "route_1"&&bgState === 1&&kai&&!kai.isTalking){
      kai.talk();
      let kaiNewDialouge = [
        `And that’s how you catch a Pokémon! Pretty smooth, huh?|
        Pokémon takes practice. You want to get their health low|
        these. Five Poké Balls. Think of it as a little head|
        other again soon. Next time we meet, I’ll teach you`,

        `Though... I probably should’ve weakened it a bit more|
        —lower than I did—so it’s easier to snag them without|
        start from someone who's been at it a bit longer. I’ve|
        something new—so keep training, alright? You’ve got real`,
   
        `first. That was cutting it close. Anyway, catching|
        wasting Poké Balls. Speaking of which, here—take|
        got to get going, but we’ll definitely run into each|
        potential. Just don’t fall too far behind!`
      ]
      
      kai.dialogue = kaiNewDialouge
      if (keyWentDown("space")) {
            kai.nextLine();
      }

    }  

     if(gameState === 3.3&&playerLocation === "route_1"&&bgState === 1&&kai&&kai.isTalking){
        kai.talk();
      let kaiNewDialouge = [
        `And that’s how you catch a Pokémon! Pretty smooth, huh?|
        Pokémon takes practice. You want to get their health low|
        these. Five Poké Balls. Think of it as a little head|
        other again soon. Next time we meet, I’ll teach you`,

        `Though... I probably should’ve weakened it a bit more|
        —lower than I did—so it’s easier to snag them without|
        start from someone who's been at it a bit longer. I’ve|
        something new—so keep training, alright? You’ve got real`,
   
        `first. That was cutting it close. Anyway, catching|
        wasting Poké Balls. Speaking of which, here—take|
        got to get going, but we’ll definitely run into each|
        potential. Just don’t fall too far behind!`
      ]
      kai.dialogue = kaiNewDialouge
      if (keyWentDown("space")) {
            kai.nextLine();
      }
            if(!kai.isTalking){
        kai.sprite.changeAnimation("up_w")
        kai.sprite.velocityY = -2
      }
    }  

    if(gameState === 3.3&&playerLocation === "route_1"&&bgState === 1&&kai
      &&kai.sprite.y<-20){
        kai.sprite.remove()
        kai = null
        move = true
        
      }
    
    if(gameState === 3.1&&playerLocation === "route_1"&&bgState === 1&&kai&&kai.isTalking){
        kai.talk();
        if (keyWentDown("space")) {
            kai.nextLine();
            if(kai&&!kai.isTalking&&gameState === 3.1&&playerLocation === "route_1"&&bgState === 1&&
      kai.battled === false&&player.y <= 245){
        currentBattle = new Battle(party,kai.team,"Kai","transition","kai",kai,"trainer")
        chat = false
        let kaiNewDialouge = [
      `Kai: Aww man… my Zigzagoon fainted already. Though to be|
       You’ve got real potential. Guess I better watch out|
       If you’re heading through tall grass, keep your eyes`,

      `fair… that wasn’t my main partner. Zigzagoon’s still|
       next time. Alright, time for the next step — catching|
       open — wild Pokémon love hiding in there. I'll show you`,

      `new to the team. You did great though — seriously.|
       Pokémon! It’s not just about tossing Pokéballs.|
       how to it's done.
       `
    ]
    kai.dialogue = kaiNewDialouge
        if(battle||!tempSprite.visible){
          kai.sprite.visible = false
        }
        else{
          kai.sprite.visible = true;
        }
    }
    if(!kai.isTalking&&kai.battled){
      player.changeAnimation("up_w")
      kai.sprite.changeAnimation("up_w")
      moving = true
      playerDirection = "up"
      gameState = 3.2
      kai.sprite.velocityY = -2
      player.velocityY = -2
      
    }
        }
        
      }
    
    
    
  }



function transitionHandler(){
  if(playerLocation === "auburn_town"){
    if(bgState === 0&&tc === false){
      t1 = new transitionObject(75,270,10,50,1,550,300,"left","left","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      tc = true
    }
    if(bgState === 1&&tc === false){
      t1 = new transitionObject(550,300,10,50,0,90,260,"right","right","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(407,450,64,30,2,308,320,"down","down","blue","auburn_town","auburn_town")
      tc = true
    }
    if(bgState === 2&&tc === false){
      t1 = new transitionObject(315,315,50,10,1,405,440,"up","up","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(85,60,40,10,1.5,152,397,"up","up","blue","auburn_town","auburn_town")
      t3 = new transitionObject(0,326,10,140,3,620,()=>player.y,"left","left","green","auburn_town","auburn_town")
      tc = true
    }
    if(bgState === 3&&tc === false){
      t1 = new transitionObject(637,302,10,70,2,20,()=>player.y,"right","right","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(0,285,10,234,4,620,()=>player.y,"left","left","blue","auburn_town","auburn_town")
      t3 = new transitionObject(53,0,76,10,5,()=>player.x,460,"up","up","green","auburn_town","auburn_town")
      t4 = new transitionObject(245,0,70,10,5,()=>player.x,460,"up","up","yellow","auburn_town","auburn_town")
      t5 = new transitionObject(456,0,186,10,5,()=>player.x,460,"up","up","pink","auburn_town","auburn_town")
      t6 = new transitionObject(471,254,42,10,3.1,152,397,"up","up","orange","auburn_town","auburn_town")
      tc = true
    }
    if(bgState === 4&&tc === false){
      t1 = new transitionObject(637,270,10,235,3,20,()=>player.y,"right","right","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(471,220,42,10,4.1,152,397,"up","up","blue","auburn_town","auburn_town")
      tc = true
    }
    if(bgState === 5&&tc === false){
      t1 = new transitionObject(52,474,76,10,3,()=>player.x,20,"down","down","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(262,474,106,10,3,()=>player.x,20,"down","down","blue","auburn_town","auburn_town")
      t3 = new transitionObject(456,474,186,10,3,()=>player.x,20,"down","down","green","auburn_town","auburn_town")
      t4 = new transitionObject(640,60,10,100,6,20,()=>player.y,"right","right","yellow","auburn_town","auburn_town")
      t5 = new transitionObject(640,305,10,84,6,20,()=>player.y,"right","right","pink","auburn_town","auburn_town")
      t6 = new transitionObject(0,395,10,130,7,620,()=>player.y,"left","left","orange","auburn_town","auburn_town")
      if(gameState >= 3.1){
         t7 = new transitionObject(452,1,108,10,1,288,460,"up","up","purple","auburn_town","route_1")
      }
      t8   = new transitionObject(246,412,40,10,5.2,405,440,"up","up","white","auburn_town","auburn_town")
      tc = true
    }
    if(bgState === 6&&tc === false){
      t1 = new transitionObject(0,305,10,84,5,620,()=>player.y,"left","left","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(20,250,50,10,6.66,152,397,"up","up","blue","auburn_town","auburn_town")
      t3 = new transitionObject(340,220,50,10,6.33,405,440,"up","up","green","auburn_town","auburn_town")
      t4 = new transitionObject(0,53,10,56,5,620,()=>player.y,"left","left","yellow","auburn_town","auburn_town")
      tc = true
    }
    if(bgState === 7&&tc === false){
      t1 = new transitionObject(640,395,10,150,5,20,()=>player.y,"right","right","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(470,320,30,10,7.25,104,400,"up","up","blue","auburn_town","auburn_town")
      tc = true
    }
    if(bgState === 7.25&&tc === false){
      t1 = new transitionObject(103,430,46,20,7,470,340,"down","down","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      tc = true
    }
    if(bgState === 6.66&&tc === false){
      t1 = new transitionObject(154,440,58,10,6,20,260,"down","down","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      tc = true
    }
    if(bgState === 3.1&&tc === false){
      t1 = new transitionObject(154,440,58,10,3,465,260,"down","down","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      tc = true
    }
    if(bgState === 4.1&&tc === false){
      t1 = new transitionObject(154,440,58,10,4,465,230,"down","down","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      tc = true
    }
    if(bgState === 1.5&&tc === false){
      t1 = new transitionObject(154,440,58,10,2,81,72,"down","down","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      tc = true
    }
    if(bgState === 5.25&&tc === false){
      t1 = new transitionObject(75,270,10,50,5.2,550,300,"left","left","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      tc = true
    }
    if(bgState === 5.2&&tc === false){
      t1 = new transitionObject(550,300,10,50,5.25,90,260,"right","right","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(407,450,64,30,5,242,432,"down","down","blue","auburn_town","auburn_town")
      tc = true
    }
    if(bgState === 6.4&&tc === false){
      t1 = new transitionObject(75,270,10,50,6.33,550,300,"left","left","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      tc = true
    }
    if(bgState === 6.33&&tc === false){
      t1 = new transitionObject(550,300,10,50,6.4,90,260,"right","right","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(407,450,64,30,6,337,224,"down","down","blue","auburn_town","auburn_town")
      tc = true
    }

  }
  if(playerLocation === "route_1"){
    if(bgState === 1&&tc === false){
      t1 = new transitionObject(288,480,184,10,5,456,28,"down","down","red","route_1","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(257,0,254,10,2,()=>player.x,460,"up","up","blue","route_1","route_1")
      tc = true
    }
    if(bgState === 2&&tc === false){
      t1 = new transitionObject(257,480,254,10,1,()=>player.x,10,"down","down","red","route_1","route_1")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(347.5,0,325,10,3,()=>player.x,460,"up","up","blue","route_1","route_1")
      tc = true
    }
    if(bgState === 3&&tc === false){
      t1 = new transitionObject(347.5,480,325,10,2,()=>player.x,10,"down","down","red","route_1","route_1")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(350,0,322,10,4,()=>player.x,412,"up","up","blue","route_1","route_1")
      tc = true
    }
    if(bgState === 4&&tc === false){
      t1 = new transitionObject(350,480,312,10,3,()=>player.x,50,"down","down","red","route_1","route_1")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(349,0,190,10,0,()=>player.x,460,"up","up","blue","route_1","")
      tc = true
    }
  }
}

function calculateTypeEffectiveness(defenderTypes, moveType) {
  multiplier = 1
  for(let defType of defenderTypes){
  const data = typeChart[defType]
  if(!data){
    throw new Error(`Not found`);
  }

  if(data.immuneTo.includes(moveType)){
    multiplier *= 0
  }
  else if(data.weakTo.includes(moveType)){
    multiplier *= 2
  }
  else if(data.resists.includes(moveType)){
    multiplier *= 0.5
  }

  }
  return multiplier;
}

let transitionFunctionBoolean = null;
let tempSprite, tCharge;

function transitionFunction(transitionState) {
  if (transitionFunctionBoolean) {
    // Only create the sprites once
    if (tempSprite.visible === false) {
      tCharge = createSprite(0, 0, 10, 10);
      tCharge.visible = false;
      tCharge.velocityY = 50;
    }

    tCharge.y += tCharge.velocityY;

    if (tCharge.y > 3000) {
      transitionState.state = "intro";
      if(transitionState.type === "trainer"){
        trainerImg = loadImage("sprites/"+transitionState.transitionState+".png")
      }
      else{
        trainerImg = loadImage("front/"+transitionState.enemyCurrentPokemon+".png")
      }
      transitionFunctionBoolean = false; // Stop transition
      tempSprite.visible = false
      battle = true
    }

    tempSprite.visible = (transitionState.state === 'transition');
  }

}




function introDialouge(h1){
//works
if(h1.type === "trainer"){
trainerImg = loadImage("sprites/"+h1.trainerClass+".png")
}
else{
  trainerImg = loadImage("front/"+h1.enemyTeam[0].name+".png")
}
playerBack = loadImage("playerBack.png")
  if(battleChat === true&&!trainerSprite&&!playerSprite){
  
  trainerSprite = createSprite(485,104)
  trainerSprite.addImage(trainerImg)
  if(h1.type === "trainer"){
  trainerSprite.scale = 1.2
  trainerSprite.x = 485
  trainerSprite.y = 104
  }
  else{
    trainerSprite.scale = 1
    trainerSprite.x = 495
  trainerSprite.y = 130
  }

  playerSprite = createSprite(154,208)
  
  playerSprite.addImage(playerBack)
  playerSprite.scale = 1.55

  battle = true
 

  
  }
  
  drawSprites()


}

function drawIntroUI(battle) {
  //works
  battlingChat = true
  if(battle.type === "trainer"){
  battleText1 = `${battle.enemyName} would like to battle!`
  }
  else{
    battleText1 = `A wild ${battle.enemyCurrentPokemon} appeared!`
  }
  battleText2 = ``
  battleText3 = ``
 
  if(keyDown("space")){
    battle.state = 'send'
  }

}


let pokemonSent = false, playerPokemon, enemyPokemon;



function sendPokemon(trainerPokemon) {
  if (!pokemonSent) {
    enemyPokemonFront = loadImage("front/" + trainerPokemon.enemyCurrentPokemon + ".png");
    playerPokemonBack = loadImage("back/" + trainerPokemon.playerCurrentPokemon + ".png");
    pokemonSent = true;
  }

  if (pokemonSent) {
    playerPokemon.addImage(playerPokemonBack);
    playerPokemon.visible = true;
    enemyPokemon.addImage(enemyPokemonFront);
    enemyPokemon.visible = true;

    trainerSprite.visible = false
    playerSprite.visible = false

  }

  fill('#70C1B3');
  strokeWeight(1);
  stroke(51);
  rect(15, 335, 610, 130);

  fill('white');
  strokeWeight(1);
  stroke(51);
  rect(30, 345, 280, 110);

  textSize(20);
  textFont('Courier New');
  fill("black");
  noStroke();

}


function fightMenu(h1){

    fill('#70C1B3');
  strokeWeight(1);
  stroke(51);
  rect(15, 335, 610, 130);

  fill('white');
  strokeWeight(1);
  stroke(51);
  rect(25, 345, 590, 110);

        if(h1.moveIndex === 0){
         fill('red');
        strokeWeight(1);
        stroke(51);
        rect(32.5, 352.5, 285, 45);
          if(keyWentDown("right")){
            h1.moveIndex = 1
          }
          if(keyWentDown("down")){
            h1.moveIndex = 2
          }
          if(keyWentDown("space")){
            playerHasChosen = true
            h1.state = 'enemyAI'
            return h1.moveIndex
          }
        }
    
        if(h1.moveIndex === 1){
         fill('red');
        strokeWeight(1);
        stroke(51);
        rect(322.5, 352.5, 285, 45);
          if(keyWentDown("left")){
            h1.moveIndex = 0
          }
          if(keyWentDown("down")){
            h1.moveIndex = 3
          }
          if(keyWentDown("space")){
            playerHasChosen = true
            h1.state = 'enemyAI'
            return h1.moveIndex
          }
        }
    
        if(h1.moveIndex === 2){
         fill('red');
        strokeWeight(1);
        stroke(51);
        rect(32.5, 402.5, 285, 45);
          if(keyWentDown("right")){
            h1.moveIndex = 3
          }
          if(keyWentDown("up")){
            h1.moveIndex = 0
          }
          if(keyWentDown("space")){
            playerHasChosen = true
            h1.state = 'enemyAI'
            return h1.moveIndex
          }
        }
    
        if(h1.moveIndex === 3){
         fill('red');
        strokeWeight(1);
        stroke(51);
        rect(322.5, 402.5, 285, 45);
          if(keyWentDown("left")){
            h1.moveIndex = 2
          }
          if(keyWentDown("up")){
            h1.moveIndex = 1
          }
          if(keyWentDown("space")){
            playerHasChosen = true
            h1.state = 'enemyAI'
            return h1.moveIndex
          }
        }
    
    fill('lightgrey');
  strokeWeight(2);
  stroke(51);
  rect(35, 355, 280, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text(`${h1.playerCurrentPokemon.moves[0]}`,40,382.5)
  
  fill('lightgrey');
  strokeWeight(2);
  stroke(51);
  rect(325, 355, 280, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text(`${h1.playerCurrentPokemon.moves[1]}`,330,382.5)
  
  fill('lightgrey');
  strokeWeight(2);
  stroke(51);
  rect(35, 405, 280, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text(`${h1.playerCurrentPokemon.moves[2]}`,40,432.5)
  
  fill('lightgrey');
  strokeWeight(2);
  stroke(51);
  rect(325, 405, 280, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text(`${h1.playerCurrentPokemon.moves[3]}`,330,432.5)
     
  }

function enemyAI(h1){
  let noOfMoves = h1.enemyCurrentPokemonObject.moves.length;
  let movePoints = [0,0,0,0];

  for(let i = 0;i<noOfMoves;i++){
    let currentMove = h1.enemyCurrentPokemonObject.moves[i];
    if(currentMove.type === h1.enemyCurrentPokemonObject.types[0]||
      currentMove.type === h1.enemyCurrentPokemonObject.types[1]){
        movePoints[i]++;
    }
    if(currentMove.category === "Status"){
      movePoints[i]-=2
    }
    let currentMoveMultiplier = calculateTypeEffectiveness(
      h1.playerCurrentPokemonObject.types,
    h1.enemyCurrentPokemonObject.moves[i].type)

    if(currentMoveMultiplier === 0.25){
      movePoints[i]-=4
    }
    if(currentMoveMultiplier === 0.5){
      movePoints[i]-=2
    }
    if(currentMoveMultiplier === 2){
      movePoints[i]+=2
    }
    if(currentMoveMultiplier === 4){
      movePoints[i]+=4
    }
    if(currentMoveMultiplier === 0){
      movePoints[i]-=10
    }
  }

  let enemyMoveIndex = 0
  for(let i = 0;i<noOfMoves;i++){
      if(movePoints[enemyMoveIndex]<movePoints[i]){
          enemyMoveIndex = i
      }
      if(movePoints[enemyMoveIndex] === movePoints[i]){
        if(h1.enemyCurrentPokemonObject.moves[i].power>
        h1.enemyCurrentPokemonObject.moves[enemyMoveIndex].power){
        enemyMoveIndex = i
      }
      else if(h1.enemyCurrentPokemonObject.moves[i].power<
        h1.enemyCurrentPokemonObject.moves[enemyMoveIndex].power){
          enemyMoveIndex = enemyMoveIndex
        }
      
      else{
        enemyMoveIndex = (h1.enemyCurrentPokemonObject.moves[i].accuracy>
        h1.enemyCurrentPokemonObject.moves[enemyMoveIndex].accuracy)?i:enemyMoveIndex
      }
    }
  }
  h1.enemyIndex = enemyMoveIndex;
  h1.turnFinder()
  if(h1.type === "trainer"){
    h1.currentMove = moveDB[h1.enemyCurrentPokemonObject.moves[h1.enemyIndex]]
  }
  else{
    h1.currentMove = h1.enemyCurrentPokemonObject.moves[h1.enemyIndex]
  }
    h1.eCurrentMove = h1.currentMove.name
  if(h1.enemyPokemonLeft>0){
  h1.state = "battling";
  }
  if(h1.turnStart === "player"){
    h1.turn = "player"
    h1.playerAttack()
    h1.enemyCurrentPokemonObject.currentHP -= h1.playerDamage
  }
  else{
    h1.enemyAttack()
    h1.turn = "enemy"
    h1.playerCurrentPokemonObject.currentHP -= h1.enemyDamage
  }
  

}

function pokemonHeal(){

  let partyLength = party.length
  for(let i = 0;i<partyLength;i++){
      party[i].currentHP = party[i].stats.hp
      let moveLength = party[i].moves.length
      for(let j = 0;j<moveLength;j++){
          party[i].moves[j].currentPP = party[i].moves[j].pp
      }
  }

}

function teamMaker(){

  if(gameState === 3.1&&playerLocation === "route_1"&&bgState === 1){
      let pokemon1Moves = ["Tackle"]
      let pokemon1 = new Pokemon("Zigzagoon",3,pokedex,moveDB,[],pokemon1Moves,1)
      enemyCreatedTeam.push(pokemon1)

  }
  

}

function drawMenu(){

  if(menuPage === "party"){
    background(partybg)
      if(keyWentDown("right")){
    if(subIndex === -10){
    pokemonIndex++
    if(pokemonIndex>=party.length+1){
      pokemonIndex = 0
    }
    }
    else{
      subIndex++
      if(subIndex>2){
        subIndex = 0
      }
    }
  }
  if(keyWentDown("left")){
    if(subIndex === -10){
    pokemonIndex--
    if(pokemonIndex<=-1){
      pokemonIndex = party.length
    }
    }
    else{
      subIndex--
      if(subIndex<0){
        subIndex = 2
      }
    }
  }
  if(keyWentDown("down")&&party.length>=3){
    if(subIndex === -10){
    pokemonIndex+=2
    if(pokemonIndex>=party.length+1){
      if(pokemonIndex%2 === 0){
      pokemonIndex = 0
      }
      else{
        pokemonIndex = 1
      }
    }
    }
  }
  if(keyWentDown("up")&&party.length>=3){
    if(subIndex === -10){
    pokemonIndex-=2
    if(pokemonIndex<=-1){
      if(pokemonIndex%2!==0){
      pokemonIndex = party.length - 2
      }
      else{
        pokemonIndex = party.length - 1
      }
    }
    } 
  }
  
  if(keyWentDown("space")&&subIndex === -10){
    if(pokemonIndex !== party.length){
    subIndex = 0
    }
    else{
      menuPage = ""
      pokemonIndex = 0
      menuCreated = true
      menubar = false
      menuIndex = 0
    }
  }
  
  if(subIndex !== -10){
    fill("white")
    stroke("black")
    strokeWeight(3)
    rect(30,370,510,40)
    fill("#03A9F4")
    stroke("#000000")
    strokeWeight(2)
    textSize(30)
    textFont("bold")
    text("Do what with "+party[pokemonIndex].name+"?",40,400)
    
    stroke("#000000")
    fill("white")
    strokeWeight(1)
    textSize(30)
    textFont("bold")
    text("Switch",390,450)
    
  }
  
  if(subIndex === -10){
    fill("white")
    stroke("black")
    strokeWeight(3)
    rect(100,370,430,40)
    fill("#03A9F4")
    stroke("#000000")
    strokeWeight(2)
    textSize(30)
    textFont("bold")
    text("Press Space to Select a Pokemon",120,400)
    if(pokemonIndex !== party.length){
    image(exitlogo,320,420,50,50)
    }
    else{
      image(exitlogo,320,420,55,55)
    }
  }
  
  if(subIndex === 0){
    fill("#03A9F4")
    stroke(51)
    strokeWeight(3)
    rect(30,420,250,50)
    stroke("#000000")
    fill("white")
    strokeWeight(2)
    textSize(30)
    textFont("bold")
    text("Summary",90,450)
    noStroke()
    fill("#3F51B5")
    rect(290,420,250,50)
    stroke("#000000")
    fill("white")
    strokeWeight(1)
    textSize(30)
    textFont("bold")
    text("Switch",370,450)
    image(exitlogo,560,420,50,50)
  }
  if(subIndex === 1){
     noStroke()
    fill("#3F51B5")
    rect(30,420,250,50)
    stroke("#000000")
    fill("white")
    strokeWeight(2)
    textSize(30)
    textFont("bold")
    text("Summary",90,450)
    stroke(51)
    strokeWeight(3)
    fill("#03A9F4")
    rect(290,420,250,50)
    stroke("#000000")
    fill("white")
    strokeWeight(1)
    textSize(30)
    textFont("bold")
    text("Switch",370,450)
    image(exitlogo,560,420,50,50)
  }
  if(subIndex === 2){
     noStroke()
    fill("#3F51B5")
    rect(30,420,250,50)
    stroke("#000000")
    fill("white")
    strokeWeight(2)
    textSize(30)
    textFont("bold")
    text("Summary",90,450)
    fill("#3F51B5")
    rect(290,420,250,50)
    stroke("#000000")
    fill("white")
    strokeWeight(1)
    textSize(30)
    textFont("bold")
    text("Switch",370,450)
    image(exitlogo,555,415,60,60)
    if(keyWentDown("space")){
      subIndex = -10
    }
  }
  
  //#009688
  //#009688
  
  
  if(party.length >= 1){
    
    if(pokemonIndex !== 0){
      noStroke()
    if(party[0].currentHP>0){
      fill("#009688")
    }
    else{
      fill("#992D06")
    }
    }
    else{
      stroke(51)
      strokeWeight(3)
      if(party[0].currentHP>0){
      fill("rgb(7,174,121)")
    }
    else{
      fill("#F44336")
    }
    }
    rect(30,20,280,100)
    stroke(51)
    strokeWeight(3)
    image(pokemon1Img,0,-5,140,140)
    fill("white")
    textSize(20)
    textFont("bold")
    text(party[0].name,120,50)
    let hpr = party[0].currentHP/party[0].stats.hp
    text("Level "+party[0].level,220,50)
    text(`HP: ${party[0].currentHP}/${party[0].stats.hp}`,120,80)
    if(hpr > 0.5){
      fill("green")
    }
    else if(hpr<0.5&&hpr>0.2){
      fill("yellow")
    }
    else{
      fill("red")
    }
    strokeWeight(1)
    rect(120,90,hpr*175,7)
    
  }
  
  if(party.length >= 2){
    if(pokemonIndex !== 1){
      noStroke()
    if(party[1].currentHP>0){
      fill("#009688")
    }
    else{
      fill("#992D06")
    }
    }
    else{
      stroke(51)
      strokeWeight(3)
      if(party[1].currentHP>0){
      fill("rgb(7,174,121)")
    }
    else{
      fill("#F44336")
    }
    }
    rect(330,20,280,100)
    stroke(51)
    strokeWeight(3)
    image(pokemon2Img,300,-5,140,140)
    fill("white")
    textSize(20)
    textFont("bold")
    text(party[1].name,420,50)
    text("Level "+party[1].level,520,50)
    let hpr = party[1].currentHP/party[1].stats.hp
    text(`HP: ${party[1].currentHP}/${party[1].stats.hp}`,420,80)
    if(hpr > 0.5){
      fill("green")
    }
    else if(hpr<0.5&&hpr>0.2){
      fill("yellow")
    }
    else{
      fill("red")
    }
    strokeWeight(1)
    rect(420,90,hpr*175,7)
  }
  
  if(party.length >= 3){
   if(pokemonIndex !== 2){
     noStroke()
    if(party[2].currentHP>0){
      fill("#009688")
    }
    else{
      fill("#992D06")
    }
    }
    else{
      stroke(51)
      strokeWeight(3)
      if(party[2].currentHP>0){
      fill("rgb(7,174,121)")
    }
    else{
      fill("#F44336")
    }
    }
    rect(30,140,280,100)
        stroke(51)
    strokeWeight(3)
    image(pokemon3Img,0,115,140,140)
    fill("white")
    textSize(20)
    textFont("bold")
    text(party[2].name,120,170)
    let hpr = party[2].currentHP/party[2].stats.hp
    text("Level "+party[2].level,220,170)
    text(`HP: ${party[2].currentHP}/${party[2].stats.hp}`,120,200)
    if(hpr > 0.5){
      fill("green")
    }
    else if(hpr<0.5&&hpr>0.2){
      fill("yellow")
    }
    else{
      fill("red")
    }
    strokeWeight(1)
    rect(120,210,hpr*175,7)
  }
  
  if(party.length >= 4){
    if(pokemonIndex !== 3){
      noStroke()
    if(party[3].currentHP>0){
      fill("#009688")
    }
    else{
      fill("#992D06")
    }
    }
    else{
      stroke(51)
      strokeWeight(3)
      if(party[3].currentHP>0){
      fill("rgb(7,174,121)")
    }
    else{
      fill("#F44336")
    }
    }
    rect(330,140,280,100)
        stroke(51)
    strokeWeight(3)
    image(pokemon4Img,300,115,140,140)
    fill("white")
    textSize(20)
    textFont("bold")
    text(party[3].name,420,170)
    text("Level "+party[3].level,520,170)
    let hpr = party[3].currentHP/party[3].stats.hp
    text(`HP: ${party[3].currentHP}/${party[3].stats.hp}`,420,200)
    if(hpr > 0.5){
      fill("green")
    }
    else if(hpr<0.5&&hpr>0.2){
      fill("yellow")
    }
    else{
      fill("red")
    }
    strokeWeight(1)
    rect(420,210,hpr*175,7)
  }
  if(party.length >= 5){
    if(pokemonIndex !== 4){
      noStroke()
    if(party[4].currentHP>0){
      fill("#009688")
    }
    else{
      fill("#992D06")
    }
    }
    else{
      stroke(51)
      strokeWeight(3)
      if(party[4].currentHP>0){
      fill("rgb(7,174,121)")
    }
    else{
      fill("#F44336")
    }
    }
    rect(30,260,280,100)
            stroke(51)
    strokeWeight(3)
    image(pokemon5Img,0,235,140,140)
    fill("white")
    textSize(20)
    textFont("bold")
    text(party[4].name,120,290)
    text("Level "+party[4].level,220,290)
    let hpr = party[4].currentHP/party[4].stats.hp
    text(`HP: ${party[4].currentHP}/${party[4].stats.hp}`,120,320)
    if(hpr > 0.5){
      fill("green")
    }
    else if(hpr<0.5&&hpr>0.2){
      fill("yellow")
    }
    else{
      fill("red")
    }
    strokeWeight(1)
    rect(120,330,hpr*175,7)
  }
  
  if(party.length >= 6){
    if(pokemonIndex !== 5){
      noStroke()
    if(party[5].currentHP>0){
      fill("#009688")
    }
    else{
      fill("#992D06")
    }
    }
    else{
      stroke(51)
      strokeWeight(3)
      if(party[5].currentHP>0){
      fill("rgb(7,174,121)")
    }
    else{
      fill("#F44336")
    }
    }
    rect(330,260,280,100)
    stroke(51)
    strokeWeight(3)
    image(pokemon6Img,300,235,140,140)
    fill("white")
    textSize(20)
    textFont("bold")
    text(party[5].name,420,290)
    text("Level "+party[5].level,520,290)
    let hpr = party[5].currentHP/party[5].stats.hp
    text(`HP: ${party[5].currentHP}/${party[5].stats.hp}`,420,320)
    if(hpr > 0.5){
      fill("green")
    }
    else if(hpr<0.5&&hpr>0.2){
      fill("yellow")
    }
    else{
      fill("red")
    }
    strokeWeight(1)
    rect(420,330,hpr*175,7)
  }
}

if(menuPage === "bag"){
  background(partybg)

  if(subIndex !== 4){
  fill("white")
  stroke(51)
  strokeWeight(3)
  rect(325,5,310,470)
  }
  
  
  stroke("grey")
  strokeWeight(3)
  fill("white")
  rect(15,300,280,65)
  rect(15,365,280,65)
  
  noStroke()
  
  if(subIndex === 0){
    fill("rgba(126,185,251,0.89)")
    rect(18.5,307.5,50,50)
    fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")
    text("Items",120,405)
    
    if(items.length>0){
    noStroke()
    fill("rgba(126,185,251,0.89)")
    rect(326,pokemonIndex*50+25,307,50)
    }
      for(let x in items){
    fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")
    text(x,340,60+i)
    text("x"+items[x],577,60+i)
    i += 50      
  }
           if(keyWentDown("up")){
    pokemonIndex--
    if(pokemonIndex<0){
      pokemonIndex = 3
    }
  }
  if(keyWentDown("down")){
    pokemonIndex++
    if(pokemonIndex>3){
      pokemonIndex = 0
    }
  }
  }
  if(subIndex === 1){
    fill("rgba(126,185,251,0.89)")
    rect(72.5,307.5,50,50)
    fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")
    text("Medicine",100,405)
    if(medicine.length>0){
    noStroke()
    fill("rgba(126,185,251,0.89)")
    rect(326,pokemonIndex*50+25,307,50)
    }
    for(let x in medicine){
    fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")
    text(x,340,60+i)
    text("x"+medicine[x],577,60+i)
    i += 50
  }
    if(keyWentDown("up")){
    pokemonIndex--
    if(pokemonIndex<0){
      pokemonIndex = 3
    }
  }
  if(keyWentDown("down")){
    pokemonIndex++
    if(pokemonIndex>3){
      pokemonIndex = 0
    }
  }
  }
  if(subIndex === 2){
    fill("rgba(126,185,251,0.89)")
    rect(128.5,307.5,50,50)
    fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")
    text("Pokeballs",100,405)
    if(pokeballs.length>0){
    noStroke()
    fill("rgba(126,185,251,0.89)")
    rect(326,pokemonIndex*50+25,307,50)
    }
    for(let x in pokeballs){
    fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")
    text(x,340,60+i)
    text("x"+pokeballs[x],577,60+i)
    i += 50
  }
    if(keyWentDown("up")){
    pokemonIndex--
    if(pokemonIndex<0){
      pokemonIndex = 3
    }
  }
  if(keyWentDown("down")){
    pokemonIndex++
    if(pokemonIndex>3){
      pokemonIndex = 0
    }
  }
  }
  if(subIndex === 3){
    fill("rgba(126,185,251,0.89)")
    rect(182.5,307.5,50,50)
        fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")
    text("TM Case",100,405)
    if(tms.length>0){
    noStroke()
    fill("rgba(126,185,251,0.89)")
    rect(326,pokemonIndex*50+25,307,50)
    }
        for(let x in tms){
    fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")
    text(x,340,60+i)
    i += 50
  }
    if(keyWentDown("up")){
    pokemonIndex--
    if(pokemonIndex<0){
      pokemonIndex = 3
    }
  }
  if(keyWentDown("down")){
    pokemonIndex++
    if(pokemonIndex>3){
      pokemonIndex = 0
    }
  }
  }
  
  if(keyWentDown("right")){
    pokemonIndex = 0
    subIndex++
    i = 0
    if(subIndex>=5){
      subIndex = 0
    }
  }
  if(keyWentDown("left")){
    subIndex--
    pokemonIndex = 0
    i = 0
    if(subIndex<0){
      subIndex = 4
    }
  }
  
  if(subIndex === 4){
    fill("rgba(126,185,251,0.89)")
    rect(236.5,307.5,50,50)
    fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")
    text("Exit",120,405)
    if(keyWentDown("space")){
            menuPage = ""
      pokemonIndex = 0
      menuCreated = true
      menubar = false
      menuIndex = 0
    }
  }

  
  image(itemslogo,25,315,35,35)
  image(medicinelogo,80,315,35,35)
  image(pokeballlogo,135,315,35,35)
  image(tmslogo,190,315,35,35)
  image(exitlogo,245,315,35,35)

}

  if(!menuCreated&&keyWentDown("enter")&&move === true&&menuOpen){
    menuCreated = true
    move = false
  }
  
  if(menuCreated){
    fill("white")
  stroke(51)
  strokeWeight(2)
  rect(410,10,220,460)
  textSize(35)
  textFont("bold")
  
    if(keyWentDown("down")){
    menuIndex++
    if(menuIndex>4){
      menuIndex = 0
    }
  }
  if(keyWentDown("up")){
    menuIndex--
    if(menuIndex<0){
      menuIndex = 4
    }
  }

  if(keyWentDown("space")){
    if(menuIndex === 1){
      menuPage = "party"
      if(party.length>=1){
        pokemon1Img = loadImage("front/" + party[0].name + ".png");
      }
      if(party.length>=2){
        pokemon2Img = loadImage("front/" + party[1].name + ".png");
      }
      if(party.length>=3){
        pokemon3Img = loadImage("front/" + party[2].name + ".png");
      }
      if(party.length>=4){
        pokemon4Img = loadImage("front/" + party[3].name + ".png");
      }
      if(party.length>=5){
        pokemon5Img = loadImage("front/" + party[4].name + ".png");
      }
      if(party.length>=6){
        pokemon6Img = loadImage("front/" + party[5].name + ".png");
      }
      menuCreated = false
    }
    if(menuIndex === 2){
      menuPage = "bag"
      menuCreated = false
      subIndex = 0
    }
  }

  
  
  if(menuIndex === 0){
    fill("rgba(126,185,251,0.89)")
    rect(420,30,200,60,20)
  }
  if(menuIndex === 1){
    fill("rgba(126,185,251,0.89)")
    rect(420,118,200,60,20)
  }
  if(menuIndex === 2){
    fill("rgba(126,185,251,0.89)")
    rect(420,206,200,60,20)
  }
  if(menuIndex === 3){
    fill("rgba(126,185,251,0.89)")
    rect(420,294,200,60,20)
  }
  if(menuIndex === 4){
    fill("rgba(126,185,251,0.89)")
    rect(420,382,200,60,20)
  }
  
  if(menuIndex === 4&&keyWentDown("space")){
    menuCreated = false
    move = true
    menuIndex = 0
  }

  
  noStroke()
  fill("black")
  image(pokedexlogo,430,35,50,50)
  text("Pokedex",490,70)
  image(pokeballImg,430,123,50,50)
  text("Party",510,158)
  image(baglogo,430,211,50,50)
  text("Bag",520,246)
  image(trainerlogo,430,299,50,50)
  text(`ID`,524,334)
  image(exitlogo,430,387,50,50)
  text("Exit",520,422)
  }
  
  else if(!menuCreated&&keyWentDown("enter")){
    menuCreated
  }

}

function grassHandler(){

  if(playerLocation === "route_1"){
  if(bgState === 1&&!gc){
    g1 = new Grass(251,78,262,150,"route_1")
    g2 = new Grass(193,173,123,30,"route_1")
    g3 = new Grass(352,172,63,30,"route_1")
    g4 = null
    g5 = null
    g6 = null
    g7 = null
    gc = true
  }
  if(bgState === 2&&!gc){
    g1 = new Grass(256,461,256,30,"route_1")
    g2 = new Grass(271,431,224,30,"route_1")
    g3 = new Grass(368,398,30,30,"route_1")
    g4 = new Grass(415,30,195,60,"route_1")
    g5 = new Grass(417,78,130,30,"route_1")
    g6 = null
    g7 = null
    gc = true
  }
  if(bgState === 3&&!gc){
    g1 = new Grass(415,400,190,150,"route_1")
    g2 = new Grass(463,305,95,30,"route_1")
    g3 = new Grass(480,271,60,30,"route_1")
    g4 = null
    g5 = null
    g6 = null
    g7 = null
    gc = true
  }
  if(bgState === 4&&!gc){
    g1 = new Grass(320,335,390,150,"route_1")
    g2 = new Grass(466,430,100,30,"route_1")
    g3 = null
    g4 = null
    g5 = null
    g6 = null
    g7 = null
    gc = true
  }

}
}

function catchingTutorial(){

  tempplayerSprite.addImage(hughBackSprite)
  tempplayerSprite.scale = 1.6
    tempPokemonSprite.addImage(tempPokemonImage)

  if(catchState === "intro"){
  tempplayerSprite.visible = true
  tempPokemonSprite.visible = true
  tCharge.velocityY = 0
  tCharge.y = 0
  moving = false
  kai.sprite.visible = false
  player.visible = false
  tempSprite.visible = false
  background(battleBackround)
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  battleText1 = `A wild Lillipup appeared!`
  battleText2 = ``
  battleText3 = ``
  image(pokeballImg,420,253,20,20)
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  textFont('Bold')
  fill("red")
  fill("black")
  rect(405,270,230,5)
  rect(405,254,5,20)

  
  

  catchCharge.velocityY = 50
  if(catchCharge.y > 2000){
    catchCharge.y = 0
    catchState = "send"
    catchCharge.velocityY = 0
  }
  
  }

  if(catchState === "send"){
    tempPokemonSprite.visible = true
  tempplayerSprite.visible = true
  background(battleBackround)
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  let playerPokemon = ""
  if(starterPokemon === "Rowlet"){
    playerPokemon = "Chimchar"
  }
  if(starterPokemon === "Chimchar"){
    playerPokemon = "Mudkip"
  }
  if(starterPokemon === "Mudkip"){
    playerPokemon = "Rowlet"
  }
  battleText1 = `Go ${playerPokemon}!`
  battleText2 = ``
  battleText3 = ``
  image(pokeballImg,420,253,20,20)
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  fill("red")
  fill("black")
  rect(405,270,230,5)
  rect(405,254,5,20)
    
  strokeWeight(2)
  stroke(51)
  fill("rgb(255,255,130)")
  rect(5,5,240,75,30)
  strokeWeight(2)
  stroke(51)
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`Lillipup`,15,25)
  textSize(15);
  text(`Lvl:2`,178,25)

  let enemyHP = 13
  let enemymaxHP = 13
  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  let enemyRatio = enemyHP/enemymaxHP
  fill("green")
  rect(15,50,enemyRatio*220,5)

  catchCharge.velocityY = 50
  if(catchCharge.y > 2000){
    catchCharge.y = 0
    catchState = "menu"
    catchCharge.velocityY = 0
    if(starterPokemon === "Rowlet"){
      pokemonBackSprite = loadImage("back/Chimchar.png")
    }
    if(starterPokemon === "Chimchar"){
      pokemonBackSprite = loadImage("back/Mudkip.png")
    }
    if(starterPokemon === "Mudkip"){
      pokemonBackSprite = loadImage("back/Rowlet.png")
    }
  }

  }

  if(catchState === "menu"){
    tempPokemonSprite.visible = true
  tempplayerSprite.visible = true
  tempSprite.visible = false
  tempplayerSprite.scale = 1
  tempplayerSprite.x = 140
  tempplayerSprite.y = 230
  background(battleBackround)
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  

  let playerPokemon = ""
  
  let playerHP,playermaxHP,enemyHP,enemymaxHP
  if(starterPokemon === "Rowlet"){
    playerPokemon = "Chimchar"
    playermaxHP = 23
  }
  if(starterPokemon === "Chimchar"){
    playerPokemon = "Mudkip"
    playermaxHP = 24
  }
  if(starterPokemon === "Mudkip"){
   playerPokemon = "Rowlet"
   playermaxHP = 26
   
  }
  
  tempplayerSprite.addImage(pokemonBackSprite)
  playerHP = playermaxHP
  
  tempplayerSprite.visible = true

  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)


  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  fill('lightgrey');
  strokeWeight(1);
  stroke(51);
  rect(330, 335, 280, 110);

  fill('pink');
  strokeWeight(2);
  stroke(51);
  rect(340, 345, 125, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text("Fight",360,372.5)
  
  fill('orange');
  strokeWeight(2);
  stroke(51);
  rect(475, 345, 125, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text("Bag",510,372.5)
  
  fill('rgb(0,177,0)');
  strokeWeight(2);
  stroke(51);
  rect(340, 395, 125, 40);
  textSize(22);
  noStroke()
  textFont('Courier New');
  fill("white");
  text("Pokemon",355,422.5)
  
  fill('rgb(3,3,216)');
  strokeWeight(2);
  stroke(51);
  rect(475, 395, 125, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text("Run",510,422.5)


  textSize(25);
  textFont('Courier New');
  fill("black");

  

  battleText1 = `What will`
  battleText2 = `${playerPokemon} do?`
  battleText3 = ``

  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  textFont('Bold')
  

  enemyHP = 13
  enemymaxHP = 13

  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemon}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:7`,568,240)
  enemyHP = 13
  enemymaxHP = 13
  textSize(20);
  text(`Lillipup`,15,25)
  textSize(15)
  text(`Lvl:2`,178,25)
  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  enemyRatio = enemyHP/enemymaxHP
  fill("green")
  rect(15,50,enemyRatio*220,5)

  
  let playerColor = "green"
  if(playerRatio >0.5){
    playerColor = "green"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "green"
  if(enemyRatio >=0.5){
    enemyColor = "green"
  }
  if(enemyRatio <0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }

  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  fill(playerColor)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)


  image(downImg,375,280,50,50)

  catchCharge.velocityY = 50
  if(catchCharge.y > 2000){
    catchCharge.y = 0
    catchState = "fight"
    catchCharge.velocityY = 0
  }
  
  }

  if(catchState === "fight"){
    tempPokemonSprite.visible = true
    tempplayerSprite.visible = true
  tempSprite.visible = false
  tempplayerSprite.scale = 1
  tempplayerSprite.x = 140
  tempplayerSprite.y = 230
  background(battleBackround)
   fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  

  let playerPokemon = ""
  
  let playerHP,playermaxHP,enemyHP,enemymaxHP
  if(starterPokemon === "Rowlet"){
    playerPokemon = "Chimchar"
    playermaxHP = 23
  }
  if(starterPokemon === "Chimchar"){
    playerPokemon = "Mudkip"
    playermaxHP = 24
  }
  if(starterPokemon === "Mudkip"){
   playerPokemon = "Rowlet"
   playermaxHP = 26
   
  }
  
  tempplayerSprite.addImage(pokemonBackSprite)
  playerHP = playermaxHP
  
  tempplayerSprite.visible = true

  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)


  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  fill("#C7C7C7")
  strokeWeight(2);
  stroke(51);
  rect(20, 325, 295, 50);
  textSize(25);
  noStroke()
  textFont('Courier New');
  fill("white");
  if(playerPokemon !== "Chimchar"){
  text(`Tackle`,23,347)
  }
  else{
    text(`Scratch`,23,347)
  }
  textSize(15);
  text(`Power: 40 Accuracy: 100 PP: 35`,25,367)
  
  if(starterPokemon === "Mudkip"){
  fill("#49EF5E")
  strokeWeight(2);
  stroke(51);
  rect(325, 325, 295, 50);
  textSize(25);
  noStroke()
  textFont('Courier New');
  fill("white");
  text(`Leafage`,328,347)
  textSize(15);
  text(`Power: 40 Accuracy: 100 PP: 25`,328,367)
  }
  if(starterPokemon === "Rowlet"){
  fill("rgb(243,51,51)")
  strokeWeight(2);
  stroke(51);
  rect(325, 325, 295, 50);
  textSize(25);
  noStroke()
  textFont('Courier New');
  fill("white");
  text(`Ember`,328,347)
  textSize(15);
  text(`Power: 40 Accuracy: 100 PP: 25`,328,367)
  }
  if(starterPokemon === "Chimchar"){
  fill("rgb(51,115,255)")
  strokeWeight(2);
  stroke(51);
  rect(325, 325, 295, 50);
  textSize(25);
  noStroke()
  textFont('Courier New');
  fill("white");
  text(`Water Gun`,328,347)
  textSize(15);
  text(`Power: 40 Accuracy: 100 PP: 25`,328,367)
  }
  
  

  enemyHP = 13
  enemymaxHP = 13

  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemon}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:7`,568,240)
  enemyHP = 13
  enemymaxHP = 13
   textSize(20);
  text(`Lillipup`,15,25)
  textSize(15)
  text(`Lvl:2`,178,25)
  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  enemyRatio = enemyHP/enemymaxHP
  fill("green")
  rect(15,50,enemyRatio*220,5)

  
  let playerColor = "green"
  if(playerRatio >0.5){
    playerColor = "green"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "green"
  if(enemyRatio >=0.5){
    enemyColor = "green"
  }
  if(enemyRatio <0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }

  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  fill(playerColor)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)

  image(downImg,160,275,50,50)  

  catchCharge.velocityY = 50
  if(catchCharge.y > 2000){
    catchCharge.y = 0
    catchState = "battleText"
    catchCharge.velocityY = 0
  }
  }

  if(catchState === "battleText"){
    tempPokemonSprite.visible = true
  tempplayerSprite.visible = true
  tempSprite.visible = false
  tempplayerSprite.scale = 1
  tempplayerSprite.x = 140
  tempplayerSprite.y = 230
  background(battleBackround)
   fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  

  let playerPokemon = ""
  
  let playerHP,playermaxHP,enemyHP,enemymaxHP
  if(starterPokemon === "Rowlet"){
    playerPokemon = "Chimchar"
    playermaxHP = 23
  }
  if(starterPokemon === "Chimchar"){
    playerPokemon = "Mudkip"
    playermaxHP = 24
  }
  if(starterPokemon === "Mudkip"){
   playerPokemon = "Rowlet"
   playermaxHP = 26
   
  }
  
  tempplayerSprite.addImage(pokemonBackSprite)
  playerHP = playermaxHP - 5
  
  tempplayerSprite.visible = true

  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)


  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  enemyHP = 8
  enemymaxHP = 13

  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemon}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:7`,568,240)
  enemyHP = 8
  enemymaxHP = 13
   textSize(20);
  text(`Lillipup`,15,25)
  textSize(15)
  text(`Lvl:2`,178,25)
  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  enemyRatio = enemyHP/enemymaxHP
  fill("green")
  rect(15,50,enemyRatio*220,5)

  
  let playerColor = "green"
  if(playerRatio >0.5){
    playerColor = "green"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "green"
  if(enemyRatio >0.5){
    enemyColor = "green"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }

  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  fill(playerColor)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)

  let tempMove;
  if(starterPokemon !== "Rowlet"){
    tempMove = "Tackle"
  }
  else{
    tempMove = "Scratch"
  }
  battleText1 = `${playerPokemon} used ${tempMove}!`
  battleText2 = `The wild Lillipup used Tackle!`
  battleText3 = ``

  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

    

  catchCharge.velocityY = 50
  if(catchCharge.y > 2000){
    catchCharge.y = 0
    catchState = "menu1"
    catchCharge.velocityY = 0
  }
  }

    if(catchState === "menu1"){
      tempPokemonSprite.visible = true
  tempplayerSprite.visible = true
  tempSprite.visible = false
  tempplayerSprite.scale = 1
  tempplayerSprite.x = 140
  tempplayerSprite.y = 230
  background(battleBackround)
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  

  let playerPokemon = ""
  
  let playerHP,playermaxHP,enemyHP,enemymaxHP
  if(starterPokemon === "Rowlet"){
    playerPokemon = "Chimchar"
    playermaxHP = 23
  }
  if(starterPokemon === "Chimchar"){
    playerPokemon = "Mudkip"
    playermaxHP = 24
  }
  if(starterPokemon === "Mudkip"){
   playerPokemon = "Rowlet"
   playermaxHP = 26
   
  }
  
  tempplayerSprite.addImage(pokemonBackSprite)
  playerHP = playermaxHP-5
  
  tempplayerSprite.visible = true

  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)


  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  fill('lightgrey');
  strokeWeight(1);
  stroke(51);
  rect(330, 335, 280, 110);

  fill('pink');
  strokeWeight(2);
  stroke(51);
  rect(340, 345, 125, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text("Fight",360,372.5)
  
  fill('orange');
  strokeWeight(2);
  stroke(51);
  rect(475, 345, 125, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text("Bag",510,372.5)
  
  fill('rgb(0,177,0)');
  strokeWeight(2);
  stroke(51);
  rect(340, 395, 125, 40);
  textSize(22);
  noStroke()
  textFont('Courier New');
  fill("white");
  text("Pokemon",355,422.5)
  
  fill('rgb(3,3,216)');
  strokeWeight(2);
  stroke(51);
  rect(475, 395, 125, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text("Run",510,422.5)


  textSize(25);
  textFont('Courier New');
  fill("black");

  

  battleText1 = `What will`
  battleText2 = `${playerPokemon} do?`
  battleText3 = ``

  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)
  textFont('Bold')

  textSize(20)
  fill("black")
  text("Press Space To Continue",30,450)

  

  enemyHP = 8
  enemymaxHP = 13

  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemon}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:7`,568,240)
  enemyHP = 8
  enemymaxHP = 13
   textSize(20);
  text(`Lillipup`,15,25)
  textSize(15)
  text(`Lvl:2`,178,25)
  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  enemyRatio = enemyHP/enemymaxHP
  fill("green")
  rect(15,50,enemyRatio*220,5)

  
  let playerColor = "green"
  if(playerRatio >0.5){
    playerColor = "green"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "green"
  if(enemyRatio >0.5){
    enemyColor = "green"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }

  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  fill(playerColor)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)

  catchCharge.velocityY = 50
  if(catchCharge.y > 2000){
    catchCharge.y = 0
    catchState = "bag"
    catchCharge.velocityY = 0
  }

  image(downImg,510,280,50,50)
  
  }

  if(catchState === "bag"){
background(partybg)
    tempplayerSprite.visible = false
    tempPokemonSprite.visible = false

  fill("white")
  stroke(51)
  strokeWeight(3)
  rect(325,5,310,470)
  
  
  
  stroke("grey")
  strokeWeight(3)
  fill("white")
  rect(15,300,280,65)
  rect(15,365,280,65)
  
  noStroke()
    fill("rgba(126,185,251,0.89)")
    rect(18.5,307.5,50,50)
    fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")
    text("Items",120,405)

    fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")    

  

  
  image(itemslogo,25,315,35,35)
  image(medicinelogo,80,315,35,35)
  image(pokeballlogo,135,315,35,35)
  image(tmslogo,190,315,35,35)
  image(exitlogo,245,315,35,35)

  catchCharge.velocityY = 50
    if(catchCharge.y > 2000){
    catchCharge.y = 0
    catchState = "bag1"
    catchCharge.velocityY = 0
  }
  }

    if(catchState === "bag1"){
      tempplayerSprite.visible = false
      tempPokemonSprite.visible = false
background(partybg)


  fill("white")
  stroke(51)
  strokeWeight(3)
  rect(325,5,310,470)
  
  
  
  stroke("grey")
  strokeWeight(3)
  fill("white")
  rect(15,300,280,65)
  rect(15,365,280,65)
  
  noStroke()

    fill("rgba(126,185,251,0.89)")
    rect(72.5,307.5,50,50)
    fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")
    text("Medicine",100,405)
     noStroke()
    fill("rgba(126,185,251,0.89)")
    rect(326,25,307,50)
    fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")
    text("Potion",340,60)
    text("x3",577,60)
  

  
  image(itemslogo,25,315,35,35)
  image(medicinelogo,80,315,35,35)
  image(pokeballlogo,135,315,35,35)
  image(tmslogo,190,315,35,35)
  image(exitlogo,245,315,35,35)
catchCharge.velocityY = 50
    if(catchCharge.y > 2000){
    catchCharge.y = 0
    catchState = "bag2"
    catchCharge.velocityY = 0
  }
  }

  if(catchState === "bag2"){
  tempplayerSprite.visible = false
  tempPokemonSprite.visible = false
  background(partybg)

  fill("white")
  stroke(51)
  strokeWeight(3)
  rect(325,5,310,470)
  
  stroke("grey")
  strokeWeight(3)
  fill("white")
  rect(15,300,280,65)
  rect(15,365,280,65)
  
  noStroke()

  fill("rgba(126,185,251,0.89)")
  rect(126,307.5,50,50)
  fill("white")
  stroke("black")
  strokeWeight(3)
  textSize(30)
  textFont("bold")
  text("Pokballs",100,405)
   noStroke()
  fill("rgba(126,185,251,0.89)")
  rect(326,25,307,50)
  fill("white")
  stroke("black")
  strokeWeight(3)
  textSize(30)
  textFont("bold")
  text("Pokeball",340,60)
  text("x10",577,60)
  text("Great Ball",340,110)
  text("x2",577,110)
  
  image(itemslogo,25,315,35,35)
  image(medicinelogo,80,315,35,35)
  image(pokeballlogo,135,315,35,35)
  image(tmslogo,190,315,35,35)
  image(exitlogo,245,315,35,35)

  catchCharge.velocityY = 50
    if(catchCharge.y > 2000){
    catchCharge.y = 0
    catchState = "bag3"
    catchCharge.velocityY = 0
    }
  }

   if(catchState === "bag3"){
  tempplayerSprite.visible = false
  tempPokemonSprite.visible = false
  background(partybg)

  fill("white")
  stroke(51)
  strokeWeight(3)
  rect(325,5,310,470)
  
  stroke("grey")
  strokeWeight(3)
  fill("white")
  rect(15,300,280,65)
  rect(15,365,280,65)
   rect(15,235,280,65)
  
  textFont("bold")
  textSize(35)
  fill("white")
  stroke("black")
  strokeWeight(3)
  text("Use",75,275)
  text("Exit",195,275)
  
  image(rightImg,20,250,40,40)
  
  noStroke()

  fill("rgba(126,185,251,0.89)")
  rect(126,307.5,50,50)
  fill("white")
  stroke("black")
  strokeWeight(3)
  textSize(30)
  textFont("bold")
  text("Pokballs",100,405)
  noStroke()
  fill("rgba(126,185,251,0.89)")
  rect(326,25,307,50)
  fill("white")
  stroke("black")
  strokeWeight(3)
  textSize(30)
  textFont("bold")
  text("Pokeball",340,60)
  text("x10",577,60)
  text("Great Ball",340,110)
  text("x2",577,110)
  
  
  
  image(itemslogo,25,315,35,35)
  image(medicinelogo,80,315,35,35)
  image(pokeballlogo,135,315,35,35)
  image(tmslogo,190,315,35,35)
  image(exitlogo,245,315,35,35)

  catchCharge.velocityY = 50
  if(catchCharge.y > 2000){
    catchCharge.y = 0
    catchState = "battleText1"
    catchCharge.velocityY = 0
    tempPokemonSprite.visible = false
  }

  }

  if(catchState === "battleText1"){
  tempplayerSprite.visible = true
  tempPokemonSprite.visible = false
  tempSprite.visible = false
  tempplayerSprite.scale = 1
  tempplayerSprite.x = 140
  tempplayerSprite.y = 230
  background(battleBackround)
   fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  image(pokeballSprite,485,165,30,30)

  let playerPokemon = ""
  
  let playerHP,playermaxHP,enemyHP,enemymaxHP
  if(starterPokemon === "Rowlet"){
    playerPokemon = "Chimchar"
    playermaxHP = 23
  }
  if(starterPokemon === "Chimchar"){
    playerPokemon = "Mudkip"
    playermaxHP = 24
  }
  if(starterPokemon === "Mudkip"){
   playerPokemon = "Rowlet"
   playermaxHP = 26
   
  }
  
  tempplayerSprite.addImage(pokemonBackSprite)
  playerHP = playermaxHP - 5
  
  tempplayerSprite.visible = true

  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)


  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  enemyHP = 8
  enemymaxHP = 13

  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemon}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:7`,568,240)
  enemyHP = 8
  enemymaxHP = 13
   textSize(20);
  text(`Lillipup`,15,25)
  textSize(15)
  text(`Lvl:2`,178,25)
  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  enemyRatio = enemyHP/enemymaxHP
  fill("green")
  rect(15,50,enemyRatio*220,5)

  
  let playerColor = "green"
  if(playerRatio >0.5){
    playerColor = "green"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "green"
  if(enemyRatio >0.5){
    enemyColor = "green"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }

  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  fill(playerColor)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)

  battleText1 = `Kai used a Pokeball!`
  battleText2 = ``
  battleText3 = ``

  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)

    

  catchCharge.velocityY = 50
  if(catchCharge.y > 2000){
    catchCharge.y = 0
    catchState = "battleText2"
    catchCharge.velocityY = 0
    tempPokemonSprite.visible = false
  }
  }

  if(catchState === "battleText2"){
 tempplayerSprite.visible = true
  tempPokemonSprite.visible = false
  tempSprite.visible = false
  tempplayerSprite.scale = 1
  tempplayerSprite.x = 140
  tempplayerSprite.y = 230
  background(battleBackround)
   fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  image(pokeballCaughtSprite,485,165,30,30)

  let playerPokemon = ""
  
  let playerHP,playermaxHP,enemyHP,enemymaxHP
  if(starterPokemon === "Rowlet"){
    playerPokemon = "Chimchar"
    playermaxHP = 23
  }
  if(starterPokemon === "Chimchar"){
    playerPokemon = "Mudkip"
    playermaxHP = 24
  }
  if(starterPokemon === "Mudkip"){
   playerPokemon = "Rowlet"
   playermaxHP = 26
   
  }
  
  tempplayerSprite.addImage(pokemonBackSprite)
  playerHP = playermaxHP - 5
  
  tempplayerSprite.visible = true

  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)


  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  enemyHP = 8
  enemymaxHP = 13

  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemon}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:7`,568,240)
  enemyHP = 8
  enemymaxHP = 13
   textSize(20);
  text(`Lillipup`,15,25)
  textSize(15)
  text(`Lvl:2`,178,25)
  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  enemyRatio = enemyHP/enemymaxHP
  fill("green")
  rect(15,50,enemyRatio*220,5)

  
  let playerColor = "green"
  if(playerRatio >0.5){
    playerColor = "green"
  }
  if(playerRatio <0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "green"
  if(enemyRatio >0.5){
    enemyColor = "green"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }

  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  fill(playerColor)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)


  battleText1 = `The wild Lillipup was caught!`
  battleText2 = ``
  battleText3 = ``

  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,384)
  text(battleText3.trim(),30,423)

    

  catchCharge.velocityY = 50
  if(catchCharge.y > 2000){
    catchCharge.y = 0
    catchState = "end"
    catchCharge.velocityY = 0
    kai.sprite.visible = true
    player.visible = true
    kai.startTalking()
    kai.talk()
    gameState = 3.3
    move = true
    kai.sprite.changeAnimation("down_s")
    tempplayerSprite.visible = false
  }
  }

}
