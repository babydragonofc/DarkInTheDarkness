 //helcome sir

const parede1 = {img:"imgs/1.png", colision: true, interact: false}
const parede2 = {img:"imgs/2.png", colision: true, interact: false}
const parede3 = {img:"imgs/3.png", colision: true, interact: false}
const parede4 = {img:"imgs/6.png", colision: true, interact: false}
const parede5 = {img:"imgs/8.png", colision: true, interact: false}
const parede6 = {img:"imgs/11.png", colision: true, interact: false}
const parede7 = {img:"imgs/12.png", colision: true, interact: false}
const parede8 = {img:"imgs/13.png", colision: true, interact: false}
const parede9 = {img:"imgs/16.png", colision: true, interact: false}

const parede10 = {img:"imgs/23.png", colision: true, interact: false}
const parede11 = {img:"imgs/24.png", colision: true, interact: false}
const parede12 = {img:"imgs/25.png", colision: true, interact: false}

const parede13 = {img:"imgs/26.png", colision: true, interact: false}
const parede14 = {img:"imgs/29.png", colision: true, interact: false}
const parede15 = {img:"imgs/30.png", colision: true, interact: false}

const parede16 = {img:"imgs/21.png", colision: true, interact: false}
const parede17 = {img:"imgs/22.png", colision: true, interact: false}
const parede18 = {img:"imgs/27.png", colision: true, interact: false}
const parede19 = {img:"imgs/28.png", colision: true, interact: false}




const porta1 = {img:"imgs/4.png", colision: true, interact: false}
const porta2 = {img:"imgs/5.png", colision: false, interact: false}

const chão = {img:"imgs/7.png", colision: false, interact: false}

const chave = {img:"imgs/9.png", colision: false, interact: true}
const moeda = {img:"imgs/15.png", colision: false, interact: true}
const caixa = {img:"imgs/B1.png", colision: false, interact: false}


const fogo = {img:"imgs/14.png", colision: false, interact: false}

var player = {img: "imgs/10.png", dinheiro: 0,dinheiroDaSala: 0, x: 4, y: 4, lx:4, ly: 4}


const fases = [
    [

        [parede1,parede2,parede2,porta2,parede2,parede2,parede2,parede3],
        [parede4,chão,chão,chão,chão,chão,chão,parede5],
        [parede4,chão,chão,chão,chão,chão,chão,parede5],
        [parede4,moeda,chão,chão,chão,chão,chão,parede5],
        [parede4,moeda,chão,chão,chão,chão,chão,parede5],
        [parede4,moeda,chão,chão,chão,chão,chão,parede5],
        [parede4,chão,chão,chão,chão,chão,chão,parede5],
        [parede6,parede7,parede7,parede7,parede7,parede7,parede7,parede8],

        {porta: {x: 3, y: 0}, spawn: {x: 4, y: 4} }

    ],

    [

        [parede1,parede2,parede2,porta1,parede2,parede2,parede2,parede3],
        [parede4,chão,chão,chão,chão,chão,chão,parede5],
        [parede4,chão,chão,chão,chão,chão,chão,parede5],
        [parede4,moeda,chão,chão,chão,chão,chão,parede5],
        [parede4,moeda,chão,chão,chão,chão,chão,parede5],
        [parede4,moeda,chão,chão,chão,chão,chão,parede5],
        [parede4,chão,chão,chão,chão,chave,chão,parede5],
        [parede6,parede7,parede7,parede7,parede7,parede7,parede7,parede8],

        {porta: {x: 3, y: 0}, spawn: {x: 4, y: 4} }

    ],

    [

        [parede1,parede2,parede2,porta1,parede2,parede2,parede2,parede3],
        [parede4,chão,chão,chão,chão,chão,chão,parede5],
        [parede4,chão,parede9,chão,chão,parede9,chão,parede5],
        [parede4,moeda,chão,fogo,fogo,chão,chão,parede5],
        [parede4,moeda,chão,fogo,fogo,chão,chão,parede5],
        [parede4,moeda,parede9,chão,chão,parede9,moeda,parede5],
        [parede4,chão,chão,chão,chão,chave,chão,parede5],
        [parede6,parede7,parede7,parede7,parede7,parede7,parede7,parede8],

        {porta: {x: 3, y: 0}, spawn: {x: 4, y: 5}}

    ],

    [

        [parede1,parede2,parede2,porta1,parede2,parede2,parede2,parede3],
        [parede4,chão,chão,caixa,chão,chão,chão,parede5],
        [parede16,parede11,parede12,chão,parede9,chão,parede10,parede18],
        [parede4,chão,chão,moeda,chão,moeda,chão,parede5],
        [parede4,chão,chão,chão,chão,chão,chão,parede5],
        [parede4,chão,chão,chão,chão,chão,chão,parede5],
        [parede4,chão,chão,chão,chão,chave,chão,parede5],
        [parede6,parede7,parede7,parede7,parede7,parede7,parede7,parede8],

        {porta: {x: 3, y: 0}, spawn: {x: 4, y: 5}}

    ]

]

