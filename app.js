'use strict'

const SPELL_BACKGROUND = {
    nature : "#5AE43F",
    arcane : "#D398B3",
    "lumière" : "#FEEC8A",
    ombre : "#4e0036",
    physique : "#D3D3D3",
    maladie : "#CC3222",
    soin : "#96DD7E"

}

const attacks = [ 
    {
        name : "Attaque de base",
        damage : 5,
        manaCost : 0,
        attackType : "Physique",
        imgUrl : "./assets/img/basic_attack.png",
        functionClick :"attaqueBasique()"
    },
    {
        name : "Peste virulente",
        damage : 15,
        manaCost : 5,
        attackType : "Maladie",
        imgUrl : "./assets/img/peste_virulente.jpeg",
        functionClick :"pesteVirulente()"
    },
    {
        name : "Lacération",
        damage : 18,
        manaCost : 7,
        attackType : "Physique",
        imgUrl : "./assets/img/laceration.png",
        functionClick :"laceration()"
    },
    {
        name : "Vomi immonde",
        damage : 12,
        manaCost : 3,
        attackType : "Maladie",
        imgUrl : "./assets/img/vomie_immonde.png",
        functionClick :"vomieImmonde()"
    },
    {
        name : "Attaque de ronce",
        damage : 15,
        manaCost : 3,
        attackType : "Nature",
        imgUrl : "./assets/img/attaque_de_ronce.jpg",
        functionClick :"attaqueRonce()"
    },
    {
        name : "Rage animal",
        damage : 20,
        manaCost : 7,
        attackType : "Physique",
        imgUrl : "./assets/img/rage_animal.jpg",
        functionClick :"rageAnimal()"
    },
    {
        name : "Tempête meurtrières",
        damage : 24,
        manaCost : 15,
        attackType : "Nature",
        imgUrl : "./assets/img/tempete.png",
        functionClick :"guerisonPlante()"
    },
    {
        name : "Charge",
        damage : 16,
        manaCost : 4,
        attackType : "Physique",
        imgUrl : "./assets/img/charge.jpg",
        functionClick :"charge()"
    },
    {
        name : "Morsure venimeuse",
        damage : 22,
        manaCost : 7,
        attackType : "Maladie",
        imgUrl : "./assets/img/morsure.png",
        functionClick :"morsureVenimeuse()"
    },
    {
        name : "Piétinement",
        damage : 8,
        manaCost : 2,
        attackType : "Physique",
        imgUrl : "./assets/img/pietinement.svg",
        functionClick :"pietinement()"
    },
    {
        name : "Frappe sacrée",
        damage : 7,
        manaCost : 2,
        attackType : "Lumière",
        imgUrl : "./assets/img/frappe_sacree.jpg",
        functionClick :"frappeSacree()"
    },
    {
        name : "Zone sacrée",
        damage : 15,
        manaCost : 4,
        attackType : "Lumière",
        imgUrl : "./assets/img/zone_sacree.jpg",
        functionClick :"zoneSacree()"
    },
    {
        name : "Ultime recours",
        damage : 40,
        manaCost : 20,
        attackType : "Lumière",
        imgUrl : "./assets/img/ultime_recours.jpeg",
        functionClick :"ultimeRecours()"
    },
    {
        name : "Ombre grandissante",
        damage : 32,
        manaCost : 18,
        attackType : "Ombre",
        imgUrl : "./assets/img/ombre_grandissante.jpg",
        functionClick :"ombreGrandissante()"
    },
    {
        name : "Vision horrifique",
        damage : 26,
        manaCost : 11,
        attackType : "Ombre",
        imgUrl : "./assets/img/vision_horrifique.jpg",
        functionClick :"visionHorrifique()"
    },
    {
        name : "Ombre enveloppante",
        damage : 18,
        manaCost : 7,
        attackType : "Ombre",
        imgUrl : "./assets/img/ombre_enveloppante.jpg",
        functionClick :"ombreEnveloppante()"
    },

]

