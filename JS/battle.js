class Battle{
    constructor(playerTeam,enemyTeam,enemyName,state,trainerClass,
        enemyObj,type){
        this.playerTeam = playerTeam
        this.enemyTeam = enemyTeam
        this.enemyName = enemyName
        this.state = state
        this.trainerClass = trainerClass
        this.enemyObj = enemyObj
        this.type = type




        this.enemyPokemonLeft = enemyTeam.length;
        

        this.menuCreated = false
        this.menuIndex = 0
        this.moveIndex = 0
        this.textState = 0
        this.sentState = 0
        this.enemyIndex = 0

        this.playerChosenMove = false
        this.enemyChosenMove = false

        this.turn;
        this.turnCompleted = false;
        this.turnStart = "";
        this.turnTextState = false

        this.pCurrentMove;
        this.eCurrentMove;

        this.menuState = false
        this.keyCoolDown = 15

        this.playerDamage = 0
        this.enemyDamage = 0

        this.playerPriority
        this.enemyPriority
        this.playerSpeed
        this.enemySpeed
        this.rand

        this.level = 0
        this.att = 0
        this.def = 0
        this.movePower = 0
        this.currentMove = 0
        this.STAB = 1
        this.effectiveness = 1
        this.crit = 1
        this.critchance = 1
        this.variation = 1
        this.pTurn = false
        this.eTurn = false
        this.pAcc = 0
        this.eAcc = 0
        this.pHit = false
        this.eHit = false
        this.pEffect = ""
        this.eEffect = ""
        this.pMult = 1
        this.eMult = 1

    }


    update(){
        switch(this.state){
            case 'transition':
                this.playerCurrentPokemon = this.playerTeam[0].name
                this.enemyCurrentPokemon = this.enemyTeam[0].name
                this.playerCurrentPokemonObject = this.playerTeam[0]
                this.enemyCurrentPokemonObject = this.enemyTeam[0]
                if (!transitionFunctionBoolean) {
                    transitionFunctionBoolean = true;
                }
                if(this.type === "trainer"){
                    trainerImg = loadImage("/sprites/"+this.trainerClass+".png")
                }
                else{
                    trainerImg = loadImage("/front/"+this.enemyTeam[0].name+".png")
                }
                transitionFunction(this);
                move = false
                break;
            
            case 'intro':
                tempSprite.visible = false
                //drawBattleUI(this.state)
                if (!battleChat) {
                    battleChat = true;
                }
                move = false
                introDialouge(this);
                break;

            case 'send':
                //drawBattleUI(this.state)
                if (!enemyPokemon) {
                    enemyPokemon = true;
                }
                move = false
                trainerSprite.visible = false
                playerSprite.visible = false
                sendPokemon(this);
                break;

            case 'menu':
                move = false
                multiplier = 1
                break;
            
            case 'fight':
                move = false
                break;
            
            case 'enemyAI':
                enemyAI(this)
                move = false
                break;

             case 'turn':
                this.turnFinder();
                move = false
                break;    

            case 'bag':
                console.log("bag");
                move = false
                break;

            case 'pokemon':
                console.log("pokemon");
                move = false
                break;

            case 'run':
                break;

            case 'battling':
                break;

        }
    }

    turnFinder(){
        this.turn = ""
        this.turnCompleted = false
        this.playerChosenMove = false
        this.enemyChosenMove = false
    this.playerPriority = this.playerCurrentPokemonObject.moves[this.moveIndex].priority
    this.enemyPriority = this.enemyCurrentPokemonObject.moves[this.enemyIndex].priority
    this.playerSpeed = this.playerCurrentPokemonObject.currentSpe
    this.enemySpeed = this.enemyCurrentPokemonObject.currentSpe
    if(this.playerPriority>this.enemyPriority){
        this.turnStart = "player"
        this.turn = "player"
        this.turnCompleted = false
        this.playerAttack()
    }
    else if(this.playerPriority<this.enemyPriority){
        this.turnStart = "enemy"
        this.turn = "enemy"
        this.turnCompleted = false
        this.enemyAttack()
    }
    else{
        if(this.playerSpeed>this.enemySpeed){
            this.turnStart = "player"
            this.turn = "player"
            this.turnCompleted = false
            this.playerAttack()
        }
        else if(this.playerSpeed<this.enemySpeed){
            this.turnStart = "enemy"
            this.turn = "enemy"
            this.turnCompleted = false
            this.enemyAttack()
        }
        else{
            this.rand = Math.round(random(1,2))
            if(this.rand === 1){
            this.turnStart = "player"
            this.turn = "player"
            this.turnCompleted = false
            this.playerAttack()
            }
            else{
            this.turnStart = "enemy"
            this.turn = "enemy"
            this.turnCompleted = false
            this.enemyAttack()               
            }
        }
    }
    }

  
  playerAttack(){
    if(this.playerCurrentPokemonObject.currentHP<=0){
        this.playerCurrentPokemonObject.currentHP = 0
    }
    if(this.enemyCurrentPokemonObject.currentHP<=0){
        this.enemyCurrentPokemonObject.currentHP = 0
    }    
    if(this.turn === "player"){
    this.currentMove = this.playerCurrentPokemonObject.moves[this.moveIndex]
    this.pCurrentMove = this.currentMove.name
    let acc = this.currentMove.accuracy
    this.pAcc = 0
    this.pAcc = Math.round(random(1,100))
    if(this.pAcc<=acc){
        this.pHit = true
    if(this.currentMove.category !== "Status"){
    this.movePower = this.currentMove.power
    this.level = this.playerCurrentPokemonObject.level
    if(this.currentMove.category === "Physical"){
        this.att = this.playerCurrentPokemonObject.currentAtt
        this.def = this.enemyCurrentPokemonObject.currentDef
    }
    if(this.currentMove.category === "Special"){
        this.att = this.playerCurrentPokemonObject.currentSpatt
        this.def = this.enemyCurrentPokemonObject.currentSpdef
    }

    if(this.currentMove.type === this.playerCurrentPokemonObject.types[0]||
      this.currentMove.type === this.playerCurrentPokemonObject.types[1]){
        this.STAB = 1.5
    }
    else{
        this.STAB = 1
    }
    this.effectiveness = calculateTypeEffectiveness(this.enemyCurrentPokemonObject.types,
        this.currentMove.type)
    this.pMult = this.effectiveness
    this.eMult  = 1
    if(this.currentMove.crit === 1){
        this.critchance = Math.round(random(1,24))
        if(this.critchance === 24){
            this.crit = 1.5
        }
        else{
            this.crit = 1
        }
    }
    else if(this.currentMove.crit === 0){
        this.critchance = Math.round(random(1,8))
        if(this.critchance === 8){
            this.crit = 1.5
        }
        else{
            this.crit = 1
        }
    }
    this.variation = (Math.round(random(85,100))/100)
    this.playerDamage = Math.round((((((2*this.level/5)+2)*this.movePower*(this.att/this.def))/50)+2)
    *this.STAB*this.effectiveness*this.crit*this.variation,this.playerDamage)
    if(this.currentMove.eff === 1){
        this.pEffect = this.secondaryEffects(this.pCurrentMove,this.playerCurrentPokemonObject,
            this.enemyCurrentPokemonObject,this.playerDamage)
    }
    }
    else{
    this.playerDamage = 0
    this.pEffect = this.statusMoves(this.pCurrentMove,this.playerCurrentPokemonObject,
        this.enemyCurrentPokemonObject)
    }
    


    }
}
  }  

  enemyAttack(){
    
    if(this.turn === "enemy"){
        if(this.type === "trainer"){
        this.currentMove = moveDB[this.enemyCurrentPokemonObject.moves[this.enemyIndex]]
        this.eCurrentMove = this.enemyCurrentPokemonObject.moves[this.enemyIndex]
        }
        else{
        this.currentMove = this.enemyCurrentPokemonObject.moves[this.enemyIndex]
        this.eCurrentMove = this.enemyCurrentPokemonObject.moves[this.enemyIndex].name
        }
    
    console.log(this.eCurrentMove)
    let acc = this.currentMove.accuracy
    this.eAcc = Math.round(random(1,100))
    if(this.eAcc<=acc){
        this.eHit = true
        if(this.currentMove.category !== "Status"){
    this.movePower = this.currentMove.power
    this.level = this.enemyCurrentPokemonObject.level
    if(this.currentMove.category === "Physical"){
        this.att = this.enemyCurrentPokemonObject.currentAtt
        this.def = this.playerCurrentPokemonObject.currentDef
    }
    if(this.currentMove.category === "Special"){
        this.att = this.enemyCurrentPokemonObject.currentSpatt
        this.def = this.playerCurrentPokemonObject.currentSpdef
    }
    if(this.currentMove.type === this.enemyCurrentPokemonObject.types[0]||
      this.currentMove.type === this.enemyCurrentPokemonObject.types[1]){
        this.STAB = 1.5
    }
    else{
       this.STAB = 1
    }
    this.effectiveness = calculateTypeEffectiveness(this.playerCurrentPokemonObject.types,
        this.currentMove.type)
    this.eMult = this.effectiveness
    if(this.currentMove.crit === 1){
        this.critchance = Math.round(random(1,24))
        if(this.critchance === 24){
            this.crit = 1.5
        }
    }
    else if(this.currentMove.crit === 0){
        this.critchance = Math.round(random(1,8))
        if(this.critchance === 8){
            this.crit = 1.5
        }
    }
    this.variation = (Math.round(random(85,100))/100)
    this.enemyDamage = Math.round((((((2*this.level/5)+2)*this.movePower*(this.att/this.def))/50)+2)
    *this.STAB*this.effectiveness*this.crit*this.variation)
    if(this.currentMove.eff === 1){
        this.eEffect = this.secondaryEffects(this.eCurrentMove,this.enemyCurrentPokemonObject,
            this.playerCurrentPokemonObject,this.enemyDamage)
    }

    if(this.faint(this.playerCurrentPokemonObject.currentHP)){
        playerPokemonLeft--
        this.playerCurrentPokemonObject.currentHP = 0
        if(noOfPokemonLeft === 0){
        this.state = "blackout"
    }
    }
}
else{
    this.enemyDamage = 0
    this.eEffect = this.statusMoves(this.eCurrentMove,this.enemyCurrentPokemonObject,
        this.playerCurrentPokemonObject)
}
  }
}
  }
  faint(a){
    if(a<=0){
        return true
    }
  }

  nextPokemon(){
    let enemyTeamLength = this.enemyTeam.length-1
    let ind = Math.round(random(0,enemyTeamLength))
    if(this.enemyTeam[ind].currentHP<1){
        this.nextPokemon()
    }
    return ind
  }

  statusMoves(moveName,user,target){
    if(moveName === "Howl"||moveName === "Meditate"){
        user.currentAtt = user.currentAtt + Math.round(user.stats.att*0.5)
        return `${user.name}'s attack rose!`
    }
    if(moveName === "Defense Curl"||moveName === "Harden"){
        user.currentDef = user.currentDef + Math.round(user.stats.def*0.5)
        return user.name+"'s defense rose!"
    }
    if(moveName === "Rock Polish"){
        user.currentSpe += user.stats.speed
        return user.name+"'s speed rose sharply!"
    }
    if(moveName === "Growl"){
        
        target.currentAtt = target.currentAtt - Math.round(target.stats.att*0.66)
        if(target.currentAtt<=0){
            target.currentAtt = 1
        }
        return target.name+"'s attack fell!"
    }
    if(moveName === "Leer"){
        target.currentDef = target.currentDef - Math.round(target.stats.def*0.66)
        if(target.currentDef<=0){
            target.currentDef = 1
        }
        return target.name+"'s defense fell!"
    }
    if(moveName === "String Shot"){
        target.currentSpe = target.currentSpe - Math.round(target.stats.speed*0.66)
        if(target.currentSpe<=0){
            target.currentSpe = 1
        }
        return target.name+"'s speed fell!"
    }
    if(moveName === "Swords Dance"){
        user.currentAtt += user.stats.att
        return user.name+"'s attack rose sharply!"
    }
    if(moveName === "Iron Defense"){
        user.currentDef += user.stats.def
        return user.name+"'s defense rose sharply!"
    }
    if(moveName === "Nasty Plot"){
        user.currentSpatt += user.stats.spatt
        return user.name+"'s special attack rose sharply!"
    }
    if(moveName === "Amnesia"){
        user.currentSpdef += user.stats.spdef
        return user.name+"'s special defense rose sharply!"
    }
    if(moveName === "Bulk Up"){
        user.currentAtt = user.currentAtt + Math.round(user.stats.att*0.5)
        user.currentDef = user.currentDef + Math.round(user.stats.def*0.5)
        return user.name+"'s attack and defense rose!"
    }
    if(moveName === "Calm Mind"){
        user.currentSpatt = user.currentSpatt + Math.round(user.stats.spatt*0.5)
        user.currentSpdef = user.currentSpdef + Math.round(user.stats.spdef*0.5)
        return user.name+"'s special attack and special defense rose!"
    }
    if(moveName === "Dragon Dance"){
        user.currentAtt = user.currentAtt + Math.round(user.stats.att*0.5)
        user.currentSpe = user.currentSpe + Math.round(user.stats.speed*0.5)
        return user.name+"'s attack and speed rose!"
    }
    if(moveName === "Screech"){
        target.currentDef = target.currentDef - Math.round(target.stats.def*0.5)
        if(target.currentDef<=0){
            target.currentDef = 1
        }
        return target.name+"'s defense fell harshly!"
    }
    if(moveName === "Scary Face"){
        target.currentSpe = target.currentSpe - Math.round(target.stats.speed*0.5)
        if(target.currentSpe<=0){
            target.currentSpe = 1
        }
        return target.name+"'s speed fell harshly!"
    }
   
    if(!target.status){
    if(moveName === "Will-O-Wisp"){
        target.status = "BRN"
        return target.name+" was burned!"
    }
    if(moveName === "Thunder Wave"){
        target.status = "PAR"
        return target.name+" was paralyzed!"
    }
    if(moveName === "Toxic"){
        target.status = "TOX"
        return target.name+" was badly poisoned!"
    }
    if(moveName === "Poison Gas"){
        target.status = "PSN"
        return target.name+" was poisoned!"
    }
    if(moveName === "Hypnosis"){
        target.status = "SLP"
        return target.name+" fell asleep!"
    }
}
else{
    return "But it failed!"
}
    if(moveName === "Confuse Ray"&&!target.confused){
        target.confused = true
        return target.name+" was confused!"
    }
    if(moveName === "Leech Seed"&&!target.confused){
        target.leeched = true
        return target.name+" was leeched!"
    }


  }

  secondaryEffects(moveName,user,target,damage){
    let randChance = Math.round(random(1,100))
    if(moveName === "Close Combat"){
        user.currentDef = Math.round(user.currentDef - user.stats.def*0.66)
        user.currentSpdef = Math.round(user.currentSpdef - user.stats.spdef*0.66)
        return user.name+"'s defense and special defense fell"
    }
    if(moveName === "Nuzzle"&&target.status === null){
        target.status = "PAR"
        return target.name+" was paralyzed"
    }
    if(moveName === "Flare Blitz"||moveName === "Wood Hammer"||moveName === "Brave Bird"
        ||moveName === "Double-Edge" ){
        user.currentHP = user.currentHP - Math.round(damage/3)
        return user.name+" is damaged by recoil!"
    }
    if(moveName === "Take Down"){
        user.currentHP = user.currentHP - Math.round(damage/4)
        return user.name+" is damaged by recoil!"
    }
    if(moveName === "Absorb"||moveName === "Mega Drain"||moveName === "Horn Leech"||
        moveName === "Leech Life"){
            let hplost = user.stats.hp - user.currentHP
            if(Math.round(damage/2)>hplost){
                user.currentHP = user.stats.hp
            }
            else{
            user.currentHP = user.currentHP + Math.round(damage/2)
            }
        if(user.stats.hp === user.currentHP){
            return ""
        }
        else{
            return target.name+" had its energy drained!"
        }
    }
    if(moveName === "Overheat"||moveName === "Leaf Storm"){
        user.currentSpatt = Math.round(user.currentSpatt - user.stats.spatt*0.5)
        return user.name+"'s special attack harshly fell!"
    }
    if(moveName === "Struggle Bug"){
        target.currentSpatt = Math.round(target.currentSpatt - target.stats.spatt*0.66)
        return target.name+"'s special attack fell!"
    }
    if(moveName === "Icy Wind"||moveName === "Mud Shot"){
        target.currentSpe = Math.round(target.currentSpe - target.stats.speed*0.66)
        return target.name+"'s speed fell!"
    }
    if(moveName === "Hammer Arm"){
        user.currentSpe = Math.round(user.currentSpe - user.stats.speed*0.66)
        return user.name+"'s speed fell!"
    }
    if(moveName === "Snarl"){
        target.currentSpatt = Math.round(target.currentSpatt - target.stats.spatt*0.66)
        return target.name+"'s special attack fell!"
    }
    if(moveName === "Breaking Swipe"){
        target.currentAtt = Math.round(target.currentAtt - target.stats.att*0.5)
        return target.name+"'s attack fell!"
    }
    if(moveName === "Steel Beam"){
        user.currentHP = user.currentHP - Math.round(user.stats.hp/2)
        return user.name+" was damaged by recoil!"
    }
    if(randChance>=90){
    if(moveName === "Ember"||moveName === "Flame Burst"||moveName === "Flamethrower"||
       moveName === "Fire Blast"||moveName === "Overheat"||moveName === "Fire Fang"||
       moveName === "Fire Punch"||moveName === "Flame Wheel"||moveName === "Flare Blitz"||
       moveName === "Blaze Kick"){
       if(target.status === null){
       target.status = "BRN"
       return target.name+" was burned!"
       }
    }
    else if(moveName === "Thunder Shock"||moveName === "Electro Ball"||moveName === "Discharge"||
       moveName === "Thunderbolt"||moveName === "Thunder"||moveName === "Thunder Fang"||
       moveName === "Spark"||moveName === "Thunder Punch"||moveName === "Wild Charge"||
       moveName === "Volt Tackle"||moveName === "Zing Zap"){
        if(target.status === null){
       target.status = "PAR"
       return target.name+" was paralyzed!"
    }
    }
    else if(moveName === "Powder Snow"||moveName === "Aurora Beam"||moveName === "Ice Beam"||
       moveName === "Blizzard"||moveName === "Freeze-Dry"||moveName === "Ice Punch"){
        if(target.status === null){
            target.status = "FRZ"
            return target.name+" was frozen!"
        }
    }
    else if(moveName === "Confusion"||moveName === "Psybeam"||moveName === "Psychic"){
        if(target.confused === false){
            target.confused = true
            return target.name+" was confused!"
        }
    }
    else if(moveName === "Energy Ball"||moveName === "Flash Cannon"){
        target.currentSpdef = Math.round(target.currentSpdef - target.stats.spdef*0.66)
        return target.name+"'s special defense fell!"
    }
    else if(moveName === "Play Rough"){
        target.currentAtt = Math.round(target.currentAtt - target.stats.att*0.66)
        return target.name+"'s attack fell!"
    }
    else if(moveName === "Ancient Power"||moveName === "Ominous Wind"||moveName === "Silver Wind"){
        user.currentAtt = Math.round(user.currentAtt+user.stats.att)
        user.currentDef = Math.round(user.currentDef+user.stats.def)
        user.currentSpatt = Math.round(user.currentSpatt+user.stats.spatt)
        user.currentSpdef = Math.round(user.currentSpdef+user.stats.spdef)
        user.currentSpe = Math.round(user.currentSpe+user.stats.speed)
        return user.name+"'s stats rose!"
    }
    else if(moveName === "Metal Claw"){
        user.currentAtt = Math.round(user.currentAtt + user.stats.att)
        return user.name+"'s attack rose!"
    }
    else if(moveName === "Signal Beam"){
            if(target.confused === false){
            target.confused = true
            return target.name+" was confused!"
            }
    }
    else if(moveName === "Bug Buzz"){
        target.currentSpdef = Math.round(target.currentSpdef - target.stats.spdef*0.66)
        return target.name+"'s special defense fell!"
    }
    else{
        return ""
    }
    }
    else if(randChance>=80){
        if(moveName === "Water Pulse"){
            if(target.confused === false){
            target.confused = true
            return target.name+" was confused!"
            }
        }
        else if(moveName === "Liquidation"){
            target.currentDef = target.currentDef - Math.round(target.stats.def*0.66)
            return target.name+"'s defense fell!"
        }
        else if(moveName === "Crunch"){
            target.currentDef -= Math.round(target.stats.def*0.66)
            return target.name+"'s defense fell!"
        }
        else if(moveName === "Shadow Ball"){
        target.currentSpdef = Math.round(target.currentSpdef - target.stats.spdef*0.66)
        return target.name+"'special defense fell!"
        }
        else if(moveName === "Meteor Mash"){
        user.currentAtt = Math.round(user.currentAtt + user.stats.att*0.5)
        return user.name+"'s attack rose!"
        }
        else if(moveName === "Steel Wing"){
        user.currentDef = Math.round(user.currentDef + user.stats.def*0.5)
        return user.name+"'s defense rose!"
        }
        else if(moveName === "Tri Attack"){
            if(target.status === null){
                let s = Math.round(random(1,3))
                if(s === 1){
                    target.status = "BRN"
                    return target.name+" was burned!"
                }
                if(s === 2){
                    target.status = "PAR"
                    return target.name+" was paralzyed!"
                }
                if(s === 3){
                    target.status = "FRZ"
                    return target.name+" was frozen!"
                }
            }
        }
        else{
            return ""
        }
    }
    else if(randChance>=70){
        if(moveName === "Scald"){
            if(target.status === null){
            target.status = "BRN"
            return target.name+" was burned!"
            }
        }
        else if(moveName === "Dragon Breath"||moveName === "Bounce"||moveName === "Lick"){
            if(target.status === null){
            target.status = "PAR"
            return target.name+" was paralzyed!"
            }
        }
        else if(moveName === "Moonblast"){
            target.currentSpatt = Math.round(target.currentSpatt - target.stats.spatt*0.66)
            return target.name+"'s special attack fell!"
        }
        else if(moveName === "Iron Tail"){
            target.currentDef = Math.round(target.currentDef - target.stats.def*0.66)
            return target.name+"'s defense fell!"
        }
        else{
            return ""
        }
    }
    else if(randChance>=50){
        if(moveName === "Razor Shell"||moveName === "Rock Smash"){
            target.currentDef = Math.round(target.currentDef - target.stats.def*0.5)
            return target.name+"'s defense fell!"
        }
        else{
            return ""
        }
    }
    else{
        return ""
    }
  }



}