var faseBackUp = []
var fase = []

var faseAtual = 3
fase = fases[faseAtual]

LoadMap()
movePlayer()
function LoadMap() {
    faseBackUp = []
    for (let i = 1; i <= 9; i++) {
    
        if(i != 9){
            faseBackUp.push(["","","","","","","",""])
        }
        else {
            faseBackUp.push(fase[8])
        }
            
        //console.log(faseBackUp)
        
    }
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
            const elementoId = `x${i}y${j}`;
            const elemento = document.getElementById(elementoId);
            if (elemento) {
                elemento.style.backgroundImage = `url(${fase[i - 1][j - 1].img})`;
            
                faseBackUp[i - 1][j - 1] = fase[i - 1][j - 1]
            } else {
                console.error(`Elemento não encontrado: ${elementoId}`);
            }
        }
    }
}


//MOVIMENTO 


// Adicionando eventos para as teclas
document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'w' || 'W':
            Up();
            break;
        case 's' || 'S':
            Down();
            break;
        case 'a' || 'A':
            Left();
            break;
        case 'd' || 'D':
            Right();
            break;
    }
});

let canMove = true; // Variável para controlar se o jogador pode se mover
let moveTimeout = 120; // Tempo de espera em milissegundos (500ms = 0.5s)

function Up() {
    if (canMove && fase[player.y - 1][ player.x].colision == false) {

        if (fase[player.y - 1][ player.x] == caixa && fase[player.y - 2][ player.x] == chão) {

            console.log("empurrando")
            fase[player.y - 1][ player.x] = chão
            fase[player.y - 2][ player.x] = caixa

            LoadMap()
            movePlayer()


        }

        else {

            if (fase[player.y - 1][ player.x] == caixa && fase[player.y - 2 ][ player.x] != chão) {

                return

            }

        }

        player.lx = player.x;
        player.ly = player.y;
        player.y -= 1;
        movePlayer();
        canMove = false;
        setTimeout(() => {
            canMove = true;
        }, moveTimeout);
    } else {
        console.log("colidiu");
        console.log(fase[player.y + 1][ player.x].colision);
    }
}

function Down() {
    if (canMove && fase[player.y + 1][ player.x].colision == false) {

        if (fase[player.y + 1][ player.x] == caixa && fase[player.y + 2][ player.x] == chão) {

            console.log("empurrando")
            fase[player.y + 1][ player.x] = chão
            fase[player.y + 2][ player.x] = caixa

            LoadMap()
            movePlayer()


        }

        else {

            if (fase[player.y + 1][ player.x] == caixa && fase[player.y + 2][ player.x] != chão) {

                return

            }

        }

        player.lx = player.x;
        player.ly = player.y;
        player.y += 1;
        movePlayer();
        canMove = false;
        setTimeout(() => {
            canMove = true;
        }, moveTimeout);
    } else {
        console.log("colidiu");
    }
}

