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

// nomVariable=["nom",degat,cout energie,type,image]

const attacks = [ 
     {
        name : "Attaque de base",
        damage : 5,
        manaCost : 0,
        attackType : "Physique",
        imgUrl : "./assets/img/basic_attack.png"
    },
     {
        name : "Peste virulente",
        damage : 5,
        manaCost : 0,
        attackType : "Maladie",
        imgUrl : "./assets/img/basic_attack.png"
    },
    {
        name : "Lacération",
        damage : 18,
        manaCost : 7,
        attackType : "Physique",
        imgUrl : "./assets/img/basic_attack.png"
    },
    {
        name : "Vomie immonde",
        damage : 5,
        manaCost : 0,
        attackType : "Physique",
        imgUrl : "./assets/img/basic_attack.png"
    },
]
    
//     ["Attaque de base",5,0,"Physique","./assets/img/basic_attack.png"];
//     pesteVirulente  :["Peste virulente",15,5,"Maladie","./assets/img/peste_virulente.jpeg"];
//     laceration  :["Lacération",18,7,"Physique","./assets/img/laceration.png"];
//     vomieImmonde : ["Vomie immonde",15,3,"Maladie","./assets/img/vomie_immonde.png"];
//     attaqueDeRonce :["Attaque de ronce",15,5,"Nature","./assets/img/attaque_de_ronce.jpg"];
//     rageAnimal :["Rage animal",20,7,"Physique","./assets/img/rage_animal.jpg"];
//     guerisonDePlante :["Guérison de plante",-24,12,"Soin","./assets/img/guerison_de_plante.jpg"];
// }



// TODO insert in attacks object
const basicAttack =["Attaque de base",5,0,"Physique","./assets/img/basic_attack.png"];
const pesteVirulente =["Peste virulente",15,5,"Maladie","./assets/img/peste_virulente.jpeg"];
const laceration =["Lacération",18,7,"Physique","./assets/img/laceration.png"];
const vomieImmonde= ["Vomie immonde",15,3,"Maladie","./assets/img/vomie_immonde.png"];
const attaqueDeRonce=["Attaque de ronce",15,5,"Nature","./assets/img/attaque_de_ronce.jpg"];
const rageAnimal=["Rage animal",20,7,"Physique","./assets/img/rage_animal.jpg"];
const guerisonDePlante=["Guérison de plante",-24,12,"Soin","./assets/img/guerison_de_plante.jpg"];


// nomVariable =["Nom",image,point de vie,energie,id sort 1,id sort 2,id sort 3 ,id sort 4]
let zombie= ["Zombie","./assets/img/zombie.jpg",56,15,basicAttack,pesteVirulente,laceration,vomieImmonde];
let druide= ["Druide","./assets/img/druide.jpeg",43,25,basicAttack,attaqueDeRonce,rageAnimal,guerisonDePlante];

const monsters = [
    {
        name : "Zombie",
        imgUrl : "./assets/img/zombie.jpg",
        lifePoint : 56,
        mana : 15,
        availableAttacks : ["Attaque de base","Peste virulente", "Lacération", "Vomie immonde" ]

    },
     //TODO : add other monsters
]

//attribution du monstre au joueurs
let mobIndex =[zombie,druide]; // not needed anymore
let player1= monsters[Math.floor(Math.random()*monsters.length)];
//console.log(player1);
let player2= monsters[Math.floor(Math.random()*monsters.length)];
//console.log(player2);

//Génération des sorts 

function spellVisuelGeneration(monsterData,numPlayer){

    const playerSpells = monsterData.availableAttacks
    const fullPlayerSpells = playerSpells.map(spell => {
        const matchedSpell = attacks.find(sp => sp.name === spell)
        // console.log("matchedSpell ==>", matchedSpell)
        matchedSpell.backgroundColor = SPELL_BACKGROUND[matchedSpell.attackType.toLowerCase()] || "white"
        return matchedSpell
    } )

    // fullPlayerSpells.forEach(sp => {return {...sp, backgroundColor : SPELL_BACKGROUND[sp.spellAttackType.toLowerCase()] || "white" }})

    fullPlayerSpells.forEach((spell, idx) => {
        const j=(idx+1)
        const prefix = `spell${j}`

        console.log("id",idx, `${prefix}Name${numPlayer}`)
        document.getElementById(`${prefix}Name${numPlayer}`).innerHTML = spell.name;
        document.getElementById(`${prefix}Damage${numPlayer}`).innerHTML = `${spell.damage} Dmg`;
        document.getElementById(`${prefix}Cost${numPlayer}`).innerHTML = `${spell.manaCost} Mana`;
        document.getElementById(`${prefix}Type${numPlayer}`).innerHTML = spell.attackType;
        document.getElementById(`${prefix}${numPlayer}`).style.background=spell.backgroundColor;
        let spellPicture =document.getElementById(`${prefix}Picture${numPlayer}`);
        spellPicture.setAttribute("src",spell.imgUrl);
    })    
    
}

// atrtibution de l'image pour le joueur

/*function pictureAttribution(playerVisuelTemp){
    //numPlayer=numPlayer.toString;
    //console.log(numPlayer);
    var playerPicture =document.getElementById("player1Picture");
    playerPicture.setAttribute("src",playerVisuelTemp[1]);
    playerPicture =document.getElementById("player1Picture");
    playerPicture.setAttribute("src",playerVisuelTemp[1]);
}*/

var playerPicture =document.getElementById("player1Picture");
playerPicture.setAttribute("src",player1.imgUrl);
playerPicture =document.getElementById("player2Picture");
playerPicture.setAttribute("src",player2.imgUrl);



function ressources(monsterData, playerNb){
    const playerHp = monsterData.lifePoint
    const playerEnergy = monsterData.mana

    document.getElementById(`player${playerNb}Hp`).innerHTML =playerHp+" Hp";
    document.getElementById(`player${playerNb}Energie`).innerHTML =playerEnergy+" Stamina";
}











// cette fonction a besoin de deux variables les degats et les points de vie
function attack(){
    
}


function init () {
    // do something
    spellVisuelGeneration(player1, "1");
    //pictureAttribution(player1,numPlayer);
    spellVisuelGeneration(player2, "2");
    //pictureAttribution(player2,numPlayer);
    ressources(player1, "1");
    ressources(player2, "2");    
}

init()
