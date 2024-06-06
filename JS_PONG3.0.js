//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20
;
let raio = diametro/2;

//velocidade da bolinha
let velocidadeXBolinha = 7; 
let velocidadeYBolinha = 7;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 112;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
 background(0);
 mostraBolinha();
 movimentaBolinha();
 verificaColisaoborda();
 mostraRaquete(xRaquete,yRaquete);
 mostraRaquete(xRaqueteOponente,yRaqueteOponente);
 verificaColisaoRaquete();
 movimentaMinhaRaquete();
 movimentaRaqueteOponente();
 verificaColisaoOponente();
 incluiPlacar();
 marcaPonto();
}

function mostraBolinha(){
  circle (xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
 xBolinha += velocidadeXBolinha;
 yBolinha += velocidadeYBolinha;
}

function verificaColisaoborda(){
 if (xBolinha + raio > width || xBolinha - raio < 0)
 {velocidadeXBolinha *= -1;
 }
 if (yBolinha + raio > height || yBolinha - raio < 0)
 {velocidadeYBolinha *= -1;
 }
}

 function mostraRaquete(x,y){
  rect(x,y,raqueteComprimento, raqueteAltura)
}
function verificaColisaoRaquete(){
 if (xBolinha - raio < xRaquete + raqueteComprimento
     && yBolinha - raio < yRaquete + raqueteAltura
     && yBolinha - raio > yRaquete) {velocidadeXBolinha *=-1;}
}
function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)) {yRaquete -= 10;}
  if(keyIsDown(DOWN_ARROW)) {yRaquete += 10;}
}
function movimentaRaqueteOponente(){
 velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento /2;
 yRaqueteOponente += velocidadeYOponente;
}
function verificaColisaoOponente(){
  if(xBolinha > xRaqueteOponente - raqueteComprimento
  && yBolinha - raio < yRaqueteOponente + raqueteAltura
  && yBolinha + raio > yRaqueteOponente)
  {velocidadeXBolinha *= -1;}
}
 function incluiPlacar(){
  stroke(255)
  textAlign(CENTER);
  fill(color(255,140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255,140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
   
}

function marcaPonto(){
  if (xBolinha > 590) {meusPontos += 1}
  if (xBolinha < 10) {pontosDoOponente += 1}
}