function Right() {
    if (canMove && fase[player.y][ player.x + 1].colision == false) {

        if (fase[player.y][ player.x + 1] == caixa && fase[player.y][ player.x + 2] == chão) {

            console.log("empurrando")
            fase[player.y][ player.x + 1] = chão
            fase[player.y][ player.x + 2] = caixa

            LoadMap()
            movePlayer()


        }
        
        else {

            if (fase[player.y][ player.x + 1] == caixa && fase[player.y][ player.x + 2] != chão) {

                return

            }

        }

        player.lx = player.x;
        player.ly = player.y;
        player.x += 1;
        movePlayer();
        canMove = false;
        setTimeout(() => {
            canMove = true;
        }, moveTimeout);
    } else {
        console.log("colidiu");
    }
}

function Left() {
    if (canMove && fase[player.y][ player.x - 1].colision == false) {

        if (fase[player.y][ player.x - 1] == caixa && fase[player.y][ player.x - 2] == chão) {

            console.log("empurrando")
            fase[player.y][ player.x - 1] = chão
            fase[player.y][ player.x - 2] = caixa

            LoadMap()
            movePlayer()

        }

        else {

            if (fase[player.y][ player.x - 1] == caixa && fase[player.y][ player.x - 2] != chão) {

                return

            }

        }

        player.lx = player.x;
        player.ly = player.y;
        player.x -= 1;
        movePlayer();
        canMove = false;
        setTimeout(() => {
            canMove = true;
        }, moveTimeout);
    } else {
        console.log("colidiu");
    }
}

function movePlayer(){
    const elementoId = `x${player.y + 1}y${player.x + 1}`;
    const elemento = document.getElementById(elementoId);

    // Corrigindo o lElementoId:
    const lElementoId = `x${player.ly + 1}y${player.lx + 1}`;
    const lElemento = document.getElementById(lElementoId);

    if (elemento) {

                // Remova essa linha:
                lElemento.style.backgroundImage = `url(${fase[player.ly][player.lx].img})`;
    
                // Atualize a imagem do jogador na posição atual:
                elemento.style.backgroundImage = `url(${player.img})`;

            if (fase[player.y][player.x].interact == true) {
                // Adicionando a chave ao inventário do jogador

                if (fase[player.y][player.x] == chave){
                    OpenDoor()
                }
                if (fase[player.y][player.x] == moeda){
                    player.dinheiroDaSala += 1;
                    document.getElementById("moedasDisplay").innerHTML = player.dinheiro + player.dinheiroDaSala;
                }   
            fase[player.y][player.x] = chão; // Mark the item as collected in the phase


                console.log("item coletado")
            }

            if (fase[player.y][player.x] == porta2) {

                    if (fases.length - 1 != faseAtual) {

                    console.log("Proxima sala")

                    player.dinheiro += player.dinheiroDaSala;
                    player.dinheiroDaSala = 0;

                    fase = fases[faseAtual += 1]
                    //faseBackUp = fases[faseAtual]
                    console.log(fase)

                    player.x = fase[8].spawn.x;
                    player.y = fase[8].spawn.y;
                    player.lx = fase[8].spawn.x;
                    player.ly = fase[8].spawn.y;


                    LoadMap()
                    movePlayer()

                    }
            }

if (fase[player.y][player.x] == fogo) { 
    console.log("Player entered fire, resetting room."); // Log for debugging
    // Reset the items in the current phase
    
    console.log(fase)
    player.x = fase[8].spawn.x;
    player.y = fase[8].spawn.y;
    player.lx = fase[8].spawn.x;
    player.ly = fase[8].spawn.y;
    
    player.dinheiroDaSala = 0; // Reset the collected money for the current room
    
    document.getElementById("moedasDisplay").innerHTML = player.dinheiro + player.dinheiroDaSala;
    fase = faseBackUp; // Create a deep copy of the current phase

    LoadMap()
    movePlayer()

    }
    }
    else {
        console.error(`Elemento não encontrado: ${elementoId}`)
    }

}

function OpenDoor() {

    fase[fase[8].porta.y][fase[8].porta.x] = porta2

    const elementoId = `x${fase[8].porta.y + 1}y${fase[8].porta.x + 1}`;
    const elemento = document.getElementById(elementoId);
    elemento.style.backgroundImage = `url(${porta2.img})`;
    
}