const monsters = [
    {
        name : "Zombie",
        imgUrl : "./assets/img/zombie.jpg",
        lifePoint : 84,
        mana : 12,
        availableAttacks : ["Attaque de base","Peste virulente", "Lacération", "Vomi immonde" ]

    },
    {
        name : "Druide",
        imgUrl : "./assets/img/druide.jpeg",
        lifePoint : 59,
        mana : 27,
        availableAttacks : ["Attaque de base","Attaque de ronce", "Rage animal", "Tempête meurtrières" ]

    },
    {
        name : "Chimère",
        imgUrl : "./assets/img/chimere.jpg",
        lifePoint : 62,
        mana : 19,
        availableAttacks : ["Attaque de base","Charge", "Morsure venimeuse", "Piétinement" ]
    },
    {
        name : "Paladin",
        imgUrl : "./assets/img/paladin.png",
        lifePoint : 95,
        mana : 22,
        availableAttacks : ["Attaque de base","Frappe sacrée", "Zone sacrée", "Ultime recours" ]
    },
    {
        name : "Spectre ombreux",
        imgUrl : "./assets/img/spectre_ombreux.jpg",
        lifePoint : 51,
        mana : 35,
        availableAttacks : ["Attaque de base","Ombre grandissante", "Vision horrifique", "Ombre enveloppante" ]
    },
     //TODO : add other monsters
]
let player1;
let player2;
let playerPicture;
function monsterAtribution (monsters){
    //attribution du monstre au joueurs
    player1= monsters[Math.floor(Math.random()*monsters.length)];
    //console.log(player1);
    player2= monsters[Math.floor(Math.random()*monsters.length)];
    //console.log(player2);
    playerPicture =document.getElementById("player1Picture");
    playerPicture.setAttribute("src",player1.imgUrl);
    playerPicture =document.getElementById("player2Picture");
    playerPicture.setAttribute("src",player2.imgUrl);
    }


//Génération des sorts 

function spellVisuelGeneration(monsterData,numPlayer){

    const playerSpells = monsterData.availableAttacks
    const fullPlayerSpells = playerSpells.map(spell => {
        const matchedSpell = attacks.find(sp => sp.name === spell)
        //console.log("matchedSpell ==>", matchedSpell)
        matchedSpell.backgroundColor = SPELL_BACKGROUND[matchedSpell.attackType.toLowerCase()] || "white"
        return matchedSpell
    } )

    // fullPlayerSpells.forEach(sp => {return {...sp, backgroundColor : SPELL_BACKGROUND[sp.spellAttackType.toLowerCase()] || "white" }})

    fullPlayerSpells.forEach((spell, idx) => {
        const j=(idx+1)
        const prefix = `spell${j}`

        //console.log("id",idx, `${prefix}Name${numPlayer}`)
        document.getElementById(`${prefix}Name${numPlayer}`).innerHTML = spell.name;
        document.getElementById(`${prefix}Damage${numPlayer}`).innerHTML = `${spell.damage} Dmg`;
        document.getElementById(`${prefix}Cost${numPlayer}`).innerHTML = `${spell.manaCost} Mana`;
        document.getElementById(`${prefix}Type${numPlayer}`).innerHTML = spell.attackType;
        document.getElementById(`${prefix}${numPlayer}`).style.background=spell.backgroundColor;
        document.getElementById(`${prefix}${numPlayer}`).setAttribute("onclick", `spellUse(${spell.damage},${spell.manaCost},${numPlayer})`);
        let spellPicture =document.getElementById(`${prefix}Picture${numPlayer}`);
        spellPicture.setAttribute("src",spell.imgUrl);
    })    
    
}

let actualPlayersRessources = [
    {
        lifePoint:1,
        mana:1
    },
    {
        lifePoint:1,
        mana:1
    },
]


function ressources(monsterData, playerNb){
    const playerName =monsterData.name;
    const playerHp = monsterData.lifePoint;
    const playerEnergy = monsterData.mana;
    let j=playerNb-1;

    actualPlayersRessources[j].lifePoint= playerHp;
    actualPlayersRessources[j].mana= playerEnergy;
    // actualPLayer2Mana
    
    //console.log(actualPlayersRessources);
    document.getElementById(`mob${playerNb}Name`).innerHTML =playerName;
    document.getElementById(`player${playerNb}Hp`).innerHTML =playerHp+" Hp";
    document.getElementById(`player${playerNb}Energie`).innerHTML =playerEnergy+" Mana";
}

// function updatingRessources(ressourcesData,numPlayer){
//     // if(numPlayer==2){
//     //     numPlayer=0;
//     // }
//     console.log(numPlayer);
//     const playerHp =ressourcesData[numPlayer].lifePoint;
//     const playerEnergy =ressourcesData[numPlayer].mana;
//     console.log(ressourcesData);
//     document.getElementById(`player${numPlayer}Hp`).innerHTML =playerHp+" Hp";
//     document.getElementById(`player${numPlayer}Energie`).innerHTML =playerEnergy+" Mana";

