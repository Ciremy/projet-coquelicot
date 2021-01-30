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
        name : "Vomie immonde",
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
        name : "Guérison de plante",
        damage : 24,
        manaCost : 15,
        attackType : "Soin",
        imgUrl : "./assets/img/guerison_de_plante.jpg",
        functionClick :"guerisonPlante()"
    },
]

const monsters = [
    {
        name : "Zombie",
        imgUrl : "./assets/img/zombie.jpg",
        lifePoint : 56,
        mana : 15,
        availableAttacks : ["Attaque de base","Peste virulente", "Lacération", "Vomie immonde" ]

    },
    {
        name : "Druide",
        imgUrl : "./assets/img/druide.jpeg",
        lifePoint : 43,
        mana : 25,
        availableAttacks : ["Attaque de base","Attaque de ronce", "Rage animal", "Guérison de plante" ]

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
        if (actualPlayersRessources[0].mana>=0){
            document.getElementById(`player2Hp`).innerHTML =actualPlayersRessources[1].lifePoint+" Hp";
            document.getElementById(`player1Energie`).innerHTML =actualPlayersRessources[0].mana+" Mana";
        }else{
            alert("You can't cast this spell");
            actualPlayersRessources[0].mana =actualPlayersRessources[0].mana+spellMana;
        }
        //updatingRessources(actualPlayersRessources,numPlayer);
        //updatingRessources(actualPlayersRessources[0],numPlayer);
    }else{
        actualPlayersRessources[0].lifePoint = actualPlayersRessources[0].lifePoint-spellDamage;
        actualPlayersRessources[1].mana =actualPlayersRessources[1].mana-spellMana;
        if (actualPlayersRessources[1].mana>=0){
        document.getElementById(`player1Hp`).innerHTML =actualPlayersRessources[0].lifePoint+" Hp";
        document.getElementById(`player2Energie`).innerHTML =actualPlayersRessources[1].mana+" Mana";
        }else{
            alert("You can't cast this spell");
            actualPlayersRessources[1].mana =actualPlayersRessources[1].mana+spellMana;
        }
        
        //updatingRessources(actualPlayersRessources,numPlayer);
    }
    winTest();
    console.log(actualPlayersRessources);
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

    
}

init()