// }

let playerTurn ;

function choseFisrtPlayer(){
    playerTurn = Math.floor((Math.random()*2)+1);
    console.log(playerTurn);
    document.getElementById(`player${playerTurn}Turn`).innerHTML = "It's your turn to play";
    if(playerTurn ==1){
        document.getElementById(`player${playerTurn+1}Turn`).innerHTML = "It's not your turn to play";
    }else{
        document.getElementById(`player${playerTurn-1}Turn`).innerHTML = "It's not your turn to play";
    }
    
}

function switchingTurn(){
    if(playerTurn == 1){
        playerTurn=2;
        document.getElementById(`player${playerTurn}Turn`).innerHTML = "It's your turn to play";
        document.getElementById(`player${playerTurn-1}Turn`).innerHTML = "It's not your turn to play";
    }else{
        playerTurn=1;
        document.getElementById(`player${playerTurn}Turn`).innerHTML = "It's your turn to play";
        document.getElementById(`player${playerTurn+1}Turn`).innerHTML = "It's not your turn to play";
    }
}

function winTest(){
    if(actualPlayersRessources[0].lifePoint<0){
        alert("player 2 won");
    }
    if(actualPlayersRessources[1].lifePoint<0){
        alert("player 1 won");
    }
}

function spellUse(spellDamage,spellMana,numPlayer){
    //console.log(spellDamage);
    // console.log(spellMana);
    
    if (numPlayer==1){
        actualPlayersRessources[1].lifePoint = actualPlayersRessources[1].lifePoint-spellDamage;
        actualPlayersRessources[0].mana =actualPlayersRessources[0].mana-spellMana;
        console.log(playerTurn);
        if(playerTurn ==1){
            if (actualPlayersRessources[0].mana>=0){
                document.getElementById(`player2Hp`).innerHTML =actualPlayersRessources[1].lifePoint+" Hp";
                document.getElementById(`player1Energie`).innerHTML =actualPlayersRessources[0].mana+" Mana";
                switchingTurn();
            }else{
                alert("You can't cast this spell");
                actualPlayersRessources[0].mana =actualPlayersRessources[0].mana+spellMana;
                actualPlayersRessources[1].lifePoint = actualPlayersRessources[1].lifePoint+spellDamage;
            }
        }else{
            alert("It's not your turn to play");
            actualPlayersRessources[0].mana =actualPlayersRessources[0].mana+spellMana;
            actualPlayersRessources[1].lifePoint = actualPlayersRessources[1].lifePoint+spellDamage;
        }
        
    }else{
        actualPlayersRessources[0].lifePoint = actualPlayersRessources[0].lifePoint-spellDamage;
        actualPlayersRessources[1].mana =actualPlayersRessources[1].mana-spellMana;
        if(playerTurn ==2){
            if (actualPlayersRessources[1].mana>=0){
                document.getElementById(`player1Hp`).innerHTML =actualPlayersRessources[0].lifePoint+" Hp";
                document.getElementById(`player2Energie`).innerHTML =actualPlayersRessources[1].mana+" Mana";
                switchingTurn();
            }else{
                    alert("You can't cast this spell");
                    actualPlayersRessources[1].mana =actualPlayersRessources[1].mana+spellMana;
                    actualPlayersRessources[0].lifePoint = actualPlayersRessources[0].lifePoint+spellDamage;
            }
        }else{
            alert("It's not your turn to play");
            actualPlayersRessources[1].mana =actualPlayersRessources[1].mana+spellMana;
            actualPlayersRessources[0].lifePoint = actualPlayersRessources[0].lifePoint+spellDamage;
        }
        
        
        //updatingRessources(actualPlayersRessources,numPlayer);
    }
    winTest();
    //console.log(actualPlayersRessources);
}






function init () {
    // do something
    monsterAtribution(monsters);
    spellVisuelGeneration(player1, "1");
    //pictureAttribution(player1,numPlayer);
    spellVisuelGeneration(player2, "2");
    //pictureAttribution(player2,numPlayer);
    ressources(player1, "1");
    ressources(player2, "2");
    choseFisrtPlayer();       
}

init()

